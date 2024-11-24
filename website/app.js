/* Global Variables */
const apiKey = 'e9b70cd1833d649a49fff1a3cc5546d9&units=imperial';
const url = `http://api.openweathermap.org/data/2.5/weather?`

const zipCode = document.getElementById("zip");
const generateBtn = document.getElementById("generate");
const feelingArea = document.getElementById("feelings");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

/**
 * function to retrive weather data using the zip code provided by the user for the country
 * @param {*} cityZipCode the zip code the user entered
 * @returns the data retrieved form the API 
 */
const getWeather = async (cityZipCode) => {
    const fullUrl = `${url}zip=${cityZipCode}&appid=${apiKey}`
    console.log(d);
    const apiData = await fetch(fullUrl); 

    try{
        const weather = await apiData.json();        
        const data = {
            "temp": weather.main.temp,
            "feeling": feelingArea.value, 
            "date": newDate
        }
        console.log(d);
        return data; 
    }
    catch(error){
        console.log(`error getting|processing data from weather API: ${error}`);
    }
}


/**
 * function to update the needed data on server side
 * @param {*} weatherData data retrieved from weather API
 */
const UpdateData = async(weatherData) => {
    const res = await fetch("/add", {
        method:"POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },      
        body: JSON.stringify(weatherData),  
    })
}

/**
 * function to update the UI by updating the html Elements
 */
const UpdateUI = async () => {  
    const allData = await fetch('/all');  //retreive the data from the server
    try{
        const weatherData = await allData.json();
    
        document.getElementById('temp').innerHTML= Math.round(weatherData.temp)+ '&#8457;';
        document.getElementById('date').innerText=weatherData.date; 
        document.getElementById('content').innerText=weatherData.feeling;
    }
    catch(error){
        console.log(`error getting data: ${error}`);
    }

    //clear the user input
    zipCode.value="";
    feelingArea.value='';
}


const generateData = async () => {
    const countryCode = zipCode.value.trim();
    if(!countryCode) alert("Zip Code should be filled");
    else{ 
        await getWeather(countryCode)
        
        .then(weather => UpdateData(weather))
        
        .then(() => UpdateUI())
        
        
        .catch(error => console.log(`error in data updating: ${error}`));
    }
};

generateBtn.addEventListener('click', ()=>{
    generateData();
});