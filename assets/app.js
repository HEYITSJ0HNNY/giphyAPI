var topics = ["games", "movies", "reactions", "pokemon", "trending"];

function displayGifs(){

  var buttonText = $(this).attr("data-name");
  var api = "6e5baa3647a549e18bc64f6bf6e79fd8"
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonText + "&api_key=" + api;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
  var gifs = response.data;
  for(var i = 0; i < gifs.length; i++){
    $("#showGifs").append('<img src="'+ gifs[i].images.fixed_width.url + '"/>');
    // console.log(response)
}
})
}
function showButtons(){
  $("#buttons").empty();
  for(var i = 0; i < topics.length; i++){
    var a = $("<button>");
    a.addClass("topics");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons").append(a);
  }
}

showButtons()
$("#buttons").on("click", function(event){
console.log(event)
})
