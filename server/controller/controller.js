const profiles = require('../data/data.json')
let myFriends = [];
let newProfiles = []
let id = 0;
let profileid = 21;

module.exports = {
    getProfiles: (req, res) => {
        res.status(200).send(profiles);
    },

    addFriend: (req, res) => {
        const {name, age, breed, image} = req.body
        const newFriend = {
            id,
            name,
            age,
            breed,
            image
        };
        myFriends.push(newFriend);
        id++;
        res.status(200).send(myFriends);
    },

    addProfile: (req, res) => {
        const {name, age, breed, image} = req.body
        const newProfile = {
            id,
            name,
            age,
            breed,
            image
        };
        newProfiles.push(newProfile);
        profileid++;
        res.status(200).send(newProfiles);
    },

    deleteFriend: (req, res) => {
        const {id} = req.params;
        //returns id
        let index = myFriends.findIndex(friend => friend.id === +id);
        if (index !== -1){
            myFriends.splice(index, 1);
            res.status(200).send(myFriends);
        } else {
            res.status(404).send('ID not found')
        }
    },

    editProfile: (req, res) => { 
        const {name} = req.body
 
        const editId = req.params.id;
        const friendIndex = myFriends.findIndex(friend => friend.id == editId);
        let friend = myFriends[friendIndex];

        myFriends[friendIndex] = {
        id: friend.id,
        name: name || friend.name,
        image: friend.image,
        };

        res.status(200).send(profiles);
    },

    // deleteProfile: (req, res) => {

    // },
    
    // deleteFriend: (req, res) => {

    // }
}