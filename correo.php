<?php 

if (isset($_POST['enviar'])) {
    if (!empty($_POST['nombreCompleto']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        $name = $_POST['nombreCompleto'];
        $email= $_POST['email'];
        $message = $_POST['message'];
        $header = "From: eib.at@hotmail.com" . "\r\n";
        $header = "reply-to: noreply@eibaccesorios.com.ar" . "\r\n";
        $header = "X-mailer: PHP/" . phpversion();
        $mail = @mail($email, $message, $header);
        if ($mail) {
            echo "<h4>¡Su consulta fue enviada correctamente!</h4>"
        }
    }
}