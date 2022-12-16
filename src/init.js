
import startListeners from "./listeners/startListeners.js"
import pauseListeners from "./listeners/pauseListeners.js";
import resetListeners from "./listeners/resetListeners.js"; 

startListeners();
pauseListeners();
resetListeners();

import data from "./data.js";
import getTimeComponent from "./components/test.js";


const timeElement = document.getElementById("time");
const timeComponent = getTimeComponent(data);
timeElement.append(timeComponent);