// 1. Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// 2. Menu card click interaction
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Item added to cart (demo)");
  });
});


// 3. Contact form validation
const form = document.querySelector(".contact-form form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields");
  } else {
    alert("Message sent successfully!");
    form.reset();
  }
});
