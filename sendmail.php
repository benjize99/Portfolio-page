<?php
if (isset($_POST['submit'])) {
    $to = "benjize99@gmail.com"; // Your email address where the message will be sent
    $from = $_POST['email'];       // Sender's email from the form
    $name = $_POST['name'];        // Sender's name from the form
    $message = $_POST['message'];  // Message from the form

    $subject = "Contact Form Submission";
    $headers = "From: " . $from . "\r\n";
    $headers .= "Reply-To: " . $from . "\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $name\nEmail: $from\n\nMessage:\n$message";

    $sent = mail($to, $subject, $body, $headers);

    if ($sent) {
        echo "Your message was sent!";
    } else {
        echo "Oops! Something went wrong, please try again.";
    }
    header("Location: index.html?success=1");
exit;
}
?>