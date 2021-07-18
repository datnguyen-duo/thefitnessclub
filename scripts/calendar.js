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

  jQuery(".btnNextWeek").click(function (e) {
    e.stopPropagation();
    renderNextWeek();
  });

  jQuery(".btnPrevWeek").click(function (e) {
    e.stopPropagation();
    renderPrevWeek();
  });
}

function renderNextWeek() {
  console.log("next");
  if (lastWeek) return false;
  weekOffset += 1;
  renderWeek();
  firstWeek = false;
}
function renderPrevWeek() {
  console.log("prev");
  if (firstWeek) return false;
  weekOffset -= 1;
  renderWeek();
  lastWeek = false;
}

function renderWeek() {
  var msunday = new Date();
  msunday.setDate(today.getDate() - today.getDay() + 7 * weekOffset);
  console.log(msunday);

  var cday = new Date();
  cday.setDate(today.getDate() - today.getDay() + 7 * weekOffset);
  console.log(cday);
  cMonth = cday.toLocaleString("default", { month: "long" });
  cMonth = cMonth.substring(0, 3);

  mfriday = new Date();
  mfriday.setDate(msunday.getDate() + 6);

  jQuery(".note").empty();

  for (i = 0; i <= 6; i++) {
    cMonth = cday.toLocaleString("default", { month: "long" });
    cMonth = cMonth.substring(0, 3);
    cdate = cday.getDate();
    if (isLastDay(cday)) lastWeek = true;
    if (isFirstDay(cday)) firstWeek = true;
    jQuery(".weekday" + i + " .num").empty();
    if (i == 0 || cdate == 1) {
      jQuery(".weekday" + i + " .num").html(
        "<sup>" + cMonth + "</sup>" + String(cday.getDate()).padStart(2, "0")
      );
    } else {
      jQuery(".weekday" + i + " .num").html(
        String(cday.getDate()).padStart(2, "0")
      );
    }

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
      console.log(eventsList);
      if (eventsList) {
        for (j = 0; j < eventsList.length; j++) {
          e = eventsList[j];
          if (e.start) {
            //bind event to calendar

            var startTimestamp = Date.parse(e.start);
            var mDate = new Date(startTimestamp);
            var node = parseInt(mDate.getHours() / 2);

            var endTimestamp = Date.parse(e.end);
            var mDate2 = new Date(endTimestamp);

            var eventDayOfWeek = mDate.getDay();

            var str =
              '<h2><a class="eventTitle" data-eventId="' +
              e.ID +
              '">' +
              e.title +
              "</a></h2>";
            str += "<div>" + '<span class="name">' + e.description + "</span>";
            str += "<br>";
            str +=
              '<span class="oclock">' +
              mDate.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }) +
              "-" +
              mDate2.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              }) +
              "</span>";
            str += "</div>";

            jQuery(
              ".dayofweek:nth-child(" +
                (eventDayOfWeek + 1) +
                ") > .note:nth-child(" +
                (node + 1) +
                ")"
            ).html(str);
          }
        }
      }
    }
  );
}
initCalendar();

jQuery("#btnSubmitEmail").click(function (e) {
  var emailAddress = jQuery("#inp-email-calendar").val();

  console.log(emailAddress);

  jQuery.post(
    "add_event_to_guess_calendar.php",
    {
      event_id: eventIDClicked,
      email_address: emailAddress,
    },
    function (data, status) {
      eventIDClicked = null;
      jQuery("#modal-success").show();
      jQuery("#modal-main-content").hide();
      setTimeout(function () {
        jQuery("#modal-success").hide();
        modal.style.display = "none";
        jQuery("#modal-main-content").show();
      }, 1500);
    }
  );
});
