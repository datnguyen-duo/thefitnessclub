<?php

    $to = "sandra@thefitnessclub.net, dat@duo-studio.co";
    // $to = "dat@duo-studio.co, dattnguyen1001@gmail.com, dat_t_nguyen@live.com";

    $message = '<html>
                <body>
                <table style="background: #ffffff; margin: 0 auto;" width="100%" cellspacing="0" cellpadding="0">
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
        
                            </tr>
                            
                            ';

    $message .= '</tbody>

            </table>
            </body>
            </html>';

    $header = [
        'From: The Fitness Club <form@thefitnessclub.net>',
        'List-Unsubscribe: <mailto:form@thefitnessclub?subject=unsubscribe>',
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8'
    ];

    $retval = mail($to,$subject,$message,implode("\r\n", $header));

    if( $retval == true ) {

       echo "Message sent successfully...";

    } else {

       echo "Message could not be sent...";

    }

?>