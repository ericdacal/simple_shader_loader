const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\eric.dacal\\Documents\\shader_loader\\index.html');
});

app.listen(3000, () => console.log('App listening on port 3000!'));