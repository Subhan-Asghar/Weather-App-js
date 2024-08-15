// var search=document.getElementById('search')
// var btn=document.getElementById('sbtn')
// const city = search.value.trim();



// btn.addEventListener('click',(event)=>{
//         event.preventDefault();
//     console.log(city)
//     const apikey = "3de7cfd2abfa84ffb664a8e007f5f570";
//     const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//     async function weather(city){
//         const response=await fetch(apiurl + 'burewala' + `&appid=${apikey}`)
//         var data=await response.json();
//         console.log(data)
//     }
//     weather(city);
// })
//***************************************************************************************************************************************************** */
        const search = document.getElementById('search');
        const btn = document.getElementById('sbtn');
        const cityname=document.getElementById('city')
        const temp=document.getElementById('temp')
        const hnum=document.getElementById('hnum')
        const wdnum=document.getElementById('wdnum')
        const img=document.getElementById('wimg')
        const main=document.getElementById('main')
        const f=document.getElementById('f')
        btn.addEventListener('click', (event) => {
            




            event.preventDefault(); // Prevent the default form submission behavior
            const apikey = "3de7cfd2abfa84ffb664a8e007f5f570";
            const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

            const city = search.value.trim(); // Use trim to remove any extra spaces           
            if (!city) {
                alert("Please enter a city name.");
                return;
            }

            async function weather(city) {
                try {
                    const response = await fetch(apiurl + city + `&appid=${apikey}`);
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status} ${response.statusText}`);
                    }
                    main.classList.add('fa')
                    f.classList.add('fb')
                    var data = await response.json();
                    cityname.innerHTML=data.name;
                    temp.innerHTML=Math.round(data.main.temp) +'°C';
                    hnum.innerHTML=Math.round(data.main.humidity) +'%';
                    wdnum.innerHTML=Math.round(data.wind.speed) +' km/h';
                    var w=data.weather[0].main;
                    if(w=='Clear')
                        {
                            img.src='./icons/clear.png'
                        }
                    else if(w=='Clouds')
                        {
                            img.src='./icons/clouds.png'
                        }
                    else if(w=='Drizzle')
                        {
                            img.src='./icons/drizzle.png'
                        }  
                    else if(w=='Mist')
                        {
                            img.src='./icons/mist.png'
                        } 
                    else if(w=='Rain')
                        {
                            img.src='./icons/rain.png'
                        }
                    else if(w=='Snow')
                        {
                            img.src='./icons/snow.png'
                        } 
                    else if(w=='Wind')
                        {
                            img.src='./icons/wind.png'
                        }
                    console.log(w)
                    console.log(data);
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            }
            //....................................
           

            weather(city);
        });


