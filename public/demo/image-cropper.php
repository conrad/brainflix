<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$jpeg_quality = 90;

	if ($_POST['dataS'] == 1) {
		$src = '../../../assets/globals/img/picjumbo/1.jpg';
	} else
		$src = '../../../assets/globals/img/picjumbo/2.jpg';

	$img_r = imagecreatefromjpeg($src);
	$dst_r = ImageCreateTrueColor( $_POST['dataW'],$_POST['dataH'] );

	//imagecopyresampled ( resource $dst_image , resource $src_image , int $dst_x , int $dst_y , int $src_x , int $src_y , int $dst_w , int $dst_h , int $src_w , int $src_h )

	imagecopyresampled($dst_r,$img_r,0,0,intval($_POST['dataX']),intval($_POST['dataY']),intval($_POST['dataW']),intval($_POST['dataH']),intval($_POST['dataW']),intval($_POST['dataH']));

	header('Content-type: image/jpeg');
	imagejpeg($dst_r,null,$jpeg_quality);

	exit;
}

?>