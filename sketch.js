var lastValue=0;
var currentVal="0";
var maxValue="0";
var timer;
var lastTimer=0;
var apiWriteKey="CNGSFYF646TILD36";
var apiReadKey="J2NQWW1E701TY241";
var field=3;
var channelId="70693"
var inputKey, inputField, greeting, enter;
function setup()
{
createCanvas(500, 500);
textAlign(CENTER,CENTER);
textSize(width/15);
 background(255);
greeting=createElement('h2','Type in the Read Key and Field Number');
greeting.position(width/15,height/100);
enter = createButton('Enter');
  enter.position(width/2, height*4/5);
  enter.mousePressed(greet);
inputKey= createInput();
inputKey.position(width/2, height*2/5);
inputField= createInput();
inputField.position(width/2, height*3/5);
rect(0,0,width*9.99/10,height*9.99/10);
textSize(width/20);
text("Key:",width*3/8,height*2.1/5);
text("Field:",width*3/8,height*3.1/5);

}

function greet()
{window.location.assign("view.html?apiKey="+inputKey.value()+"?field="+inputField.value());}






