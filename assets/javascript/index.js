// code for index page

function dispDesignModal(){
    //display the design information
}



$(document).ready(function(){
    //start up code
    console.log("starting up");

    // Get the modal
    var modal = document.getElementById("modal01");
    modal.style.display = "none";

    // Get the button that opens the modal
    var btn = document.getElementById("bttnDesign");

    // Get <span> button that closes modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        console.log("button clicked")
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
})

