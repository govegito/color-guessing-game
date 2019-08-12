 
//randomnising things
 var colors=[];
 var i=0;
 var tempcolor=colorpicker();
 var temp;

 for( i=0;i<6;i++)
 {
   temp = "rgb(" + tempcolor[i*3] +", " + tempcolor[i*3 +1] + ", " + tempcolor[i*3 +2] +")";
   colors.push(temp);
 }

 // all the selections of the task

 var squares=document.querySelectorAll(".square");
 var pickedColor = colors[randomn()];
 var colordisplay= document.querySelector("#colordisp");
 var playmessage= document.querySelector("#message");
 var buttons= document.querySelectorAll(".playbutton");
 var textbg= document.querySelector(".text");

 colordisplay.textContent=pickedColor;

 console.log(buttons);

for(i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener("click", function() {
      window.location.reload();
	});

}

 for(i = 0; i < squares.length; i++)
 {
 	squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function() {
		var colorpicked= this.style.backgroundColor;
		
		if(colorpicked===pickedColor)
			{playmessage.textContent="correct";
             doallsame(colorpicked);
             textbg.style.backgroundColor=colorpicked;

	         }
		else
		{
			playmessage.textContent="wrong!";
			this.style.backgroundColor= "#232323";
		}
	});
 }

function colorpicker(){
	var randomnumb=[];
    temp=0;
   for(i = 0;i<18;i++)
   {
   	temp=Math.floor(Math.random()*256);
   	randomnumb.push(temp);
   }
  return randomnumb;
}

function randomn(){
	temp=Math.floor(Math.random()*6);
	return temp;
}
 
function doallsame(color)
{
	for(i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;}
}
