import React, { useState, useRef, useEffect } from 'react';
import VIDEO from "./video.mp4"; // Replace with a valid video source

const ReactEffect = () => {
    const [play, setPlay] = useState(true);
    const eleRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (eleRef.current) {
            eleRef.current.style.border = "2px solid blue"; // Example of styling
        }
    }, []);

    const togglePlay = () => {
        if (play) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlay(!play);
    };

    return (
        <div ref={eleRef} style={{ textAlign: "center", padding: "20px" }}>
            <video ref={videoRef} width="600" controls>
                <source src={VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <br />
            <button onClick={togglePlay} style={{ marginTop: "10px", padding: "10px" }}>
                {play ? "Pause" : "Play"}
            </button>
        </div>
    );
};

export default ReactEffect;