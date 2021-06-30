// var CLIENT_ID =
//   "817741214188-18v6apia7uaehal3ng8kol0r4e6ubp8n.apps.googleusercontent.com";
// var API_KEY = "AIzaSyD7Q9silUIprekH3uoLCu0wkQAJHDw0GqE";

// var DISCOVERY_DOCS = [
//   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
// ];

// var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

// var authorizeButton = document.getElementById("authorize_button");
// var signoutButton = document.getElementById("signout_button");

// function handleClientLoad() {
//   gapi.load("client:auth2", initClient);
// }

// function initClient() {
//   gapi.client
//     .init({
//       apiKey: API_KEY,
//       clientId: CLIENT_ID,
//       discoveryDocs: DISCOVERY_DOCS,
//       scope: SCOPES,
//     })
//     .then(
//       function () {
//         listUpcomingEvents();
//       },
//       function (error) {
//         appendPre(JSON.stringify(error, null, 2));
//       }
//     );
// }

// function appendPre(message) {
//   var pre = document.getElementById("content");
//   var textContent = document.createTextNode(message + "\n");
//   pre.appendChild(textContent);
// }

// function listUpcomingEvents() {
//   gapi.client.calendar.events
//     .list({
//       calendarId: "primary",
//       timeMin: new Date().toISOString(),
//       showDeleted: false,
//       singleEvents: true,
//       maxResults: 100,
//       orderBy: "startTime",
//     })
//     .then(function (response) {
//       var events = response.result.items;
//       //   appendPre("Upcoming events:");

//       if (events.length > 0) {
//         for (i = 0; i < events.length; i++) {
//           var event = events[i];
//           var when = event.start.dateTime;
//           if (!when) {
//             when = event.start.date;
//           }
//           appendPre(event.summary + " (" + when + ")");
//           appendPre(event.description);
//         }
//       } else {
//         appendPre("No upcoming events found.");
//       }
//     });
// }
