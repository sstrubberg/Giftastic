var topics = ["X-Wing", "Tie-fighter", "B-Wing", "A-wing", "Tie-defender", "Millenium Falcon"];

$(document).ready(function() {
    for (var i=0; i<topics.length; i++) {
        $("#sw-buttons").append("<button type='button' class='btn btn-primary' value=' " + topics[i] + "'>" + topics[i] + "</button>");
    }
});