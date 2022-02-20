const e = require('express');
const fs = require('fs');
const app = e();

let songData = [
    {
        id: "0000",
        name: "I am Falling for You",
        bg: "bg4.png"
    },
    {
        id: "0001",
        name: "What The Hell",
        bg: "bg18.png"
    },
    {
        id: "0002",
        name: "Freaks",
        bg: "bg2.png"
    },
    {
        id: "0003",
        name: "Coming Home",
        bg: "bg15.png"
    },
    {
        id: "0004",
        name: "Hiding In The Blue",
        bg: "bg10.png"
    },
    {
        id: "0005",
        name: "Without Me",
        bg: "bg13.png"
    },
    {
        id: "0006",
        name: "Titanium",
        bg: "bg14.png"
    },
    {
        id: "0007",
        name: "Radioactive",
        bg: "bg5.png"
    },
    {
        id: "0008",
        name: "Sweet but Psycho",
        bg: "bg6.png"
    },
    {
        id: "0009",
        name: "Angel With A Shotgun",
        bg: "bg12.png"
    },
    {
        id: "0010",
        name: "Hall of Fame",
        bg: "bg17.png"
    },
    {
        id: "0011",
        name: "The Ghost",
        bg: "bg6.png"
    },
    {
        id: "0012",
        name: "All Eyes On Me",
        bg: "bg12.png"
    },
    {
        id: "0013",
        name: "A Little Bit Dangerous",
        bg: "bg1.png"
    },
    {
        id: "0014",
        name: "Bite",
        bg: "bg9.png"
    },
    {
        id: "0015",
        name: "Hate me",
        bg: "bg13.png"
    },
    {
        id: "0016",
        name: "Inferno",
        bg: "bg19.png"
    },
    {
        id: "0017",
        name: "Rocket Science",
        bg: "bg16.png"
    },
    {
        id: "0018",
        name: "Dancing With Your Ghost",
        bg: "bg4.png"
    },
]

app.all('/', (req, res) => {
    res.sendFile(__dirname+'/vis.html')
})

app.get('/songData', (req, res) => {
    res.json(songData);
})

app.get('/files', (req, res) => {
    res.send(fs.readdirSync('music'));
})

app.get('/file/:file', (req, res) => {
    res.send(fs.readFileSync('music/'+req.params.file));
})

app.get('/background/:file', (req, res) => {
    res.send(fs.readFileSync('bgs/'+req.params.file));
})

app.get('/log', (req, res) => {
    console.log(req.query.t)
    res.send('ok')
})

app.listen(80);