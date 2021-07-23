<?php
error_reporting(0);
require __DIR__ . '/vendor/autoload.php';

/**
 * Returns an authorized API client.
 * @return Google_Client the authorized client object
 */
function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Google Calendar API PHP Quickstart');
    $client->setScopes(Google_Service_Calendar::CALENDAR);
    $client->setAuthConfig(__DIR__ . '/credentials.json');
    $client->setAccessType('offline');
    $client->setPrompt('select_account consent');

    // Load previously authorized token from a file, if it exists.
    // The file token.json stores the user's access and refresh tokens, and is
    // created automatically when the authorization flow completes for the first
    // time.
    $tokenPath = 'token.json';
    if (file_exists($tokenPath)) {
        $accessToken = json_decode(file_get_contents($tokenPath), true);
        $client->setAccessToken($accessToken);
    }

    // If there is no previous token or it's expired.
    if ($client->isAccessTokenExpired()) {
        // Refresh the token if possible, else fetch a new one.
        if ($client->getRefreshToken()) {
            $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
        } else {
            // Request authorization from the user.
            $authUrl = $client->createAuthUrl();
            
            
            if( isset($_POST['access_token']) && !empty($_POST['access_token']) ){
                echo $_POST['access_token'];
                $authCode = $_POST['access_token'];
                $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
                $client->setAccessToken($accessToken);
                
                // echo "Access Token: " . json_encode($accessToken);
                // Check to see if there was an error.
                if (array_key_exists('error', $accessToken)) {
                    throw new Exception(join(', ', $accessToken));
                }
                if (!file_exists(dirname($tokenPath))) {
                    mkdir(dirname($tokenPath), 0700, true);
                }
                file_put_contents($tokenPath, json_encode($client->getAccessToken()));

            }else{
                echo "<a href='".$authUrl."' target='_blank'>Click here to get your access code!</a>
                <form action='' method='post'>
                    <label>Access Token:</label>
                    <input type='text' name='access_token' placeholder='Enter access token'>
                    <input type='submit' value='Submit Token'>
                </form>";
            }
            
        }
        // Save the token to a file.
        
    }
    return $client;
}


// Get the API client and construct the service object.
$client = getClient();
$service = new Google_Service_Calendar($client);

// Print the next 10 events on the user's calendar.
$calendarId = 'primary';
$optParams = array(
  'maxResults' => 100,
  'orderBy' => 'startTime',
  'singleEvents' => true,
  'timeMin' => date(DATE_ATOM, mktime(0, 0, 0, 7, 11, 2021)),
  'timeMax' => date(DATE_ATOM, mktime(0, 0, 0, 7, 17, 2021))
);
$results = $service->events->listEvents($calendarId, $optParams);
$events = $results->getItems();

// //print_r($optParams);

// $output = array();
// if (empty($events)) {
    
//     echo json_encode(array());
//     die();
// } else {
//     // print "Upcoming events:\n";
    
      
//     foreach ($events as $event) {
//         $tmpEvent = new \stdClass;
//         $tmpEvent->title = $event->summary;
//         $tmpEvent->description = $event->description;
//         $tmpEvent->start = $event->start->dateTime;
//         $tmpEvent->end   = $event->end->dateTime;
//         array_push($output,$tmpEvent);
//         // $start = $event->start->dateTime;
//         // if (empty($start)) {
//         //     $start = $event->start->date;
//         // }
//         // printf("%s (%s)\n", $event->getSummary(), $start);
//     }

//         echo "<pre>";
//         echo print_r($events);
//         echo "</pre>";
    
//     // echo "<pre>";
//     // echo print_r($output);
//     // echo "</pre>";
//     die();
    
    
// }