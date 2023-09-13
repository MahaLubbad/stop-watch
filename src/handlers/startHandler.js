import data from "../data.js";
import displayTime from "../logic/time-logic.js";
import getTimeComponent from "../components/getTimeComponent.js";


const timeElement = document.getElementById("time");

function startHandler() 
{
    if( data.timeInterval !== null)
    {
     clearInterval(data.timeInterval);
    }
    timeElement.innerHTML = getTimeComponent(displayTime())
    
    data.timeInterval = setInterval(function()
    {
        timeElement.innerHTML = ''
        timeElement.append(getTimeComponent(displayTime()));
    
    }, 10);
    
      
}

export default startHandler;