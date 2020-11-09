const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = 'ad4e15c131a99c99191358610ac09b82'

const getData = async (baseURL, cityName, apiKey) => {
  const req = await fetch(baseURL + `?q=${cityName}&units=metric&appid=` + apiKey)
  try {
    const data = await req.json()
    return data
  } catch (error) {
    console.log('error', error)
  }
}


function action(){
    const newCity = document.getElementById('name').value 
    console.log(newCity)
    getData(baseURL, newCity, apiKey).then(
    function (data) {
      const allData = {
        city: newCity,
        temperature: data.main.temp,
        date: new Date().toISOString().slice(0, 10)
      }
      document.getElementById('city').innerHTML = allData.city
      console.log(document.getElementById('name'))
      document.getElementById('temp').innerHTML = allData.temperature
      document.getElementById('date').innerHTML = allData.date
    }
  )
}
  
export {action}