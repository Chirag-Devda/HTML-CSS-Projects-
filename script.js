document.querySelectorAll(".toggle").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.display = "none"; // Hide the <h3> element
    item.nextElementSibling.style.display = "block"; // Show the email <p> element
    item.nextElementSibling.style.fontSize = "20px"; // Show the mobile number <p> element
  });
});
document.querySelectorAll(".email").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.display = "none"; // Hide the p element
    document.querySelector(".toggle").style.display = "inherit";
  });
});

// for mobile number
document.querySelectorAll(".MobileText").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.display = "none"; // Hide the mobile
    item.nextElementSibling.style.display = "block"; // Show the mobile number <p> element
    item.nextElementSibling.style.fontSize = "19px"; // Show the mobile number <p> element
  });
});
document.querySelectorAll(".mobile").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.display = "none"; // Hide the mobile number
    document.querySelector(".MobileText").style.display = "block";
  });
});
document.querySelectorAll(".TwitterText").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.display = "none"; // Hide the mobile
    item.nextElementSibling.style.display = "block"; // Show the mobile number <p> element
    item.nextElementSibling.style.fontSize = "19px"; // Show the mobile number <p> element
  });
});
document.querySelectorAll(".twitter").forEach((item) => {
  item.addEventListener("click", () => {
    item.style.display = "none"; // Hide the mobile number
    document.querySelector(".TwitterText").style.display = "block";
  });
});

// Media Query

// Define a function that handles the media query
function handleMaxWidth(x) {
  if (x.matches) {
    // If the viewport width is less than or equal to 700 pixels,
    // change the background color to yellow
    document.querySelectorAll(".toggle").forEach((item) => {
      item.addEventListener("click", () => {
        item.nextElementSibling.style.fontSize = "10px"; // Show the mobile number <p> element
      });
    });
    document.querySelectorAll(".MobileText").forEach((item) => {
      item.addEventListener("click", () => {
        item.nextElementSibling.style.fontSize = "13px"; // Show the mobile number <p> element
      });
    });
    document.querySelectorAll(".TwitterText").forEach((item) => {
      item.addEventListener("click", () => {
        item.nextElementSibling.style.fontSize = "9px"; // Show the mobile number <p> element
      });
    });
  }
}

// Create a MediaQueryList object for a max-width of 700px
var x = window.matchMedia("(max-width: 500px)");

// Call the listener function initially
handleMaxWidth(x);

// Attach the listener function to state changes
x.addEventListener("change", function () {
  handleMaxWidth(x);
});
