import startHandler from "../handlers/startHandler.js";

export default function (){  
    document.getElementById('start').addEventListener('click',startHandler);
}