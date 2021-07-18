$(function () {
  function openModal() {
    var tl = gsap.timeline();
    let modal = $(".modal");
    let img = modal.find(".img-wrapper");
    let heading = modal.find(".class-name");
    let details = modal.find("header, .row, .description, .pagination");

    tl.to(modal, { width: "100%", ease: "Expo.easeIn" });
    tl.from(img, { opacity: 0 });
    tl.from(heading, { opacity: 0, yPercent: 100 }, "-=.2");
    tl.from(details, { opacity: 0 }, "-=.2");
  }

  $("body").on("click", function () {
    openModal();
  });
});
