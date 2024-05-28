import React, {useState} from "react";
import "../../styles/index.css"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
    const [selectedColor, setSelectedColor] = useState("red");

    return (
        <div className="text-center">
            <div className="traffic-light-container">
                <div 
                    className={`light red ${selectedColor === "red" ? "glow" : ""}`}
                    onClick={() => setSelectedColor("red")}
                ></div>
                <div 
                    className={`light yellow ${selectedColor === "yellow" ? "glow" : ""}`}
                    onClick={() => setSelectedColor("yellow")}
                ></div>
                <div 
                    className={`light green ${selectedColor === "green" ? "glow" : ""}`}
                    onClick={() => setSelectedColor("green")}
                ></div>
            </div>
        </div>
    );
};

export default Home;