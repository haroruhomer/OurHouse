<!DOCTYPE html>

<html>

<head>

<script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css">

<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css">

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"/></script>

</head>

<body>

<?php





$id_inmueble = $_POST['id_inmueble'];

$tituloAnuncio = $_POST['tituloAnuncio'];

$session_user = $_POST['session_user'];

$nombres = $_POST['nombres'];

$email = $_POST['email'];

$Telefono = $_POST['telefono'];

$mensaje = $_POST['mensaje'];





















			$to = $session_user;



			$subject = 'Tienes un nuevo cliente interesado en el inmueble NC: '.$id_inmueble.' ';



			$headers = "From: servicioalcliente@nuestracasa.com.co\r\n";

			//$headers .= "Reply-To:armandos_g@hotmail.com\r\n";

			//$headers .= "CC: seghino13@gmail.com\r\n";

			$headers .= "MIME-Version: 1.0\r\n";

			$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



			



			$message = '
						<html lang="es">
						<meta charset="utf-8">
						<body>
						<!-- Wrapper -->
						<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="backgound-color:red;">
							<tr>
								<td width="100%" valign="top" bgcolor="#f0f0f0" style="padding-top:20px; " >		

									<!-- One Column -->
									<table width="580"  class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#eeeeed" style="margin:0 auto; box-shadow:0px 0px 20px #b3b3b3;">
										<tr>
											<td valign="top" style="padding:0" bgcolor="#ffffff">
												<a href="http://www.nuestracasa.com.co"><img  class="deviceWidth" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/cabecerabuzon.png" alt="" border="0" style="display: block; border-radius: 4px;" /></a>
											</td>
										</tr>
						                <tr>
						                    <td style="font-size: 18px; color: #fff; font-weight: normal; text-align: left; font-family: Georgia, Times, serif; line-height: 24px; vertical-align: top; padding:25px" bgcolor="#fff">
						                        <center>
						                        <!--<img  class="deviceWidth" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/candado.png" alt="" border="0" style="display: block; border-radius: 4px;" />-->

						                        <p style="color:#333; text-align:left; font-family:tahoma;"><strong>Estimado '.$session_user.'</strong></p>
												<p style="color:#000; text-align:left; font-family:tahoma; ">Desde Nuestracasa.com.co un nuevo cliente está interesado en el inmueble con código NC:'.$id_inmueble.', dejando el siguiente mensaje:</p> 

						                        <p style="color:#333; text-align:left; font-family:tahoma; padding:20px; background-color:#f2f2f2; margin:20px;">'.$mensaje.'</p> 
						                        
						                        



						                        <a href="http://www.nuestracasa.com.co/dash/buzon.php" style="color: #fff; background-color:#c82931; padding:7px; text-decoration:none; font-family:arial; border-radius:5px;  ">Clic para ver el mensaje y datos del cliente</a> 
						                        <br><br>
						                    </center>
						                    </td>
						                </tr>
						                <tr>
						                    <td td style="font-size: 18px; color: #fff; font-weight: normal; text-align: left; font-family: Georgia, Times, serif; line-height: 24px; vertical-align: top; padding:25px" bgcolor="#dedbdb">
						                          <!-- Logo -->
						                            <table border="0" cellpadding="0" cellspacing="0" align="left" class="deviceWidth">
						                                <tr>
						                                    <td style="padding:15px 15px; " class="center">
						                                        <a href="mailto:servicioalcliente@nuestracasa.com.co" style="text-decoration:none; color:#333; font-family: tahoma;" >servicioalcliente@nuestracasa.com.co</a>
						                                    </td>
						                                </tr>
						                            </table><!-- End Logo -->

						                            <!-- Nav -->
						                            <table border="0" cellpadding="0" cellspacing="0" align="right" class="deviceWidth">
						                                <tr>
						                                    <td class="center" style="font-size: 13px; color: #272727; font-weight: light; text-align: right; font-family: Georgia, Times, serif; line-height: 20px; vertical-align: middle; padding:0px 20px; font-style:italic">
						                                        <a href="https://www.facebook.com/nuestracasa1" style="text-decoration: none; color: #3b3b3b;"><img style="width:40px; margin-right:-15px; margin-bottom:-10px;" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/facebook.png" alt="" border="0" /></a>
						                                        &nbsp;&nbsp;&nbsp;
						                                        <a href="https://twitter.com/NuestraCasa_Co" style="text-decoration: none; color: #3b3b3b;"><img style="width:40px; margin-right:-15px; margin-bottom:-10px;" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/twitter.png" alt="" border="0" /></a>
						                                        &nbsp;&nbsp;&nbsp;
						                                        <a href="https://www.instagram.com/nuestracasa.com.co/" style="text-decoration: none; color: #3b3b3b;"><img style="width:40px; margin-right:-15px; margin-bottom:-10px;" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/instagram.png" alt="" border="0" /></a>
						                                        &nbsp;&nbsp;&nbsp;
						                                        <a href="https://plus.google.com/109931549046485354733/about" style="text-decoration: none; color: #3b3b3b;"><img style="width:40px; margin-right:-15px; margin-bottom:-10px;" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/google+.png" alt="" border="0" /></a>
						                                         
						                                        
						                                    </td>
						                                </tr>
						                            </table><!-- End Nav -->

						                    </td>
						                </tr>
									</table><!-- End One Column -->

						            <div style="height:35px;margin:0 auto;">&nbsp;</div><!-- spacer -->
								</td>
							</tr>
						</table> <!-- End Wrapper -->

						</body>
						</html>
						';

	









	mail($to, utf8_decode($subject), utf8_decode($message), $headers);



	





