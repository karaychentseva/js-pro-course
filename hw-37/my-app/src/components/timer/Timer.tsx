import React, { useEffect, useState } from "react";

const getTime = () => (new Date()).toTimeString().substring(0, 8);

const Timer: React.FC = () => {

    const [time, setTime] = useState("");

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(getTime());
            console.log("interval id: ", intervalId);
        }, 1000);
        
        console.log("setedInterval", intervalId);

        return () => {
            clearInterval(intervalId);
            console.log("deletedInterval", intervalId);
        }
        
    }, []);


    return (
        <div>
           Hello! Current time: {time}
        </div>
    )
}

export default Timer; 