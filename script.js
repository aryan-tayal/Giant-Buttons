const btns = document.querySelectorAll("button");
const cancelBtn = document.querySelector("#cancel");
const confirmBtn = document.querySelector("#confirm");
const face = document.querySelector("#face");

confirmBtn.addEventListener("click", () => {
  btns.forEach((btn) => btn.classList.add("disabled"));
  const tl1 = gsap.timeline({ onComplete: confetti });
  tl1
    .to("h1", {
      opacity: 0,
    })
    .to(
      btns,
      {
        height: "150px",
      },
      "=-0.5"
    )
    .to(btns, {
      width: "400px",
    })

    .to(btns, {
      background: "#d5e68d",
    })
    .to(btns, {
      width: "250px",
      height: "500px",
      borderRadius: (i, el) => gsap.getProperty(el, "--br"),
    })
    .to(".face .mouth", {
      borderBottomLeftRadius: "50rem",
      borderBottomRightRadius: "50rem",
      animation: "mouth 1s ease infinite alternate",
    });
});
cancelBtn.addEventListener("click", () => {
  btns.forEach((btn) => btn.classList.add("disabled"));
  const tl2 = gsap.timeline();
  tl2
    .to("h1", {
      opacity: 0,
    })
    .to(
      btns,
      {
        height: "150px",
      },
      "=-0.5"
    )
    .to(btns, {
      width: "400px",
    })
    .to(btns, {
      background: "#e21a1a66",
    })
    .to(btns, {
      width: "250px",
      height: "500px",
      borderRadius: (i, el) => gsap.getProperty(el, "--br"),
    })
    .to(".face .mouth", {
      borderTopRightRadius: "50rem",
      borderTopLeftRadius: "50rem",
      animation: "mouth 1s ease infinite alternate",
    });
});
