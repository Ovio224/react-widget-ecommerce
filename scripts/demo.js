((window) => {
    'use strict'
    const REACT_SCRIPT_PATH = "http://localhost:3000"

    function Widget(configuration) {
        this.configuration = configuration

        this.getConfiguration = () => this.configuration

        this.start = () => {
            renderButton(this.getConfiguration())
        }

    }

    const handleButtonClick = (config) => {
        const iFrameElement = document.createElement('iframe');

        iFrameElement.setAttribute('id', 'iFrameElement');
        iFrameElement.setAttribute('target', '_top')

        const el = document.querySelector('.container');
        el.parentNode.insertBefore(iFrameElement, el);

        iFrameElement.setAttribute('src', REACT_SCRIPT_PATH);
        iFrameElement.addEventListener("load", () => {
            window.postMessage("ceva", "*")
            if (iFrameElement.contentWindow) {
                iFrameElement.contentWindow.top[0].postMessage(config, '*')
            }
        })

    }

    const renderButton = (config) => {
        const button = document.createElement("button")
        button.innerHTML = "Press me for some magic"
        button.style.marginLeft = '8px'
        button.className = 'cart-btn'

        button.addEventListener('click', () => handleButtonClick(config))

        const container = document.querySelector('.product-price')
        container.appendChild(button)
    }

    if (typeof (window.Widget) === 'undefined') {
        window.Widget = Widget
    }

})(window)