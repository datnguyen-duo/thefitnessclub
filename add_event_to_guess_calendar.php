<?php
require __DIR__ . '/vendor/autoload.php';

$client = new Google_Client();
$client->setApplicationName('Google Calendar API PHP Quickstart');
$client->setScopes(Google_Service_Calendar::CALENDAR);
$client->setAuthConfig(__DIR__ . '/credentials.json');
$client->setAccessType('offline');
$client->setPrompt('select_account consent');

//$client->setScopes([SCOPE]);

$tokenPath = 'token.json';

if (file_exists($tokenPath)) {
    $accessToken = json_decode(file_get_contents($tokenPath), true);
    $client->setAccessToken($accessToken);
} else {
    die();
}

// Get the API client and construct the service object.

$service = new Google_Service_Calendar($client);

// Print the next 10 events on the user's calendar.
$calendarId = 'primary';
$eventId = $_POST["event_id"];
$emailAddress = $_POST["email_address"];

//$eventId =  "14eo12nopotjo1063ppdfj78ke";
//$emailAddress = "nd.dungha@gmail.com";

$event = $service->events->get($calendarId, $eventId);


$attendee1 = new Google_Service_Calendar_EventAttendee();

$attendee1->setEmail($emailAddress);

$attendees= $event->getAttendees();


array_push($attendees,$attendee1);
$attendees = array($attendee1);

$event->setAttendees($attendees);

$updatedEvent = $service->events->update($calendarId, $eventId , $event);

?>