document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.getElementById("myButton");

    myButton.addEventListener("click", function() {
        // Toggle classes to change button color
        myButton.classList.toggle("default");
        myButton.classList.toggle("clicked");
    });
});
