import data from "../data.js";

function pauseHandler() 
{
    if(data.timeInterval)
    {
        clearInterval(data.timeInterval);
        data.timeInterval = null;
    }
}

export default pauseHandler;
