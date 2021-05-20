var Message;
Message = function (arg) {
    this.text = arg.text, this.message_side = arg.message_side;
    this.draw = function (_this) {
        return function () {
            var $message;
            $message = $($('.message_template').clone().html());
            $message.addClass(_this.message_side).find('.text').html(_this.text);
            $('.messages').append($message);
            return setTimeout(function () {
                return $message.addClass('appeared');
            }, 0);
        };
    }(this);
    return this;
};

var getMessageText, message_side, sendMessage;
message_side = 'right';
getMessageText = function () {
var $message_input;
$message_input = $('.message_input');
return $message_input.val();
};
$('.send_message').click(function (e) {
return sendMessage(getMessageText(), 'right');
});
$('.message_input').keyup(function (e) {
if (e.which === 13) {
    return sendMessage(getMessageText(), 'right');
}
});


sendMessage = function (text, message_side='left') {
var $messages, message;
if (text.trim() === '') return;
$('.message_input').val('');
$messages = $('.messages');
message = new Message({
  text: text,
  message_side: message_side
});
message.draw();
if(message_side=='right'){
let result = RTT(text);
console.log("RTT Result:", result);
let reply = "Прости, я не понял...";
if(result.markers.length != 0){
  reply = "";
  for(let marker of result.markers){
    if(marker == "hi") reply += "Привет-привет! ";
    if(marker == "light_off") reply += "Выключил свет. ";
    if(marker == "light_on") reply += "Включил свет. ";
    if(marker == "music_off") reply += "Выключил музыку. ";
    if(marker == "music_on") reply += "Включил музыку! ";
    if(marker == "working_time") reply += "Я работаю 24/7 и базируюсь на GitHub моего создателя <a href='https://github.com/powerdot/Russian-Text-Tagger' target='_blank'>@powerdot</a> 🌟 ";
    if(marker == "what_time") reply += `Ты сам можешь посмотреть. Просто набери в консоли:<br><pre class='code'>var currentdate = new Date(); <br>console.log("Время: "+ currentdate.getHours() + ":"  + currentdate.getMinutes() + ":" + currentdate.getSeconds());</pre>`
  }
}
setTimeout(function(){
  sendMessage(reply, 'left');
}, 500);
}
return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
};

$('.ask').click(function(){
sendMessage($(this).text(), 'right');
});