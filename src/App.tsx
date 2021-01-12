import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import CustomTabs from "./components/Tabs";
import { IFRAME_WINDOW } from "./utils";


const App = () => {
    const [config, setConfig] = useState<IConfig>({
        cable_configuration: [''],
        attributes: [''],
        placeholder: '',
        placeholder_text: '',
        cart_button: '',
        image: '',
        select_attribute: () => {}
    })

    const handleMessageEvent = (e: MessageEvent) => setConfig(e.data)

    useEffect(() => {
        if (IFRAME_WINDOW) {
            IFRAME_WINDOW.addEventListener("message", handleMessageEvent)
            return IFRAME_WINDOW.addEventListener("message", handleMessageEvent)
        }
    }, [])

    return <CustomTabs config={config} />

}

export default App;