?>

<?php

			$to2 = $email;



			$subject2 = 'Haz solicitado información del inmueble NC: '.$id_inmueble.' ';



			$headers2 = "From: servicioalcliente@nuestracasa.com.co\r\n";

			//$headers .= "Reply-To:armandos_g@hotmail.com\r\n";

			//$headers .= "CC: seghino13@gmail.com\r\n";

			$headers2 .= "MIME-Version: 1.0\r\n";

			$headers2 .= "Content-Type: text/html; charset=ISO-8859-1\r\n";



			



			$message2 = '
						<html lang="es">
						<meta charset="utf-8">
						<body>
						<!-- Wrapper -->
						<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="backgound-color:red;">
							<tr>
								<td width="100%" valign="top" bgcolor="#f0f0f0" style="padding-top:20px; " >		

									<!-- One Column -->
									<table width="580"  class="deviceWidth" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#eeeeed" style="margin:0 auto; box-shadow:0px 0px 20px #b3b3b3;">
										<tr>
											<td valign="top" style="padding:0" bgcolor="#ffffff">
												<a href="http://www.nuestracasa.com.co"><img  class="deviceWidth" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/cabecerabuzon.png" alt="" border="0" style="display: block; border-radius: 4px;" /></a>
											</td>
										</tr>
						                <tr>
						                    <td style="font-size: 18px; color: #fff; font-weight: normal; text-align: left; font-family: Georgia, Times, serif; line-height: 24px; vertical-align: top; padding:25px" bgcolor="#fff">
						                        <center>
						                        <!--<img  class="deviceWidth" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/candado.png" alt="" border="0" style="display: block; border-radius: 4px;" />-->

						                        <p style="color:#333; text-align:left; font-family:tahoma;"><strong>Estimado cliente.</strong></p>
												<p style="color:#000; text-align:left; font-family:tahoma; ">Haz solicitado información del inmueble con código NC:'.$id_inmueble.', pronto recibirá más información</p> 

						                       <br><br>
						                    </center>
						                    </td>
						                </tr>
						                <tr>
						                    <td td style="font-size: 18px; color: #fff; font-weight: normal; text-align: left; font-family: Georgia, Times, serif; line-height: 24px; vertical-align: top; padding:25px" bgcolor="#dedbdb">
						                          <!-- Logo -->
						                            <table border="0" cellpadding="0" cellspacing="0" align="left" class="deviceWidth">
						                                <tr>
						                                    <td style="padding:15px 15px; " class="center">
						                                        <a href="mailto:servicioalcliente@nuestracasa.com.co" style="text-decoration:none; color:#333; font-family: tahoma;" >servicioalcliente@nuestracasa.com.co</a>
						                                    </td>
						                                </tr>
						                            </table><!-- End Logo -->

						                            <!-- Nav -->
						                            <table border="0" cellpadding="0" cellspacing="0" align="right" class="deviceWidth">
						                                <tr>
						                                    <td class="center" style="font-size: 13px; color: #272727; font-weight: light; text-align: right; font-family: Georgia, Times, serif; line-height: 20px; vertical-align: middle; padding:0px 20px; font-style:italic">
						                                        <a href="https://www.facebook.com/nuestracasa1" style="text-decoration: none; color: #3b3b3b;"><img style="width:40px; margin-right:-15px; margin-bottom:-10px;" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/facebook.png" alt="" border="0" /></a>
						                                        &nbsp;&nbsp;&nbsp;
						                                        <a href="https://twitter.com/NuestraCasa_Co" style="text-decoration: none; color: #3b3b3b;"><img style="width:40px; margin-right:-15px; margin-bottom:-10px;" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/twitter.png" alt="" border="0" /></a>
						                                        &nbsp;&nbsp;&nbsp;
						                                        <a href="https://www.instagram.com/nuestracasa.com.co/" style="text-decoration: none; color: #3b3b3b;"><img style="width:40px; margin-right:-15px; margin-bottom:-10px;" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/instagram.png" alt="" border="0" /></a>
						                                        &nbsp;&nbsp;&nbsp;
						                                        <a href="https://plus.google.com/109931549046485354733/about" style="text-decoration: none; color: #3b3b3b;"><img style="width:40px; margin-right:-15px; margin-bottom:-10px;" src="http://nuestracasa.com.co/notificaciones/notificaciones/img/google+.png" alt="" border="0" /></a>
						                                         
						                                        
						                                    </td>
						                                </tr>
						                            </table><!-- End Nav -->

						                    </td>
						                </tr>
									</table><!-- End One Column -->

						            <div style="height:35px;margin:0 auto;">&nbsp;</div><!-- spacer -->
								</td>
							</tr>
						</table> <!-- End Wrapper -->

						</body>
						</html>';

	









	mail($to2, utf8_decode($subject2), utf8_decode($message2), $headers2);

?>

<?php 



error_reporting(0);

//include "conexion.php";

//$prueba=$_SESSION['name']; 

//echo $prueba

$username = "ncfinal_bdnc";

$password="rz{%]@ke6?r,0+8";

$database = "ncfinal_bdnc";

$server = "localhost";















mysql_connect($server,$username,$password);

mysql_select_db($database);







$sql = " INSERT INTO buzon values ('','$session_user', '$nombres' , '$email' , '$Telefono' , '$mensaje' , '$id_inmueble', '$tituloAnuncio ', '', now(), 'activo') ";

			 $query=mysql_query($sql);

			//echo $query;	

			if($query!=null){

			?>	

<script language="JavaScript" type="text/javascript">



					    var codigo_inmueble = "<?php echo $id_inmueble; ?>";

					    swal({  title: "Mensaje Enviado",   

					            text: "Datos enviados correctamente.",   

					            type: "success",   

					            confirmButtonText: "Continuar" },

					function () {



					    window.location.href = '../propiedades.php?id_inmueble='+codigo_inmueble+'';

					});



    </script>



<?php

		}else{

				print "<script>alert(\"No se pudo enviar el mensaje.\");window.location='../index.php';</script>";



			}





?>

</body>



</html>