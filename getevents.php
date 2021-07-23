<?php
error_reporting(0);
require __DIR__ . '/vendor/autoload.php';

$client = new Google_Client();
$client->setApplicationName('Google Calendar API PHP Quickstart');
$client->setScopes(Google_Service_Calendar::CALENDAR);
$client->setAuthConfig(__DIR__ . '/credentials.json');
$client->setAccessType('offline');
$client->setPrompt('select_account consent');
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

//$d=strtotime($dateString);
//echo "Created date is " . date("Y-m-d h:i:sa", $d);

date_default_timezone_set('US/Eastern');
$d=1;
$m=1;
$y=2000;
if(isset($_GET['date']) && isset($_GET['month']) && isset($_GET['year'])){
    $d = intval($_GET['date']);
    $m = intval($_GET['month']);
    $y = intval($_GET['year']);
}


// echo $d."-";
// echo $m."-";
// echo $y;
// die();
$optParams = array(
  'maxResults' => 2500 ,
  'orderBy' => 'startTime',
  'singleEvents' => true,
  'timeMin' => date(DATE_ATOM, mktime(0, 0, 0, $m, $d, $y)),
  'timeMax' => date(DATE_ATOM, mktime(0, 0, 0, $m, $d+7, $y)),  
);
$results = $service->events->listEvents($calendarId, $optParams);
$events = $results->getItems();

//print_r($optParams);
$output = array();
if (empty($events)) {
    
    echo json_encode(array());
    die();
} else {
    // print "Upcoming events:\n";
    
      
    foreach ($events as $event) {
        
        $tmpEvent = new \stdClass;
        $tmpEvent->ID = $event->id;
        $tmpEvent->title = $event->summary;
        $tmpEvent->description = $event->description;
        $tmpEvent->start = $event->start->dateTime;
        $tmpEvent->end   = $event->end->dateTime;
        array_push($output,$tmpEvent);
        // $start = $event->start->dateTime;
        // if (empty($start)) {
        //     $start = $event->start->date;
        // }
        // printf("%s (%s)\n", $event->getSummary(), $start);
    }

    // echo "<pre>";
    // echo print_r($output);
    // echo "</pre>";
    
    echo json_encode($output);
    die();
    
    
}