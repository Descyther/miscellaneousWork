<html>
<head>
<title>Ntahaniel Bradley PHP Webpage</title>
</head>
<body>
<?php
echo " <table border='1'>
<tr>
<td>Rectangle 1:  Nathaniel Bradley 16050547</td>
<td>Rectangle 2: ";
print(3+4+5);

echo 
" </td>
</tr>
<tr>
<td>Rectangle 3: ";
srand(3034);
echo rand();

echo
"</td>
<td>Rectangle 4: ";
$x = 30;
//The task says "between" 30 and 40 so I made the statement < 38 so it doesnt also print 40
while($x < 38)
{
	$x = $x + 2;
	print($x);
	echo " - ";
}


echo
"</td>
</tr><td>Rectangle 5:";?>

<form action="NathanielBradleyHTML.php" method="post">
 <p>Enter Characters or a Number: <input type="text" name="userInput" maxlength="4"/></p>
 <p><input type="submit" /></p>
</form>


<?php
echo
"</td> 
<td>Rectangle 6: <br/><br/>";

if(isset($_POST['userInput']))
	{
		$userInput = $_POST['userInput'];
		echo $userInput;
	}


echo"</td>
</tr>
<tr>
<td>Rectangle 7:";?>

<form action="NathanielBradleyHTML.php" method="post">
 <p>Enter a 4 digit Number: <input type="number" name="numberInput" min="1000" max="9999"/></p>
 <p><input type="submit" /></p>
</form>


<?php

if(isset($_POST['numberInput']))
	{
		$numberInput = $_POST['numberInput'];
		srand($numberInput);
		echo rand();
	}


echo"</td>
<td>Rectangle 8 <br/>";
$y = "password";
echo str_rot13($y);



echo"</td>
</tr>
<tr>
<td>Rectangle 9</td>
<td>Rectangle 10";
$pass = "77c12394ef7d4f23a8fa07d87309afd9";
$z = 0;
while($z < 10000)
	{
		$res2 = "m".$z;
		$z++;
		$result = md5($res2);
		
		if($result == $pass)
			{
				echo $result;
				echo $res2;
				break;
			}

	}

	

echo"
</td>
</tr>
</table> ";
?>

</body>
</html>























