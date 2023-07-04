var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox = $("#textbox")
var instructions = $("#instruction")
var content = "";
var display = $("#capture");
var capture = "";
var submit = $("#push");
var d = new Date();
console.log(d.toDateString());
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


var Day = `${d.getFullYear()} - ${month[d.getMonth()]} - ${d.getDate()}`

var b =`${d.getFullYear()}${month[d.getMonth()]}${d.getDate()}`;
console.log(b);
var update;


recognition.continuous = true;


$('#bt_start').click((event) => {
  if (content.length) {
    content += " ";
  }
  recognition.start();
  instructions.text('The speech is processing...');
});


recognition.onresult = (event) => {
  var current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content += transcript;
  textbox.text(`${content}`);
}

$('#bt_stop').click((event) => {
  recognition.stop();
  instructions.text('The speech recognition terminated');
});

submit.click((event) => {
if(!update){
  display.append(`<div class="best" id=${b}><h3>${Day}</h3><p>${textbox.val()}</p></div>`);
}
  else{
    update.append(`<p>${textbox.val()}</p>`)
  }
  textbox.text("");
  content = "";
  recognition.stop();
  instructions.text('The Speech was accepted succefully');
 update = $(`#${b}`);
})




