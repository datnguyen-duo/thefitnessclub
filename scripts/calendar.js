var eventID;

$(function () {
  function openModal(
    className,
    eventID,
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
      $(".modal #addToCalEmail").attr("data-attribute-eventid", eventID);
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
        $("body").removeClass("init__modal init__add-to-calendar");
        $("#addToCalEmail").attr("placeholder", "Email Address");
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
    if (!$(this).is(".has-event")) return;

    var className = $(this).find(".eventTitle").text();
    var lowerCaseClassName = className.toLowerCase();
    eventID = $(this).find(".eventTitle").attr("data-eventid");

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
    var date = $(this).find(".date").text();
    var time = $(this).find(".oclock").text();
    var instructor = $(this).find(".name").text();
    var description = classes[i]["description"];

    openModal(
      className,
      eventID,
      classImage,
      date,
      time,
      instructor,
      description
    );
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

  $(".modal header a").on("click", function (e) {
    e.preventDefault();
    $("body").addClass("init__add-to-calendar");
  });
});

var weekOffset = 0;
var today = new Date();
//var msunday;//start of current week
var eventsList = [];
var lastWeek = false;
var firstWeek = false;

function isLastDay(dt) {
  return new Date(dt.getTime() + 86400000).getDate() === 1;
}
function isFirstDay(dt) {
  if (dt.getDate() == 1) return true;
  return false;
}

function initCalendar() {
  weekOffset = 0;
  today = new Date();

  renderWeek();

  $(".btnNextWeek").click(function (e) {
    e.stopPropagation();
    renderNextWeek();
  });

  $(".btnPrevWeek").click(function (e) {
    e.stopPropagation();
    renderPrevWeek();
  });
}

function renderNextWeek() {
  if (lastWeek) return false;
  weekOffset += 1;
  renderWeek();
  firstWeek = false;
}
function renderPrevWeek() {
  if (firstWeek) return false;
  weekOffset -= 1;
  renderWeek();
  lastWeek = false;
}

function renderWeek() {
  var msunday = new Date();
  msunday.setDate(today.getDate() - today.getDay() + 7 * weekOffset);

  var cday = new Date();
  cday.setDate(today.getDate() - today.getDay() + 7 * weekOffset);
  cMonth = cday.toLocaleString("default", { month: "long" });
  cMonth = cMonth.substring(0, 3);

  mfriday = new Date();
  mfriday.setDate(msunday.getDate() + 6);

  $(".note").empty();

  for (i = 0; i <= 6; i++) {
    cMonth = cday.toLocaleString("default", { month: "long" });
    cMonth = cMonth.substring(0, 3);
    cdate = cday.getDate();
    if (isLastDay(cday)) lastWeek = true;
    if (isFirstDay(cday)) firstWeek = true;
    $(".weekday" + i + " .num").empty();
    $(".weekday" + i + " .num").html(String(cday.getDate()).padStart(2, "0"));

    cday.setDate(cday.getDate() + 1);
  }
  //return true;
  $.get(
    "getevents.php?date=" +
      msunday.getDate() +
      "&month=" +
      (msunday.getMonth() + 1) +
      "&year=" +
      msunday.getFullYear(),
    function (data, status) {
      eventsList = JSON.parse(data);
      if (eventsList) {
        for (j = 0; j < eventsList.length; j++) {
          e = eventsList[j];
          if (e.start) {
            //bind event to calendar

            var startTimestamp = Date.parse(e.start);
            var mDate = new Date(startTimestamp);
            var eventDateFormat = new Date(mDate);

            var options = {
              weekday: "long",
              // year: "numeric",
              month: "long",
              day: "numeric",
            };

            var formattedDate = eventDateFormat.toLocaleDateString(
              "en-US",
              options
            );

            var node = parseInt(mDate.getHours());

            var endTimestamp = Date.parse(e.end);
            var mDate2 = new Date(endTimestamp);

            var eventDayOfWeek = mDate.getDay();

            var str =
              '<h3 class="eventTitle" data-eventId="' +
              e.ID +
              '">' +
              e.title +
              "</h3>";
            str += '<h5 class="name">' + e.description + "</h5>";
            str +=
              '<h5 class="oclock">' +
              mDate.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }) +
              " - " +
              mDate2.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }) +
              "</h5>";
            str += '<h5 class="date hidden">' + formattedDate + "</h5>";

            $(
              ".dayofweek:nth-child(" +
                (eventDayOfWeek + 1) +
                ") > .note-" +
                node
            ).html(str);

            $(
              ".dayofweek:nth-child(" +
                (eventDayOfWeek + 1) +
                ") > .note-" +
                node
            ).addClass("has-event");
          }
        }
      }
    }
  );
}
initCalendar();

$("#addToCalSubmit").click(function (e) {
  var emailAddress = $("#addToCalEmail").val();
  $("#addToCalEmail").attr("placeholder", "Adding event...");

  $.post(
    "add_event_to_guest_calendar.php",
    {
      event_id: eventID,
      email_address: emailAddress,
    },
    function (data, status) {
      eventIDClicked = null;
      $("#addToCalEmail").attr("placeholder", "Event added successfully!");
    }
  );
});
