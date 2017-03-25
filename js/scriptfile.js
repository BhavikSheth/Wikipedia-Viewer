$(document).ready(function() {
  $(".search-button").on("click", function() {
    //$(".message").html(document.getElementById("search-box").value);
    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + document.getElementById("input-search").value + "&callback=?", function(json) {
      var html = "";
      for (var key in json.query.pages) {
        html += "<a href = 'https://en.wikipedia.org/?curid=" + json.query.pages[key].pageid + "' target='__blank'><div class='result bg-primary'><h4 class='title'>" + json.query.pages[key].title + "</h4><p class='extract'>" + json.query.pages[key].extract + "</p></div></a>";
        $(".result-list").html(html); //$(".message").html(JSON.stringify(json.query.pages[key].title));
      }
    });
  });
  $("#input-search").keyup(function(event){
    if(event.keyCode == 13){
        $(".search-button").click();
    }
  });
});