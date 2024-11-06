// config.js
var pythonURI;
if (location.hostname === "localhost") {
    pythonURI = "http://localhost:8087";
} else if (location.hostname === "127.0.0.1") {
    pythonURI = "http://127.0.0.1:8087";
} else {
    pythonURI = "https://flask2025.nighthawkcodingsociety.com";
}
var javaURI;
if (location.hostname === "localhost") {
    javaURI = "http://localhost:8088";
} else if (location.hostname === "127.0.0.1") {
    javaURI = "http://127.0.0.1:8088";
} else {
    javaURI = "https://spring2025.nighthawkcodingsociety.com";
}
var fetchOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'X-Origin': 'client'
    },
};
// User Login Function
function login(options) {
    const requestOptions = {
        ...fetchOptions,
        method: options.method,
        cache: options.cache,
        body: JSON.stringify(options.body)
    };
    document.getElementById(options.message).textContent = "";
    fetch(options.URL, requestOptions)
    .then(response => {
        if (!response.ok) {
            const errorMsg = 'Login error: ' + response.status;
            console.log(errorMsg);
            document.getElementById(options.message).textContent = errorMsg;
            return;
        }
        options.callback();
    })
    .catch(error => {
        console.log('Possible CORS or Service Down error: ' + error);
        document.getElementById(options.message).textContent = 'Possible CORS or service down error: ' + error;
    });
}
// Export variables and functions
export { javaURI, fetchOptions, login };