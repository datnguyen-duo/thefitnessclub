$(function () {
  function openModal(
    className,
    link,
    classImage,
    date,
    time,
    instructor,
    description
  ) {
    var tl = gsap.timeline({
      onStart: function () {
        $("body").addClass("init__modal");
      },
    });
    let modal = $(".modal");
    let img = modal.find(".img-wrapper img");
    let heading = modal.find(".class-name");
    let details = modal.find("header, .row, .description, .pagination");

    tl.add(function () {
      heading.text(className);
      $(".modal header a").attr("src", link);
      img.attr("src", classImage);
      $(".modal .date").text(date);
      $(".modal .time").text(time);
      $(".modal .instructor").text(instructor);
      $(".modal .description").text(description);
    });
    tl.to(modal, { width: "100%", ease: "Expo.easeIn" });
    tl.from(img, { opacity: 0 });
    tl.from(heading, { opacity: 0, yPercent: 100 }, "-=.2");
    tl.from(details, { opacity: 0 }, "-=.2");
  }

  function closeModal() {
    var tl = gsap.timeline({
      onComplete: function () {
        $("body").removeClass("init__modal");
      },
    });
    let modal = $(".modal");
    let img = modal.find(".img-wrapper");
    let heading = modal.find(".class-name");
    let details = modal.find("header, .row, .description, .pagination");

    gsap.to(img, { opacity: 0 });
    gsap.to(heading, { opacity: 0 });
    tl.to(details, { opacity: 0 });
    tl.to(modal, { width: 0, ease: "Expo.easeOut" });
    tl.set(".modal *", { clearProps: "all" });
  }

  $(".note").on("click", function () {
    var className = $(this).find(".eventTitle").text();
    var lowerCaseClassName = className.toLowerCase();

    // var link = className.attr("eventid");

    if (lowerCaseClassName.indexOf("bodypump") >= 0) {
      var i = 1;
    } else if (lowerCaseClassName.indexOf("bodyflow") >= 0) {
      var i = 2;
    } else if (lowerCaseClassName.indexOf("core") >= 0) {
      var i = 3;
    } else if (lowerCaseClassName.indexOf("rpm") >= 0) {
      var i = 4;
    } else if (lowerCaseClassName.indexOf("bodystep") >= 0) {
      var i = 5;
    } else if (lowerCaseClassName.indexOf("bodyattack") >= 0) {
      var i = 6;
    } else if (lowerCaseClassName.indexOf("zumba") >= 0) {
      var i = 7;
    } else if (lowerCaseClassName.indexOf("cycle") >= 0) {
      var i = 8;
    } else if (lowerCaseClassName.indexOf("yoga") >= 0) {
      var i = 9;
    }

    var classImage = classes[i]["img"];
    var date = "Monday, July 16";
    var time = $(this).find(".oclock").text();
    var instructor = $(this).find(".name").text();
    var description = classes[i]["description"];

    // var className = "test1";
    var link = "test2";
    // var classImage = "test3";
    // var date = "test4";
    // var time = "test5";
    // var instructor = "test6";
    // var description = "test7";

    openModal(className, link, classImage, date, time, instructor, description);
  });

  $(".modal .close ").on("click", function () {
    closeModal();
  });

  $("body").on("click", function (e) {
    if ($(this).hasClass("init__modal")) {
      var target = e.target;
      if (!target.closest(".modal")) {
        closeModal();
      }
    }
  });
});

// var weekOffset = 0;
// var today = new Date();
// //var msunday;//start of current week
// var eventsList = [];
// var lastWeek = false;
// var firstWeek = false;

// function isLastDay(dt) {
//   return new Date(dt.getTime() + 86400000).getDate() === 1;
// }
// function isFirstDay(dt) {
//   if (dt.getDate() == 1) return true;
//   return false;
// }

// function initCalendar() {
//   weekOffset = 0;
//   today = new Date();

//   renderWeek();

//   jQuery(".btnNextWeek").click(function (e) {
//     e.stopPropagation();
//     renderNextWeek();
//   });

//   jQuery(".btnPrevWeek").click(function (e) {
//     e.stopPropagation();
//     renderPrevWeek();
//   });
// }

