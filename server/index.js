const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ct = require('./controller/controller');

app.use(bodyParser.json());

app.get(`/api/profiles`, ct.getProfiles);
app.post(`/api/profiles/friends`, ct.addFriend);
app.put(`/api/profiles/:id`, ct.editProfile);
app.delete(`/api/profiles/:id`, ct.deleteFriend);
app.post(`/api/profiles`, ct.addProfile);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));