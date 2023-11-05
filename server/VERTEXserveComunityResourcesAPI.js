var express  = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

app.listen(2260,()=>{
    console.log("Server started on port 2260");
});

app.get("/",(req, res)=>{
    res.send("FYI: I'm an API!");
});

app.get("/hungerResources",(req, res)=>{
    res.json({ return: database["Hunger Resources"] });
});

app.get("/housingResources",(req, res)=>{
    res.json({ return: database["Housing Resources"]});
});

app.get("/transporationResources",(req, res)=>{
    res.json({ return: database["Transporation Resources"] });
});

app.get("/intrapersonalHelp",(req, res)=>{
    res.json({ return: database["Intrapersonal Help"] });
});

app.get("/suicideHelp",(req, res)=>{
    res.json({ return: database["Suicide Help"] });
});

app.get("/depressionHelp",(req, res)=>{
    res.json({ return: database["Depression Help"] });
});

app.get("/emotionalHeath",(req, res)=>{
    res.json({ return: database["Emotional Heath"] });
});

app.get("/substanceAbuse",(req, res)=>{
    res.json({ return: database["Substance Abuse"]});
});
app.get("/allResources",(req, res)=>{
    res.json({ return: database });
});

var database = {
    "Hunger Resources": [{"type": "foodbank", "name":"CES Food Shelf", "address":"1900 11th Ave S, Minneapolis, MN 55404", "description": "This is a test description", "latitude": "44.9637589", "longitude": "-93.2946103"}, {"type": "foodbank", "name":"House of Charity - Food Distribution Center", "address":"1900 11th Ave S, Minneapolis, MN 55404", "latitude": "44.9637589", "longitude": "-93.2946103"}],
    "Housing Resources": [{"type": "shelter", "name":"People Serving People", "address":"614 S 3rd St, Minneapolis, MN 55415", "latitude": "44.9723078", "longitude": "-93.2629557"}],
    "Transporation Resources": [{"type": "transportation", "name":"Metro Transit Office", "address":"560 N 6th Ave, Minneapolis, MN 55411", "latitude": "44.9722366", "longitude": "-93.3070289"}],
    "Intrapersonal Help": [{"type": "safety", "name": "Cynthia Van Hoof","address":"150 S 5th St STE 825, Minneapolis, MN 554024200", "latitude": "44.9734019", "longitude": "-93.2906789"}],
    "Suicide Help": [{"type": "mentalHealth", "name":"M Health Fairview University of Minnesota Medical Center - West Bank","address":"2450 Riverside Ave, Minneapolis, MN 55454", "latitude": "44.9677192", "longitude": "-93.2408282"}],
    "Depression Help": [{"type": "mentalHealth", "name":"M Health Fairview University of Minnesota Medical Center - West Bank","address":"2450 Riverside Ave, Minneapolis, MN 55454", "latitude": "44.9677192", "longitude": "-93.2408282"}],
    "Emotional Heath": [{"type": "emotionalHealth", "name":"M Health Fairview University of Minnesota Medical Center - West Bank","address":"2450 Riverside Ave, Minneapolis, MN 55454", "latitude": "44.9677192", "longitude": "-93.2408282"}],
    "Substance Abuse": [{"type": "rehab", "name":"Bosch Rehabilitation","address":"Bosch Rehabilitation, Minneapolis, MN 55403", "latitude": "44.9677192", "longitude": "-93.2408282"}]
}
