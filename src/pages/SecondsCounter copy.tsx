import React, { Component, useEffect, useState } from 'react';

export const SecondsCouter: React.FC = () => {

    const [secondsElapsed, setsecondsElapsed] = useState(0);
    useEffect(() => {
        const interval =  setInterval(() => {
           setsecondsElapsed(secondsElapsed + 1);
            
        }, 1000);
        return ()=>{
            clearInterval(interval);
        }
    })

    return <div>
        <p>Seconds Elapsed</p>
        <div>{secondsElapsed}</div>
    </div>
}