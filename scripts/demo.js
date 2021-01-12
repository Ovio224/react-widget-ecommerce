((window) => {
    'use strict'
    const REACT_SCRIPT_PATH = "http://localhost:3000"

    const initializeIframe = (iFrameElement, config) => {
        if (iFrameElement.contentWindow) {
            iFrameElement.contentWindow.top[0].postMessage(config, '*')
            iFrameElement.style.position = 'fixed'
            iFrameElement.style.zIndex = 999
            iFrameElement.style.left = '25%'
            iFrameElement.style.top = '25%'
            iFrameElement.style.width = '50%'
            iFrameElement.style.height = '50%'
            iFrameElement.style.overflow = 'auto'
            document.body.style.backgroundColor = 'rgba(0,0,0,0.5)'

            window && window.addEventListener("message", (e) => handleCloseIframe(e, iFrameElement))
        }
    }

    const handleCloseIframe = (e, iFrameElement) => {
        const { data: { selectedAttributes } } = e;
        iFrameElement.remove()
        document.body.style.backgroundColor = 'white'

        document.querySelectorAll('input').forEach(element => {
            element.checked = false
            if (element.getAttribute('data-image') === selectedAttributes.color) {
                element.checked = true
            }
        })
        document.querySelectorAll('img').forEach(element => {
            element.setAttribute('class', '')
            if (element.getAttribute('data-image') === 'blue') {
                element.setAttribute('class', 'active')
            }
        })
        document.querySelectorAll('.cable-choose > button').forEach(element => {
            element.setAttribute('class', '')
            if (element.textContent.toLowerCase() === selectedAttributes.cable_configuration) {
                element.style.border = '2px solid #86939E'
            }
        })

    }



    function Widget(configuration) {
        this.configuration = configuration

        this.getConfiguration = () => this.configuration

        this.start = () => {
            renderButton(this.getConfiguration())
        }

    }

    const handleButtonClick = (config) => {
        const iFrameElement = document.createElement('iframe')
        iFrameElement.setAttribute('id', 'iFrameElement')

        const el = document.querySelector('.container')
        el.parentNode.insertBefore(iFrameElement, el)

        iFrameElement.setAttribute('src', REACT_SCRIPT_PATH)
        iFrameElement.addEventListener("load", () => initializeIframe(iFrameElement, config))

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