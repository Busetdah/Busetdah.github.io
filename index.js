var urls = new Array();
urls[0] = "https://youtu.be/aCgP8BFjrw4";
urls[1] = "https://youtu.be/dQw4w9WgXcQ";
urls[2] = "https://youtu.be/_l13E-Yb6NM?t=98";

document.getElementById("press").addEventListener("click", function(){
    if (confirm("Hmm.. wanna continue?")) {
        if (confirm("Once again, are you sure?")) {
            var random = Math.floor(Math.random()*urls.length);
            window.location = urls[random];
          } else {
            alert("Okay you doesn't get into the game ^_^")
          }
      } else {
        alert("Boooo !!")
      }
})