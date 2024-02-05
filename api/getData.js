
const utils = require('../modules/utils'); // The path

module.exports = (req, res) => {
    const { name } = req.query;
    if (name) {
        const responseMessage = utils.getDate(name);
        res.status(200).send(`<p style="color: blue;">${responseMessage}</p>`);
    } else {
        res.status(400).send('Name is required');
    }
};
