const express = require('express');
const path = require('path');
const cors = require('cors')
let app = express();

const PORT = 7072;

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirnams, 'build', 'index.html'));
})

app.listen(PORT, () => console.log('server started at port ' + PORT));