// function renderNextWeek() {
//   console.log("next");
//   if (lastWeek) return false;
//   weekOffset += 1;
//   renderWeek();
//   firstWeek = false;
// }
// function renderPrevWeek() {
//   console.log("prev");
//   if (firstWeek) return false;
//   weekOffset -= 1;
//   renderWeek();
//   lastWeek = false;
// }

// function renderWeek() {
//   var msunday = new Date();
//   msunday.setDate(today.getDate() - today.getDay() + 7 * weekOffset);
//   console.log(msunday);

//   var cday = new Date();
//   cday.setDate(today.getDate() - today.getDay() + 7 * weekOffset);
//   console.log(cday);
//   cMonth = cday.toLocaleString("default", { month: "long" });
//   cMonth = cMonth.substring(0, 3);

//   mfriday = new Date();
//   mfriday.setDate(msunday.getDate() + 6);

//   jQuery(".note").empty();

//   for (i = 0; i <= 6; i++) {
//     cMonth = cday.toLocaleString("default", { month: "long" });
//     cMonth = cMonth.substring(0, 3);
//     cdate = cday.getDate();
//     if (isLastDay(cday)) lastWeek = true;
//     if (isFirstDay(cday)) firstWeek = true;
//     jQuery(".weekday" + i + " .num").empty();
//     if (i == 0 || cdate == 1) {
//       jQuery(".weekday" + i + " .num").html(
//         "<sup>" + cMonth + "</sup>" + String(cday.getDate()).padStart(2, "0")
//       );
//     } else {
//       jQuery(".weekday" + i + " .num").html(
//         String(cday.getDate()).padStart(2, "0")
//       );
//     }

//     cday.setDate(cday.getDate() + 1);
//   }
//   //return true;
//   $.get(
//     "getevents.php?date=" +
//       msunday.getDate() +
//       "&month=" +
//       (msunday.getMonth() + 1) +
//       "&year=" +
//       msunday.getFullYear(),
//     function (data, status) {
//       eventsList = JSON.parse(data);
//       console.log(eventsList);
//       if (eventsList) {
//         for (j = 0; j < eventsList.length; j++) {
//           e = eventsList[j];
//           if (e.start) {
//             //bind event to calendar

//             var startTimestamp = Date.parse(e.start);
//             var mDate = new Date(startTimestamp);
//             var node = parseInt(mDate.getHours() / 2);

//             var endTimestamp = Date.parse(e.end);
//             var mDate2 = new Date(endTimestamp);

//             var eventDayOfWeek = mDate.getDay();

//             var str =
//               '<h2><a class="eventTitle" data-eventId="' +
//               e.ID +
//               '">' +
//               e.title +
//               "</a></h2>";
//             str += "<div>" + '<span class="name">' + e.description + "</span>";
//             str += "<br>";
//             str +=
//               '<span class="oclock">' +
//               mDate.toLocaleString("en-US", {
//                 hour: "numeric",
//                 minute: "numeric",
//                 hour12: true,
//               }) +
//               "-" +
//               mDate2.toLocaleString("en-US", {
//                 hour: "numeric",
//                 minute: "numeric",
//                 hour12: true,
//               }) +
//               "</span>";
//             str += "</div>";

//             jQuery(
//               ".dayofweek:nth-child(" +
//                 (eventDayOfWeek + 1) +
//                 ") > .note:nth-child(" +
//                 (node + 1) +
//                 ")"
//             ).html(str);
//           }
//         }
//       }
//     }
//   );
// }
// initCalendar();

// jQuery("#btnSubmitEmail").click(function (e) {
//   var emailAddress = jQuery("#inp-email-calendar").val();

//   console.log(emailAddress);

//   jQuery.post(
//     "add_event_to_guest_calendar.php",
//     {
//       event_id: eventIDClicked,
//       email_address: emailAddress,
//     },
//     function (data, status) {
//       eventIDClicked = null;
//       jQuery("#modal-success").show();
//       jQuery("#modal-main-content").hide();
//       setTimeout(function () {
//         jQuery("#modal-success").hide();
//         modal.style.display = "none";
//         jQuery("#modal-main-content").show();
//       }, 1500);
//     }
//   );
// });
