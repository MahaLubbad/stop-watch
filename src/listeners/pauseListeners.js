import pauseHandler from "../handlers/pauseHandler.js";

export default function (){  
    document.getElementById('pause').addEventListener('click',pauseHandler);
}