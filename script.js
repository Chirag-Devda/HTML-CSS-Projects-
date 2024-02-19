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
