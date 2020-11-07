<?php 

if (isset($_POST['enviar'])) {
    if (!empty($_POST['nombreCompleto']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        $name = $_POST['nombreCompleto'];
        $email= $_POST['email'];
        $message = $_POST['message'];

        $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        @mail($email_to, $email_subject, $email_message, $headers);

        echo "¡El formulario se ha enviado con éxito!";
        // $headers = 'From: ' eib.at@hotmail.com."\r\n";
        // "reply-to: noreply@eibaccesorios.com.ar"."\r\n";
        // "X-mailer: PHP/" . phpversion();
        // @mail($email, $message, $header);
        // if ($mail) {
        //     echo "<h4>¡Su consulta fue enviada correctamente!</h4>"
        // }
    }
}

?>
