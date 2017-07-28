var topics = ["Overwatch", "PUBG", "Rocket League", "Space Jam", "RGB"];

showButtons();

$(document).on("click", ".topics", function(event){
  $("#showGifs").empty();
  var buttonText = $(this).attr("data-name");
  var api_key = '6e5baa3647a549e18bc64f6bf6e79fd8'
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonText + "&api_key=" + api_key;
console.log(buttonText);
  $.ajax({
    url: queryURL + "&limit=10",
    method: "GET"
  }).done(function(response){
  var gifs = response.data;
  for(var i = 0; i < gifs.length; i++){
    var gifDiv = $("<div class='item'>");
    var gifImage = $("<img>");
    gifImage.attr("src",
  gifs[i].images.fixed_height.url);

  gifDiv.prepend(gifImage);

  $("#showGifs").append(gifDiv);
}
});
});

function showButtons(){
  for(var i = 0; i < topics.length; i++){
    var a = $("<button>");
    a.addClass("topics");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons").append(a);

  }
}
