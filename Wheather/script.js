console.log("This is in the console and no anywhere ");
//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '699f3dd200msha8c7a708ca1fe40p1b3c32jsnac5c831a9abc',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// let a= async()=>{try {
    const getWheather=(city)=>{
        cityName.innerHTML=city;
        const response =  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	//const response = await fetch(url, options)
    .then((response)=>response.json())
    .then((response)=>{console.log(response)

        //cloud_pct.innerHTML=response.cloud_pct
        temp.innerHTML=response.temp
        temp2.innerHTML=response.temp
        feels_like.innerHTML=response.feels_like
        humidity.innerHTML=response.humidity
        humidity2.innerHTML=response.humidity
        min_temp.innerHTML=response.min_temp
        max_temp.innerHTML=response.max_temp
        wind_speed.innerHTML=response.wind_speed
        wind_speed2.innerHTML=response.wind_speed
        wind_degrees.innerHTML=response.wind_degrees
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset

    })
    .catch((e)=>console.log(e));
    }
	
let a=document.getElementById('submit');
a.addEventListener('click',(e)=>{
    e.preventDefault();
    getWheather(city.value);
 })
 getWheather('Delhi');
// This is the for the mumbai 
 const MumbaiWheather=()=>{
    //cityName.innerHTML=city;
    const response =  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Mumbai', options)
//const response = await fetch(url, options)
.then((response)=>response.json())
.then((response)=>{console.log(response)

    //cloud_pct.innerHTML=response.cloud_pct
    m1.innerHTML=response.temp
    m2.innerHTML=response.temp
    m3.innerHTML=response.feels_like
    m4.innerHTML=response.humidity
    m5.innerHTML=response.min_temp
    m6.innerHTML=response.max_temp
    m7.innerHTML=response.wind_speed
    m8.innerHTML=response.wind_degrees
    m9.innerHTML=response.sunrise
    m10.innerHTML=response.sunset

})
.catch((e)=>console.log(e));
}
 MumbaiWheather();

  // Now this is the for Patna
  const PatnaWheather=()=>{
    //cityName.innerHTML=city;
    const response =  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Patna', options)
//const response = await fetch(url, options)
.then((response)=>response.json())
.then((response)=>{console.log(response)

    //cloud_pct.innerHTML=response.cloud_pct
    p1.innerHTML=response.temp
    p2.innerHTML=response.temp
    p3.innerHTML=response.feels_like
    p4.innerHTML=response.humidity
    p5.innerHTML=response.min_temp
    p6.innerHTML=response.max_temp
    p7.innerHTML=response.wind_speed
    p8.innerHTML=response.wind_degrees
    p9.innerHTML=response.sunrise
    p10.innerHTML=response.sunset

})
.catch((e)=>console.log(e));
}
PatnaWheather();


// Now for the Bangluru
const BengaluruWheather=()=>{
    //cityName.innerHTML=city;
    const response =  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Bengaluru', options)
//const response = await fetch(url, options)
.then((response)=>response.json())
.then((response)=>{console.log(response)

    //cloud_pct.innerHTML=response.cloud_pct
    b1.innerHTML=response.temp
    b2.innerHTML=response.temp
    b3.innerHTML=response.feels_like
    b4.innerHTML=response.humidity
    b5.innerHTML=response.min_temp
    b6.innerHTML=response.max_temp
    b7.innerHTML=response.wind_speed
    b8.innerHTML=response.wind_degrees
    b9.innerHTML=response.sunrise
    b10.innerHTML=response.sunset

})
.catch((e)=>console.log(e));
}
BengaluruWheather();

// Now for the goa
const PanajiWheather=()=>{
    //cityName.innerHTML=city;
    const response =  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+'Panaji', options)
//const response = await fetch(url, options)
.then((response)=>response.json())
.then((response)=>{console.log(response)

    //cloud_pct.innerHTML=response.cloud_pct
    g1.innerHTML=response.temp
    g2.innerHTML=response.temp
    g3.innerHTML=response.feels_like
    g4.innerHTML=response.humidity
    g5.innerHTML=response.min_temp
    g6.innerHTML=response.max_temp
    console.log(response.max_temp);
    g7.innerHTML=response.wind_speed
    g8.innerHTML=response.wind_degrees
    g9.innerHTML=response.sunrise
    g10.innerHTML=response.sunset
    console.log("This is the running in the all the case");

})
.catch((e)=>console.log(e));
}
PanajiWheather();