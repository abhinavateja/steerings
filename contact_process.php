<?php

    $to = "sales@steerings.in";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $csubject = $_REQUEST['number'];
	$cmessage = $_REQUEST['message'];
	$cbrandofcar = $_REQUEST['brand'];
	$cmodel = $_REQUEST['model'];
	$cmfg = $_REQUEST['mfg-year'];
	$ckms = $_REQUEST['kms'];

    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $subject = "You have a message from your Steerings.";

    $logo = '';
    $link = '#';

	$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Bixcoin Master Mail</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
	$body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
	$body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
	$body .= "</tr>";
	$body .= "<tr><td style='border:none;'><strong>Brand:</strong> {$cbrandofcar}</td></tr>";
	$body .= "</tr>";
	$body .= "<tr><td style='border:none;'><strong>Model:</strong> {$cmodel}</td></tr>";
	$body .= "<tr><td style='border:none;'><strong>Mfg-Year:</strong> {$cmfg}</td></tr>";
	$body .= "<tr><td style='border:none;'><strong>Kms Driven:</strong> {$ckms}</td></tr>";
	$body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$csubject}</td></tr>";
	$body .= "<tr><td></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";

    $send = mail($to, $subject, $body, $headers);

?>