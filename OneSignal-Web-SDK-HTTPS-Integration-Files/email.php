<?php
$message;
if(isset($_POST['submit_form']) && isset($_POST['submit_form']) == 1){
$to = "contact@blockchainx.tech";
$subject = "BlockchainX Contact form";

$message = "
<html>
<body>
<p>BlockchainX Contact form</p>
<table>
<tr>
<td>Name</td>
<td>: ".$_POST['name']."</td>
</tr>
<tr>
<td>Email</td>
<td>: ".$_POST['email']."</td>
</tr>
<tr>
<td>Message</td>
<td>: ".$_POST['message']."</td>
</tr>
<tr>
<td>Skype or Whatsapp</td>
<td>: ".$_POST['skype']."</td>
</tr>
</table>
</body>
</html>
";

//print_r($message);exit();

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From:'. $_POST['email'] . "\r\n";

if(mail($to,$subject,$message,$headers)){
	$message = "<div class='message success'><p>Thanks for submitting. We will be contacting you shortly.</p></div>";
    // echo '1';
}else{
// 	$message = "<div class='message error'><p>Something went worng</p></div>";
    echo '0';
}
}else{
    echo '2';
}
?>