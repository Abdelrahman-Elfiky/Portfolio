
// Typing Effect

const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "Web Developer",
    "Freelancer"
];

let i = 0;
let j = 0;
let current = "";
let letter = "";

function typingEffect() {
    current = words[i];
    letter = current.slice(0, ++j);

    document.getElementById("typing").textContent = letter;

    if (letter.length === current.length) {
        setTimeout(() => {
            j = 0;
            i = (i + 1) % words.length;
            typingEffect();
        }, 1500);
    } else {
        setTimeout(typingEffect, 80);
    }
}

typingEffect();


// Back To Top Button

const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }
});

backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
const counters = document.querySelectorAll('.counter');

const startCounter = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const update = () => {
            const value = +counter.innerText;
            const speed = target / 200;

            if (value < target) {
                counter.innerText = Math.ceil(value + speed);
                setTimeout(update, 20);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
};

// Run counters when visible
let countersStarted = false;
window.addEventListener("scroll", () => {
    const sectionPos = document.querySelector(".stats").offsetTop;
    if (window.scrollY + window.innerHeight > sectionPos && !countersStarted) {
        startCounter();
        countersStarted = true;
    }
});

//  SKILLS ANIMATION 
const progressBars = document.querySelectorAll(".progress");

const animateSkills = () => {
    progressBars.forEach(bar => {
        let width = bar.getAttribute("data-progress");
        bar.style.width = width + "%";
    });
};

// Run skills animation when visible
let skillsStarted = false;
window.addEventListener("scroll", () => {
    const skillsPos = document.querySelector(".skills").offsetTop;
    if (window.scrollY + window.innerHeight > skillsPos && !skillsStarted) {
        animateSkills();
        skillsStarted = true;
    }
});
const filterButtons = document.querySelectorAll(".portfolio-filter button");
const items = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        items.forEach(item => {
            item.style.display =
                filter === "all" || item.classList.contains(filter)
                    ? "block"
                    : "none";
        });

    });
});
function sendMsg() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let message = document.getElementById("message");

  let valid = true;

  // Reset errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("subjectError").innerText = "";
  document.getElementById("messageError").innerText = "";
  document.getElementById("success").innerText = "";

  if (name.value.trim() === "") {
    document.getElementById("nameError").innerText = "Please enter your name";
    valid = false;
  }

  if (email.value.trim() === "") {
    document.getElementById("emailError").innerText = "Please enter your email";
    valid = false;
  }

  if (subject.value.trim() === "") {
    document.getElementById("subjectError").innerText = "Please enter a subject";
    valid = false;
  }

  if (message.value.trim() === "") {
    document.getElementById("messageError").innerText = "Please enter your message";
    valid = false;
  }

  if (!valid) return;

  document.getElementById("success").innerText =
    "Your message has been sent successfully! ✓";

  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
}
// SIDE NAV - Smooth Scroll
document.querySelectorAll('.side-nav a').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth" });
  });
});
