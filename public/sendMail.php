<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: ");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"):
        header("Access-Control-Allow-Origin: https://julian-kohn.de");
        $json = file_get_contents('php://input');
        $params = json_decode($json);
        $email = $params->email;
        $name = $params->username;
        $message = $params->message;
        $recipient = 'info@julian-kohn.de';
        $subject = "Contact From <$email>";
        $message = "From:" . $name . "<br>" . $message . "<br>" . $email;
        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: julian-kohn.de";
        $body = "From: " . htmlspecialchars($name) . "<br>" .
            nl2br(htmlspecialchars($message)) . "<br>" .
            htmlspecialchars($email);

        if (mail($recipient, $subject, $body, implode("\r\n", $headers))) {
            echo json_encode([
                "status" => "ok",
                "message" => "Danke $name, deine Nachricht wurde erfolgreich gesendet!"
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "Leider gab es ein Problem beim Senden deiner Nachricht."
            ]);
        }
        break;

    default:
        header("Allow: POST", true, 405);
        exit;
}
