gsap.registerPlugin(ScrollTrigger);

$(function () {
  $(".menu-toggle").on("click", function () {
    $("body").toggleClass("init__menu");
  });
});

$(function () {
  gsap.to("#banner video", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#banner",
      scrub: true,
      start: "5% top",
    },
  });
});

$(function () {
  let triggers = $(".st");

  triggers.each(function () {
    let anim = $(this).find(".text-wrapper > *");
    let trigger = $(this).parent();

    gsap.to(anim, 1, {
      y: 0,
      ease: "Expo.easeInOut",
      stagger: 0.07,
      scrollTrigger: {
        trigger: trigger,
        start: "top 80%",
      },
    });
  });
});

$(function () {
  const container = document.querySelector(".gradient");

  gsap.fromTo(
    container,
    {
      background: "#000",
    },
    {
      scrollTrigger: {
        trigger: container,
        scrub: true,
        start: "top top",
        end: "bottom bottom",
      },
      background: "#fc0800",
    }
  );

  gsap.to(".gradient .images .img-wrapper:first-of-type img", {
    yPercent: -40,
    ease: "none",
    scrollTrigger: {
      trigger: ".gradient",
      scrub: true,
    },
  });

  gsap.to(".gradient .images .img-wrapper:last-of-type img", {
    yPercent: 40,
    ease: "none",
    scrollTrigger: {
      trigger: ".gradient",
      scrub: true,
    },
  });
});

const classes = {
  1: {
    title: "Les Mills BODYPUMP",
    blurb:
      "The original barbell class, the ideal workout for anyone looking to get lean, toned and fit – fast.",
    description:
      "The original barbell class, the ideal workout for anyone looking to get lean, toned and fit – fast. Using light to moderate weights with lots of repetition, BODYPUMP gives you a totalbody workout. It will burn up to 400 calories. Instructors will coach you through the scientifically backed moves and techniques pumping out encouragement, motivation and great music – helping youachieve much more than on your own! You’ll leave the class feeling challenged and motivated, ready tocome back for more. BODYPUMP is available as either a 55, 45 or 30-minute workout.",
    img: "/assets/bodypump.jpg",
  },
  2: {
    title: "Les Mills BODYFLOW",
    blurb:
      "(Ideal for anyone and everyone) is a new generation yoga class that will improve your mind, your body and your life.",
    description:
      "(Ideal for anyone and everyone) is a new generation yoga class that will improve your mind, your body and your life. You can expect to bend and stretch through a series of simple yoga moves, elements of Tai Chi and Pilates while an inspiring soundtrack plays in the background. Breathing control is a part of all the exercises, and instructors will always provide options for those just getting started.",
    img: "/assets/bodyflow.jpg",
  },

  3: {
    title: "Les Mills CORE",
    blurb:
      "Inspired by elite athletic training principles) is a scientific core workout for incredible core tone and sports performance.",
    description:
      "Inspired by elite athletic training principles) is a scientific core workout for incredible core tone and sports performance. You build strength, stability and endurance in the muscles that support your core, improve balance, assist injury prevention, and become better at everything you do. All the moves in LES MILLS CORE have options, so it’s challenging but achievable whatever your level of fitness. During the workout, trained Instructors guide you through correct technique as you work with resistance tubes and weight plates, as well as bodyweight exercises like crunches, and hovers. Plus there are some hip, butt and lower back exercises too.",
    img: "/assets/core.jpg",
  },
  4: {
    title: "Les Mills RPM",
    blurb:
      "A group indoor cycling workout where you control the intensity. It’s fun, low impact and you can burn up to 500 calories a session.",
    description:
      "A group indoor cycling workout where you control the intensity. It’s fun, low impact and you can burn up to 500 calories a session. With great music pumping and the group cycling as one, your instructor takes you on a journey of hill climbs, sprints and flat riding. In an RPM workout you repeatedly rotate the pedals to reach your cardio peak then ease back down, keeping pace with the pack to lift your personal performance and boost your cardio fitness. RPM is a great way to build up your sense of personal achievement. You can draw on the group’s energy and find your rhythm in the music. You control your own resistance levels and speed so you can build up your fitness level over time. It’s a journey, not a race!",
    img: "/assets/rpm.jpg",
  },
  5: {
    title: "Les Mills BODYSTEP",
    blurb:
      "A workout you can expect a mixture of upbeat, rhythmic stepping, with squat and lunge patterns to work the legs.",
    description:
      "A workout you can expect a mixture of upbeat, rhythmic stepping, with squat and lunge patterns to work the legs. Combine this with movements like burpees, push ups and weight plate exercises, and the result is a fun, uplifting, full-body workout! Don’t worry, there’s heaps of options so that everyone leaves feeling successful. Our bubbly and approachable instructors coach you through the workout. We play invigorating, hit music and inject a whole lot of fun and personality along the way. You can burn up to 540 calories and you’ll leave buzzing with satisfaction.",
    img: "/assets/bodystep.jpg",
  },
  6: {
    title: "Les Mills BODYATTACK",
    blurb:
      "A high-energy fitness class with moves that cater for total beginners to total addicts.",
    description:
      "A high-energy fitness class with moves that cater for total beginners to total addicts. We combine athletic movements like running, lunging and jumping with strength exercises such as push- ups and squats. A LES MILLS instructor will pump out energizing tunes and lead you through the workout – challenging your limits in a good way, burning up to 555 calories and leaving you with a sense of achievement.",
    img: "/assets/bodyattack.jpg",
  },
  7: {
    title: "Zumba",
    blurb:
      "A fitness program that combines Latin and international music with dance moves.",
    description:
      "A fitness program that combines Latin and international music with dance moves. Zumba routines incorporate interval training — alternating fast and slow rhythms — to help improve cardiovascular fitness.",
    img: "/assets/zumba.png",
  },
  8: {
    title: "Cycle",
    blurb:
      "Mainly an aerobic activity, which means that your heart, blood vessels and lungs all get a workout.",
    description:
      "Mainly an aerobic activity, which means that your heart, blood vessels and lungs all get a workout. You will breathe deeper, perspire and experience increased body temperature, which will improve your overall fitness level. The health benefits of regular cycling include: increased cardiovascular fitness.",
    img: "/assets/cycle.png",
  },
  9: {
    title: "Yoga",
    blurb: 'An effective and exciting "Mind" and "Body" workout.',
    description:
      'An effective and exciting "Mind" and "Body" workout. It combines aerobic and anaerobic movements, as well as elements from Hatha Yoga and traditional exercise, linked together in a flowing series of poses that create strength, flexibility, endurance and balance.',
    img: "/assets/yoga.webp",
  },
};

