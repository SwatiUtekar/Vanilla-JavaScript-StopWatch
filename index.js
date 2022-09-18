var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer=false;

function start(){
  timer=true;
  stopWatch();
}

function stop(){
  timer=false;
}

function reset(){
  timer=false;
  hr=0;
  min=0;
  sec=0;
  count=0;
  document.getElementById("hr").innerHTML="0"+hr;
  document.getElementById("min").innerHTML="0"+min;
  document.getElementById("sec").innerHTML="0"+sec;
  document.getElementById("count").innerHTML="0"+count;
}

function stopWatch(){
  if(timer == true){
    count+=1;
    if(count == 100){
      sec+=1;
      count=0;
    }
    if(sec == 60){
      min+=1;
      count=0;
      sec=0;
    }
    if(min == 60){
      hr+=1;
      count=0;
      sec=0;
    }
    var newHr=hr;
    var newMin=min;
    var newSec=sec;
    var newCount=count;
    if(count<10){
      newCount="0"+newCount;
    }
    if(sec<10){
      newSec="0"+newSec;
    }
    if(min<10){
      newMin="0"+newMin;
    }
    if(hr<10){
      newHr="0"+newHr;
    }
    document.getElementById("hr").innerHTML=newHr;
    document.getElementById("min").innerHTML=newMin;
    document.getElementById("sec").innerHTML=newSec;
    document.getElementById("count").innerHTML=newCount;
    setTimeout("stopWatch()",10);
  }
}
