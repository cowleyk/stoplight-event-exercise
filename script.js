/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/
var stopButt = document.querySelector('#stopButton');
// var redStopLight = document.querySelector('#stopLight')
// ^^unneeded
var count=0;
stopButt.addEventListener('click', function(){
    count++;
        //count variable increases each click
    console.log(count);
    if (count %2 === 0){
        //when count = even
      document.querySelector('#stopLight').style.backgroundColor="black";
    }
    else{
      document.querySelector('#stopLight').style.backgroundColor="red";
    }
});

var slowButt = document.querySelector('#slowButton');
// var yellowStopLight = document.querySelector('#slowLight');
// ^^unneeded
slowButt.addEventListener('click', function(){
  count++;
      //count variable increases each click
  console.log(count);
  if (count %2 === 0){
      //when count = even
    document.querySelector('#slowLight').style.backgroundColor="black";
  }
  else{
    document.querySelector('#slowLight').style.backgroundColor="yellow";
  }});

var goButt = document.querySelector('#goButton');
// var greenStopLight = document.querySelector('#goLight')
// ^^unneeded
goButt.addEventListener('click', function(){
  count++;
      //count variable increases each click
  console.log(count);
  if (count %2 === 0){
      //when count = even
    document.querySelector('#goLight').style.backgroundColor="black";
  }
  else{
    document.querySelector('#goLight').style.backgroundColor="green";
  }});
