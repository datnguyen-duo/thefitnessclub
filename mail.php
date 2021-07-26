<?php

    $to = "dat@duo-studio.co";

    $message = '<table style="background: #ffffff; margin: 0 auto;" width="100%" cellspacing="0" cellpadding="0">

                <thead>

                    <tr>

                        <td style="padding: 20px; text-align: center; background: #000" colspan="2">

                            <img src="https://staging.thefitnessclub.net/assets/FitnessClub_Horizontal_Red_White.png" alt="logo" width="138" height="auto" />

                        </td>

                    </tr>

                </thead>

                <tbody>';

                $subject = "The Fitness Club inquiry for " . $_POST['subject'];

                $message .= '<tr style="background-color: #ffffff;">
        
                                <td style="width: 10%; padding: 10px 20px;"><strong>Name:</strong></td>
        
                                <td style="width: 90%; padding: 10px 20px; text-align: left;">'.$_POST['fname'] . " " . $_POST['lname'].'</td>
        
                            </tr>
        
                            <tr style="background-color: #ffffff;">
        
                                <td style="width: 10%; padding: 10px 20px;"><strong>Email: </strong></td>
        
                                <td style="width: 90%; padding: 10px 20px; text-align: left;">'.$_POST['email'].'</td>
        
                            </tr>

                            <tr style="background-color: #ffffff;">
        
                                <td style="width: 10%; padding: 10px 20px;"><strong>Phone: </strong></td>
        
                                <td style="width: 90%; padding: 10px 20px; text-align: left;">'.$_POST['phone'].'</td>
    
                            </tr>
        
                            <tr style="background-color: #ffffff;">
        
                                <td style="width: 10%; padding: 10px 20px;"><strong>Message: </strong></td>
        
                                <td style="width: 90%; padding: 10px 20px; text-align: left;">'.$_POST['message'].'</td>
        
                            </tr>';

    $message .= '</tbody>

                <tfoot>

                    <tr>

                        <td style="padding: 5px; background: #000000;" colspan="2">

                            <p style="text-align: center; color: #fff; font-size: 14px; margin: 10px 0;">

                            Copyright 2021 The Fitness Club. All Rights Reserved

                            </p>

                        </td>

                    </tr>

                </tfoot>

            </table>';

    $header = "From:form@thefitnessclub.net \r\n";

    $header .= "MIME-Version: 1.0\r\n";

    $header .= "Content-type: text/html\r\n";

    $retval = mail ($to,$subject,$message,$header);

    if( $retval == true ) {

       echo "Message sent successfully...";

    } else {

       echo "Message could not be sent...";

    }

?>