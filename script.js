function locomotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function fixedImageAnime() {
  const fixedImg = document.querySelector("#fixed-img");
  const elems = document.querySelectorAll(".page4 .elem");
  const page4 = document.querySelector(".page4");

  page4.addEventListener("mouseenter", () => {
    fixedImg.style.display = "block";
  });
  page4.addEventListener("mouseleave", () => {
    fixedImg.style.display = "none";
  });
  fixedImg.addEventListener("mouseenter", () => {
    fixedImg.style.display = "block";
  });
  fixedImg.addEventListener("mouseleave", () => {
    fixedImg.style.display = "none";
  });

  elems.forEach(function (e) {
    e.addEventListener("mouseenter", () => {
      const image = e.getAttribute("data-image");
      const fixedImg = document.querySelector("#fixed-img img");
      fixedImg.setAttribute("src", image);
    });
  });
}
fixedImageAnime();

function headingSet() {
  const head = document.querySelectorAll(".page5-inn .left .headings .head");

  head.forEach(function (e) {
    e.addEventListener("click", () => {
      head.forEach((el) => {
        el.classList.remove("active");
      });
      e.classList.add("active");

      // changing image
      const image = e.getAttribute("data-image");
      const rightCont = document.querySelector(".page5-inn .right");
      rightCont.style.background = `url(${image})`;

      // changing para
      const paraText = e.getAttribute("data-para");
      const para = document.querySelector(".page5-inn .left p");
      para.innerHTML = "";
      para.innerHTML = paraText;
    });
  });
}
headingSet();

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    freeMode: true,
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 600) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.5,
        spaceBetween: 30,
        freeMode: true,
      });
    }
    if (window.innerWidth >= 600) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.5,
        spaceBetween: 30,
        freeMode: true,
      });
    }
  });
}
swiper();

function mouseMover() {
  const cursor = document.querySelector("#cursor");
  const page6 = document.querySelector(".page6");

  page6.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page6.addEventListener("mouseleave", (dets) => {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
  page6.addEventListener("mouseenter", (dets) => {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
}
mouseMover();

function navOpener() {
  const menuBtn = document.querySelector(".menuBtn");
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    const navOpener = document.querySelector(".navOpener");
    navOpener.classList.toggle("open");
  });
}
navOpener();
