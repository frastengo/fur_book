const profiles = require('../data/data.json')
let id = 0;
let allProfiles = [];
let favoriteProfiles = [];

module.exports = {
    getProfiles: (req, res) => {
        res.status(200).send(profiles);
    },

    // addProfile: (req, res) => {

    // }
}