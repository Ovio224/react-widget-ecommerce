# React Ecommerce Widget

## Add the following snippet to your `.js` file

```javascript
  // Widget configuration
  let configuration = {
    attributes: ['red', 'blue', 'black'],
    cable_configuration: ['straight', 'coiled', 'long-coiled'],
    placeholder: '.product-color',
    placeholder_text: 'Surprise me with the color',
    cart_button: '.cart-btn',
    image: window.location.origin + '/images/black.png'
  }

  let widget = new window.Widget(configuration)
  setTimeout(widget.start, 2000)
```

## Instructions
 `npm run serve` should run both the server & the client, if that does not work on your machine because of the `&` 
 inside the script, please run `npm start` and `npm run server` separately