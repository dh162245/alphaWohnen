// For toggling and finding number of children and other stuff is done here!

const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  // The navigation.children.length means the following :-
  // The children inside a parent are basically an array of elements; So, here I'm finding the length of the array aka how many children are inside the nav bar.
  //   Yup That's all.
  navigation.style.setProperty("--childenNumber", navigation.children.length);

  //    Casually Toggling Classes to make them animate on click
  //   Regular stuff ;)
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});
// Instagram profile URL
const instagramUrl = "https://www.instagram.com/alphawohnen/";

// Function to generate the QR code
function generateQRCode() {
  const qr = new QRious({
    element: document.getElementById("qr-code"),
    size: 200,
    value: instagramUrl
  });

  // Display the generated QR code
  document.getElementById("qr-code").style.display = "block";
}

// Generate the QR code on page load
window.onload = generateQRCode;
