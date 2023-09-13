import data from "../data.js";
import getTimeComponent from "../components/getTimeComponent.js";

const timeElement = document.getElementById("time");

function resetHandler() 
{
    if (data.timeInterval) 
    {
        clearInterval(data.timeInterval);
        data.timeInterval = null;
    }
    data.minutes = 0;
    data.seconds = 0;
    data.milliseconds = 0;
    const time = getTimeComponent(data);
    timeElement.innerHTML = '';
    timeElement.append(time);
}

export default resetHandler;