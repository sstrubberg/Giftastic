// Array of Star Wars Things
var topics = ["X-Wing", "Tie-fighter", "B-Wing", "A-wing", "Tie-defender", "Millenium Falcon"];

//Make the buttons on the page from the topics variable.
$(document).ready(function() {
    for (var i = 0;  i < topics.length; i++) {
        $("#sw-buttons").append("<button type='button' onclick='searchGIFY(\"" + topics[i] + "\")' class='btn btn-primary' value=' " + topics[i] + "'>" + topics[i] + "</button>");
    }
});

// AJAX call
function searchGIFY(starWarsThingName) {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q= " + starWarsThingName + " &api_key=WoKz7UsHBnDyewFCHSNpZPMWvjPsBzZ0&limit=10",
        method: "GET",
    })
    .done(function(response) {
        displayGifs(response);
    })
}

//Dumping the images into a div.

function displayGifs(response) {
    $("#star-wars-things").empty();
    for (var i = 0; i < response.data.length; i++) {
        var rating = "<div class='rating'>Rating: " + response.data[i].rating + "</div>"
        var image = rating + 
        "<img src='" + response.data[i].images.fixed_width_still.url +
        " 'image-still='" + response.data[i].images.fixed_width_still.url +
        " 'image-animated='" + response.data[i].images.fixed_width.url +
        " 'image-state='still' class='alterImage'>";
        $("#star-wars-things").append(image);
    }

    $(".alterImage").on("click", function() {
        var state = $(this).attr("image-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("image-animated"));
        }
    });
}