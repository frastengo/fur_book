const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ct = require('./controller/controller');

app.use(bodyParser.json());

app.get(`/api/profiles`, ct.getProfiles);
// app.post(`/api/profiles`, ct.addProfile);
// app.put(`/api/profiles/:id` );
// app.delete(`/api/profiles/:id`);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));