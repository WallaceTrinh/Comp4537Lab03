
module.exports = (req, res) => {
    const { name } = req.query;
    if (name) {
        const date = new Date();
        res.status(200).send(`Hello ${name}, What a beautiful day. Server current date and time is ${date}`);
    } else {
        res.status(400).send('Name is required');
    }
};
