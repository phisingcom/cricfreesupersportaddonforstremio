const { addonBuilder } = require("stremio-addon-sdk");

const builder = new addonBuilder({
    id: "org.example.stremio-addon",
    version: "1.0.0",
    name: "Stream Grabber",
    description: "An addon to grab streams from various websites.",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"]
});

const streams = [
    {
        id: "supersports-premier-league",
        title: "SuperSports Premier League",
        url: "https://cricfree.live/live/embed/supersports-premier-league"
    },
    {
        id: "supersports-football",
        title: "SuperSports Football",
        url: "https://cricfree.live/live/embed/supersports-football"
    },
    {
        id: "supersports-cricket",
        title: "SuperSports Cricket",
        url: "https://cricfree.live/live/embed/supersports-cricket"
    },
    {
        id: "supersports-laliga",
        title: "SuperSports La Liga",
        url: "https://cricfree.live/live/embed/supersports-laliga"
    },
    {
        id: "supersports-rugby",
        title: "SuperSports Rugby",
        url: "https://cricfree.live/live/embed/supersports-rugby"
    },
    {
        id: "supersports-action",
        title: "SuperSports Action",
        url: "https://cricfree.live/live/embed/supersports-action"
    }
];

builder.defineStreamHandler(({ id }) => {
    const stream = streams.find(s => s.id === id);
    if (stream) {
        return Promise.resolve({
            streams: [{
                title: stream.title,
                url: stream.url,
                isMature: false
            }]
        });
    }
    return Promise.resolve({ streams: [] });
});

module.exports = builder.getInterface();
