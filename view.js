var lastValue=0;
var currentVal="0";
var maxValue="0";
var timer;
var lastTimer=0;
var apiWriteKey="CNGSFYF646TILD36";
var apiReadKey;//="J2NQWW1E701TY241";
var fieldKey="field1";
var channelId="70693";
var thisURL;
var fieldNum=0;
function setup()
{
createCanvas(500, 800);
frameRate(100);
thisURL=window.location.href;
var thisURLs=split(thisURL,"?");
var reads=splitTokens(thisURLs[1],"=");
apiReadKey=reads[1];
var fields=splitTokens(thisURLs[2],"=");
fieldNum=fields[1];
}




function draw()
{
background(255);
fill(255);
rect(0,0,width,height);
fill(color(0,0,200)); textSize(width/30); textAlign(CENTER,CENTER);
text("API Read KEY="+apiReadKey,width/2,height/20);
text("API field ="+fieldNum,width/2,height*2/20);

textSize(width/20);
text("Most Current Post: ",width/2,height*5/20);
textSize(width/15);
text(currentVal,width/2,height*6/20);
textSize(width/20);
text("from thingSpeak field " +fieldNum,width/2,height*7/20);

if(millis()-lastTimer>1000||lastTimer==0)
{
updateData();
lastTimer=millis();
}

}


function updateData()
{
var address="https://api.thingspeak.com/channels/"+channelId+"/feeds/last.json"
loadJSON(address,datapass,'jsonp');
println(address);
}

function datapass(newData)
{var fieldLabel= "\"field"+fieldNum+"\"";
println(newData);
var datArray=splitTokens(JSON.stringify(newData),",");
println(datArray[0]+"test");

for(var i=0; i<datArray.length; i++)
  {var current=splitTokens(datArray[i],":");
  println(current[0]);
  if(current[0]==fieldLabel){println("Found It"+current[0]);}
  }
println(current[1]);
var vals=splitTokens(current[1],"\"");
currentVal=vals[0];
//maxValue=newData.getColumn(1)[3];
}




