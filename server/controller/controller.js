const profiles = require('../data/data.json')
let myFriends = [];
// let profiles = [];
let id = 0;
let profileid = 21;

console.log(myFriends)
console.log(profiles.profiles)

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
        let id = profileid
        const newProfile = {
            id,
            name,
            age,
            breed,
            image
        };
        
    
        profiles.profiles.push(newProfile);
        profileid++;
        res.status(200).send(profiles);
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
        const {name, breed, age, image} = req.body;
        const editId = req.params.id;
        const profileIndex = profiles.profiles.findIndex(profile => profile.id == editId);
        let profile = profiles.profiles[profileIndex];
        console.log('bodyonedit',req.body)
        console.log('profile', profile)

        profiles.profiles[profileIndex] = {
            id: editId,
            name: name || profile.name,
            image: image || profile.image,
            breed: breed || profile.image,
            age: age || profile.age
        };

        res.status(200).send(profiles);
    },

    // update: (req, res) => {
    //     const { text } = req.body;
    //     const updateID = req.params.id;
    //     const messageIndex = messages.findIndex(message => message.id == updateID);
    //     let message = messages[messageIndex];
    
    //     messages[messageIndex] = {
    //       id: message.id,
    //       text: text || message.text,
    //       time: message.time
    //     };
    
    //     res.status(200).send(messages);
    //   },

    // deleteProfile: (req, res) => {

    // },
    
    // deleteFriend: (req, res) => {

    // }

}