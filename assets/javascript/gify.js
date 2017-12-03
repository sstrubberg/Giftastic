// Array of Star Wars Things
var topics = ["X-Wing", "Tie-fighter", "B-Wing", "A-wing", "Tie-defender", "Millenium Falcon"];

//Make the buttons on the page from the topics variable.
$(document).ready(function() {
    for (var i = 0;  i < topics.length; i++) {
        $("#sw-buttons").append("<button type='button' onclick='searchGIFY(\"" + topics[i] + "\")' class='btn btn-primary' value=' " + topics[i] + "'>" + topics[i] + "</button>");
    }
});

function searchGIFY(starWarsThingName) {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q= " + starWarsThingName + " &api_key=WoKz7UsHBnDyewFCHSNpZPMWvjPsBzZ0&limit=10",
        method: "GET",
    })
    .done(function(response) {
        console.log(response);
        displayGifs(response);
    })
}

function displayGifs(response) {
    for (var i = 0; i < response.data.length; i++) {
        var image = "<img src= " + response.data[i].images.fixed_height_small.url + ">";
        $("#star-wars-things").append(image);
    }
}