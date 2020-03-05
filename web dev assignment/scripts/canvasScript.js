document.addEventListener("DOMContentLoaded", handleDocumentLoad) /* //you can call the handleDocumentLoad part anything as it is an ID */

function handleDocumentLoad()
{
/*This creates a variable that selects the specific canvas tag, in the html,
 to display the rectangles */
var canvasRect = document.getElementById("rectangleCanvas");

/*This creates a variable that selects the specific canvas tag, in the html, 
to display the flag */
var canvasFlag = document.getElementById("flagCanvas");


var contextRect = canvasRect.getContext("2d");
var contextFlag = canvasFlag.getContext("2d");

/*This adds an event listener that begins when the page is loaded and
 looks for the function to execute eg. drawRect*/
window.addEventListener("load", drawRect);
window.addEventListener("load", drawFlag);

//Here I create the function for drawing thee rectangle and name it drawRect
	function drawRect()
	{	
			/*Here I loop the code, that is nested, 100 times. The amount of 
			rectangles (or the variable amtRects) begins at 0 and with every
			loop increases til the amount reaches 100*/
			for(var amtRects = 0; amtRects < 100; amtRects = amtRects + 1)
			{
			/*I declare these random integer variables within the loop so it 
			is different every time. Each number is random between 0 and 255 as 
			that is the min and max value for RGB. Math.floor makes the number
			a whole number(rather than floating point) and these numbers are
			used for the Red, Green and Blue value. */
			var R = Math.floor(Math.random() * 255) + 0;
			var G = Math.floor(Math.random() * 255) + 0;
			var B = Math.floor(Math.random() * 255) + 0;
			
			/*These are variables for the size of the shape. I have used the math.random 
			method to create a random number for the width and height which will vary for both between
			1 and 100*/
			var width = Math.floor(Math.random() * 100) + 1;
			var height = Math.floor(Math.random() * 100) + 1;
			
			/*Here I set variables for the X and Y position for the rectangles 
			as they need to be in random locations. It changes the X and Y 
			with each loop as they are within it rather than outside. 
			The rest is very similar to the RGB colours above*/
			var yPos = Math.floor(Math.random() * 200) + 1;
			var xPos = Math.floor(Math.random() * 200) + 1;
			
			/*Here I select the context of the specific canvas then set the fill
			style to and rgb value which uses the variables above to randomly
			change the parameters/values of the RGB. I acheived this
			using concatenation with the + operator */
			contextRect.fillStyle = "rgb(" + R + "," + G + "," + B + ")";
			
			contextRect.fillRect(xPos,yPos,width,height);
			yPos = 0;
			xpos = 0;
			}
	}
	
	
		function drawFlag()
	{	
		contextFlag.fillStyle = "#007600";
		contextFlag.fillRect(35,35,230,130);
		
		contextFlag.beginPath();
		contextFlag.moveTo(50,100);
	
		contextFlag.lineTo(150,50);
		contextFlag.lineTo(150,150);
		contextFlag.closePath();
		
		
		contextFlag.moveTo(250,100);
		contextFlag.lineTo(150,50);
		contextFlag.lineTo(150,150);
		contextFlag.closePath();
		contextFlag.fillStyle = "#FEFE00";
		contextFlag.fill();
	
		contextFlag.beginPath();
		contextFlag.arc(150, 100, 35, 0, 2 * Math.PI, true)
		contextFlag.closePath();
		contextFlag.fillStyle = "#3200FE";
		contextFlag.fill();
	}









}


/*Having calculated the time by taking the total duration of the video 
(accessible via the duration property) and multiplying that by the value of scrubSlider 
(the seekbar element in the HTML) as a percentage (i.e. divided by 100), to update the position 
in the video we set the currentTime property of the video to the point thus calculated. 
(We get the value of the slider element simply by accessing its value property in JavaScript */