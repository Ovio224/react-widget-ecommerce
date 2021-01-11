import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [config, setConfig] = useState({})

    const handleMessageEvent = (e: MessageEvent) => setConfig(e.data)

    useEffect(() => {
        window.top[0].addEventListener("message", handleMessageEvent)
        return window.top[0].addEventListener("message", handleMessageEvent)
    }, [])

    useEffect(() => {
        console.log(config)
    }, [config])

    return (
        <div className="App">
            <h1>salut</h1>
        </div>
    );
}

export default App;
