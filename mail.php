<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $to = 'info@huaira.org';
        $subject = htmlspecialchars($_POST["subject"]); 
        $name = htmlspecialchars($_POST["name"]);
        $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
        $message_text = htmlspecialchars($_POST["message"]);

        if (!$email) {
            echo json_encode(["status" => "error", "message" => "Correo electrónico no válido."]);
            exit;
        }


        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
        $headers .= "From: " . $email . "\r\n"; 
        $headers .= "Reply-To: " . $email . "\r\n";


        $message = '<table style="width:100%; border-collapse: collapse; border: 1px solid #ddd;">
            <tr>
                <td><strong>Nombre:</strong> ' . $name . '</td>
            </tr>
            <tr>
                <td><strong>Email:</strong> ' . $email . '</td>
            </tr>
            <tr>
                <td><strong>Asunto:</strong> ' . $subject . '</td>
            </tr>
            <tr>
                <td><strong>Mensaje:</strong> ' . nl2br($message_text) . '</td>
            </tr>
        </table>';

        if (@mail($to, $subject, $message, $headers)) {
            echo json_encode(["status" => "success", "message" => "El mensaje ha sido enviado con éxito."]);
        } else {
            echo json_encode(["status" => "error", "message" => "Error al enviar el mensaje."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "Método de solicitud no permitido."]);
    }
?>
