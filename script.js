const cityNameInputEl = document.querySelector("input[name='cityName']");
const btnEl= document.querySelector("#btn");

let cityName = "";
btnEl.addEventListener("click",()=>{
   if(cityNameInputEl.value){
    cityName = cityNameInputEl.value;
   }else{
    cityName = "";
   }
   fetchData(cityName)
   cityNameInputEl.value = ""
})

async function fetchData(city){
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f13c309e0f05c1901690800d3e68dc81&units=metric`
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
}
console.log("Hello")