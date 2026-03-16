<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// 1. LOGGING (FOR DEBUGGING)
// This will create a 'mail_log.txt' file in your folder every time the form is submitted
$log_file = "mail_log.txt";
$current_time = date('Y-m-d H:i:s');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        $data = $_POST;
    }

    $fullName = isset($data['fullName']) ? strip_tags($data['fullName']) : 'Not provided';
    $email = isset($data['email']) ? strip_tags($data['email']) : 'Not provided';
    $mobile = isset($data['mobile']) ? strip_tags($data['mobile']) : 'Not provided';
    $project = isset($data['project']) ? strip_tags($data['project']) : 'Radiance Eternity';

    // REPLACE THIS WITH YOUR CLIENT'S EMAIL
    $to = "sudharsan0727@gmail.com"; 
    
    $subject = "NEW LEAD: " . $fullName . " - " . $project;

    // Log the attempt
    file_put_contents($log_file, "[$current_time] Attempting to send mail to $to for $fullName\n", FILE_APPEND);

    // Email content
    $message = "
    <html>
    <head><title>New Lead enquiry</title></head>
    <body style='font-family: Arial, sans-serif;'>
        <div style='padding: 20px; border: 1px solid #ddd; border-radius: 5px;'>
            <h2 style='color: #9b7a44;'>New Website Lead</h2>
            <p><strong>Name:</strong> $fullName</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $mobile</p>
            <p><strong>Project:</strong> $project</p>
            <hr>
            <p style='font-size: 10px; color: #777;'>Sent from: " . $_SERVER['HTTP_HOST'] . "</p>
        </div>
    </body>
    </html>";

    // Standard Headers for Gmail compatibility
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Radiance Eternity Leads <noreply@radiancedevelopers.com>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        file_put_contents($log_file, "[$current_time] SUCCESS: Mail accepted by server for $to\n", FILE_APPEND);
        echo json_encode(["status" => "success"]);
    } else {
        file_put_contents($log_file, "[$current_time] ERROR: Server rejected mail() function\n", FILE_APPEND);
        http_response_code(500);
        echo json_encode(["status" => "error"]);
    }
} else {
    file_put_contents($log_file, "[$current_time] BLOCKED: Non-POST request received\n", FILE_APPEND);
    http_response_code(405);
}
?>
