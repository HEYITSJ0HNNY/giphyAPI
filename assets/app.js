var topics = ["games", "movies", "reactions", "pokemon", "trending"];

showButtons();

$(document).on("click", "topics", function(event){
  var buttonText = $(this).attr("data-topics");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=6e5baa3647a549e18bc64f6bf6e79fd8";
console.log(buttonText);
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  .done(function(response){
  var gifs = response.data;
  for(var i = 0; i < gifs.length; i++){
    var gifDiv = $("<div class='item'>");
    var gifImage = $("<img>");
    gifImage.attr("src",
  gifs[i].images.fixed_height.url);

  gifDiv.prepend(gifImage);

  $("showGifs").append(gifDiv);
}
});
});

function showButtons(){
  $("#buttons").empty();
  for(var i = 0; i < topics.length; i++){
    var a = $("<button>");
    a.addClass("topics");
    a.attr("buttons", topics[i]);
    a.text(topics[i]);
    $("#buttons").append(a);

  }
}
