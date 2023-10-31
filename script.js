
//slide windodw
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".mynavbar");
    if (window.scrollY > 0) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

// image will slide here 
var i = 0;
var images = ['images/cover_page1.jpg', 'images/cover_page2.png', 'images/cover_page3.png', 'images/cover_page5.png','images/cover_page6.png','images/cover_page7.png','images/cover_page8.png'];

function changeImage() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, 2500);

}
changeImage();

// hover
var iconclick = document.querySelector(".icon_subcontainer");
// vehicles
// Get the containers
// Get the icon elements
var iconContainers = document.querySelectorAll(".icon_subcontainer");

// Add event listeners to the icon elements
iconContainers.forEach(function(iconContainer) {
  iconContainer.addEventListener("click", function() {
    // Hide all containers initially
    hideAllContainers();
    
    // Determine which container to show based on the clicked icon
    var iconClass = this.querySelector("label").getAttribute("for");
    var containerToShow = document.querySelector("." + iconClass + "_container");
    
    if (containerToShow) {
      containerToShow.style.display = "block";
    }
  });
});

// Function to hide all containers
function hideAllContainers() {
  bikesContainer.style.display = "none";
  carsContainer.style.display = "none";
  sbikesContainer.style.display = "none";
  scotersContainer.style.display = "none";
  evsContainer.style.display = "none";
}
