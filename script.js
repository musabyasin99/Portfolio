const toggle = document.querySelector(".toggle");
const navBar = document.querySelector(".wrapper");
const links = document.querySelectorAll(".scrollTo");
const alertBox = document.querySelector(".alertBox");

const sections = document.querySelectorAll("section");
const skillSect = document.querySelector(".skills");
const progressbars = skillSect.querySelectorAll(".el");

const mailForm = document.querySelector(".mail");
const sender = document.getElementById("sender");
const mail = document.getElementById("email");
const message = document.getElementById("message");
const serviceID = "service_jl4y63q";
const tempId = "template_i0q5iaj";

const date = new Date();

const scrollBtn = document.querySelector(".goTop");

const footer = document.querySelector("footer");

toggle.addEventListener("click", (e) => {
  toggle.classList.toggle("active");
  navBar.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.remove("active");
    navBar.classList.remove("active");
    const element = document.getElementById(link.getAttribute("data-link"));
    element.scrollIntoView({ behaviour: "smooth", block: "start" });
  });
});

sections.forEach((section, i) => {
  window.addEventListener("load", (e) => {
    setTimeout(() => {
      section.style.transform = `skewY(0deg) translateX(0%)`;
      document.documentElement.scrollTop = 0;
    }, 300 * i);

    scrollBtn.style.opacity = "0";
    scrollBtn.style.visibility = "hidden";
  });
});

progressbars.forEach((progressbar) => {
  const xpVal = getComputedStyle(
    progressbar.querySelector(".progressBar")
  ).getPropertyValue("--width");
  const xp = progressbar.querySelector(".xp");
  xp.innerHTML = `${xpVal}%`;
});

mailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (sender.value === "" || sender.value == null) {
    sender.style.borderBottom = `1px solid red`;
  } else if (mail.value === "" || mail.value == null) {
    mail.style.borderBottom = `1px solid red`;
  } else if (message.value === "" || message.value == null) {
    message.style.borderBottom = `1px solid red`;
  } else {
    var params = {
      name: "Musab Yasin",
      sender: sender.value,
      email: mail.value,
      message: message.value,
    };
    emailjs
      .send(serviceID, tempId, params)
      .then((res) => {
        if (res.status == 200) {
          sender.value = "";
          mail.value = "";
          message.value = "";
          alertBox.classList.add("active");
        } else {
          alertBox.classList.remove("active");
        }
      })
      .catch((err) => console.log(err));
  }
});
alertBox.querySelector("button").addEventListener("click", () => {
  alertBox.classList.remove("active");
});
footer.innerHTML = `All Rights Reserved Under Copyright &nbsp; <small style="margin:0 2px 3px 0;"> &copy; </small> ${date.getFullYear()}`;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollBtn.style.opacity = "1";
    scrollBtn.style.visibility = "visible";
  } else {
    scrollBtn.style.opacity = "0";
    scrollBtn.style.visibility = "hidden";
  }
});

scrollBtn.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
