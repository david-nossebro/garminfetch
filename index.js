const fetch = require('node-fetch');

const fetchGarminKml = async () => {
    const response = await fetch('https://eur-origin.explore.garmin.com/Feed/Share/davidsgronaband?d1=2021-01-01T00:00z')
    const responseText = await response.text()
    console.log("Response: ", JSON.stringify(responseText))
}

fetchGarminKml()