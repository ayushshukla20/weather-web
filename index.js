var inputvalue=document.querySelector('#cityinput')
var btn=document.querySelector('#add')
var city=document.querySelector('#cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="e059d39997c6a6876c6d11e6b4ac4769"
function convertion(val)
{
    return (val - 273).toFixed(3)
}
btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik).then(res=>res.json())

    .then(data =>
    {
        var nameval=data['name']
        var descrips=data['weather']['0']['description']
        var temperature=data['main']['temp']
        var wndspeed=data['wind']['speed']

        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML=`Temperature: <span>${convertion(temperature)} C<span>`
        descrip.innerHTML=`Sky conditions: <span>${descrips}<span>`
        wind.innerHTML=`Wind Speed:<span>${wndspeed} Km/h<span>`
    })

    .catch(err => alert('You entered wrong City name...'))
})