$(function () {
  let screen = $("#features .screen");

  let prev = $(".slider .prev");
  let next = $(".slider .next");
  var x = 1;

  prev.on("click", function () {
    var tl = gsap.timeline();

    if (x < 2) {
      x = 3;
    } else {
      x--;
    }

    tl.to(screen, 0.5, { width: "100%", ease: "Expo.easeIn" });
    tl.add(function () {
      $(".slider .bg-image img").attr("src", classes[x]["img"]);
      $(".slider .bg-num").text(x);
      $(".slider .content h2").text(classes[x]["title"]);
      $(".slider .content h3").text(classes[x]["blurb"]);
    });
    tl.set(screen, { right: "unset", left: 0 });
    tl.to(screen, 0.5, { width: "0", ease: "Expo.easeOut" });
    tl.set(screen, { clearProps: "all" });
  });

  next.on("click", function () {
    var tl = gsap.timeline();

    if (x > 2) {
      x = 1;
    } else {
      ++x;
    }

    tl.to(screen, 0.5, { width: "100%", ease: "Expo.easeIn" });
    tl.add(function () {
      $(".slider .bg-image img").attr("src", classes[x]["img"]);

      $(".slider .bg-num").text(x);
      $(".slider .content h2").text(classes[x]["title"]);
      $(".slider .content h3").text(classes[x]["blurb"]);
    });
    tl.set(screen, { right: "unset", left: 0 });
    tl.to(screen, 0.5, { width: "0", ease: "Expo.easeOut" });
    tl.set(screen, { clearProps: "all" });
  });
});

$(function () {
  gsap.to("#personal-trainers .row .col:first-of-type .img-wrapper aside img", {
    yPercent: -40,
    ease: "none",
    scrollTrigger: {
      trigger: "#personal-trainers",
      scrub: true,
    },
  });
});

$(function () {
  let radio = $("#contact .col:first-of-type label");
  var val = $("#contact .col:first-of-type input:checked");
  $("#contact .col #subject").attr("value", val);

  radio.on("click", function () {
    val = $(this).attr("value");
    $("#contact .col #subject").attr("value", val);
  });

  $("form").submit(function (e) {
    e.preventDefault();
    var $form = $(this);

    $.post($form.attr("action"), $form.serialize()).then(function () {
      $form.trigger("reset");
      gsap.to("form .note", { y: 0 });
    });
  });
});
