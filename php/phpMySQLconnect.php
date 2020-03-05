<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "lab2";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . 
mysqli_connect_error());



}
?>

<table border = 1;>
<tr>
<td>Rectangle 1 - <br/>
<?php 
echo mysqli_get_server_info($conn);

?>
</td>
<td>
Rectangle 2 - <br/>
<?php

$sql = " SELECT * FROM `lab2` WHERE `username` = 13022 ";

$result = mysqli_query($conn, $sql);


while($row = mysqli_fetch_array($result)){
	
	echo "$row[0]";
	
	
}

mysqli_free_result($result);


?>
</td>
</tr>
<tr>
<td>
Rectangle 3 - <br/>
<?php
$sql = " SELECT * FROM `lab2` WHERE `password` = '2c2c5fd01b61e3e0e687573af8f7e1fa' ";

$result = mysqli_query($conn, $sql);


while($row = mysqli_fetch_array($result)){
	
	echo "$row[1]<br/>";
	
	
}

?>

</td>
<td>
Rectangle 4 - <br/>
<?php
$sql = " SELECT * FROM `lab2` WHERE `name` = 'McKee  Heidi C.' ";

$result = mysqli_query($conn, $sql);


while($row = mysqli_fetch_array($result)){
	
	echo "$row[5]";
	
	
}

?>


</td>
</tr>
<tr>
<td>
Rectangle 5 - <br/>
<?php
$sql = " SELECT * FROM `lab2` WHERE `username` <= 100 ";

$result = mysqli_query($conn, $sql);


while($row = mysqli_fetch_array($result)){
	
	echo "$row[2]<br/>";
	
	
}

?>
</td>
<td>
Rectangle 6 - <br/>
<?php
$sql = " SELECT * FROM `lab2` WHERE `password` LIKE '%b42c3e0713278dd%' ";

$result = mysqli_query($conn, $sql);


while($row = mysqli_fetch_array($result)){
	
	echo "$row[2]<br/>";
	
	
}

?>
</td>
</tr>
<tr>
<td>
Rectangle 7 - <br/>
<?php
$sql = " SELECT * FROM `lab2` WHERE `name` LIKE '%Kelly%' ";

$result = mysqli_query($conn, $sql);


while($row = mysqli_fetch_array($result)){
	
	echo "$row[2]<br/>";
	
	
}

?>
</td>
<td>
Rectangle 8 - <br/>
<?php
$sql = " SELECT * FROM `lab2` WHERE `name` LIKE '%Penny%' ";

$result = mysqli_query($conn, $sql);

$a = 0;
while($row = mysqli_fetch_array($result)){
	
	$a++;
	
	
}
echo $a, "<br/>";

?>
</td>
</tr>
<tr>
<td>
Rectangle 9 - <br/>
<?php
$sql = " SELECT * FROM `lab2` WHERE `username` < 600 ";

$result = mysqli_query($conn, $sql);

$a = 0;
while($row = mysqli_fetch_array($result)){
	
	 $a++;
	
}
echo $a, "<br/>";

?>

</td>
<td>
Rectangle 9 - <br/>
<?php
$sql = " SELECT * FROM `lab2` WHERE `username` BETWEEN 700 AND 1500 ";

$result = mysqli_query($conn, $sql);

$a = 0;
while($row = mysqli_fetch_array($result)){
	
	 $a++;
	
}
echo $a, "<br/>";

?>

</td>
</tr>
</table>