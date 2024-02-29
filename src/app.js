import axios from "axios"
import {useState }from "react"

function App(){

const[deg,setdeg]= useState("0")
const[city,setcity]= useState("france")
const[desc,setdesc]= useState("raining")
const[enteredvalue,setenteredvalue]=useState("")


    function getData()
    {
        var weather=axios(`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=062d556a2aa1f7f7d6ede2bd1046b206`)
        weather.then(function(dalta){
            setdeg(dalta.data.main.temp)
            setcity(dalta.data.name)
            setdesc(dalta.data.weather[0].main)
        }
        )
    }
    function handleInput(event){

        console.log(event.target.value)
        setenteredvalue(event.target.value)
    }
    return(
        <div className="flex flex-row justify-center h-[100vh] items-center" >
        <div style={{backgroundImage: "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)"}} className="p-2 rounded-md shadow">
    <h1 className="font-medium">Hey!⛅</h1>
    <p>Do you want to know the weather?</p>
    <input onChange={handleInput} type="text" className="rounded-md p-1 h-6 text-sm mt-2 outline:none" placeholder="City name?"/>
    <br />
    
    <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-xs mt-2">Get Report⚡</button>
    <p className=" text-xs mt-2 font-sans" > Degree:{deg}| city:{city}| weather:{desc}</p>
    </div>
    
 </div>
    )
}
export default App