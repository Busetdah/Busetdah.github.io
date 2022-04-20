document.getElementById("press").addEventListener("click", function(){
    if (confirm("Are you sure?")) {
        if (confirm("Once again, are you sure?")) {
            window.location.href="https://www.youtube.com/shorts/aCgP8BFjrw4";
          } else {
            alert("Okay you doesn't get into the game ^_^")
          }
      } else {
        alert("Boooo !!")
      }
})