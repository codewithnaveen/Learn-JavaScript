### Ajax - Asynchronous JavaScript and XML


Ajax is a approach of using existing technologies togther including HTML, XHTML, CSS, JavaScript, DOM and most importantly XMLHttpRequest.

When these technologies are combined together in a ajax-model, web application are able to make quick, incremental updates the user-interface without reloading the entire browser page.

It makes the application faster and more responsive to the user actions.


+ **A**synchronous because, after sending HTTP request, your code doesn't need to wait for the response, however, it can do other stuff and be notified, through an event, when the response arrives.
+ **J**avaScript because it's obvious that XHR objects are created with JavaScript.
+ **X**ML because intially developers were making HTTP requests for XML documents.


There are two steps to using **XMLhttpRequest** object, which are as follows:

+ **Send the request :** This includes creating an XMLHttpRequest object and attaching an event listener.
+ **Process the response :** This happens when your event listener gets notified that the response has arrived, and your code gets busy doing something amazing with response.

### Sending the resquest
