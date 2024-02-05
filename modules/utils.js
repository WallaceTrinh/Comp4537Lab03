// Defining the getDate function that returns a greeting with the current server time
function getDate(name) {
    const currentTime = new Date().toString();
    return `Hello ${name}, What a beautiful day. Server current date and time is ${currentTime}`;
}

module.exports = { getDate };
