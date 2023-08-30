function replaceNumbers(input) {
    var numbers = {
        0:'০',
        1:'১',
        2:'২',
        3:'৩',
        4:'৪',
        5:'৫',
        6:'৬',
        7:'৭',
        8:'৮',
        9:'৯',
    };
    var output = [];
    for (var i = 0; i < input.length; ++i) {
      if (numbers.hasOwnProperty(input[i])) {
        output.push(numbers[input[i]]);
      } else {
        output.push(input[i]);
      }
    }
    return output.join('');
}

function showDateTime() {
    var timeDiv = document.getElementById("time");
  
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var sec = date.getSeconds();
    // const numBd =['০','১','২','৩','৪','৫','৬','৭','৮','৯'];
    // var time = hours + ":" + min + ":" + sec;

    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 12 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes ;

    timeDiv.innerText = replaceNumbers(strTime) +' '+ ampm;
}
function showDate(){
    var dateDiv = document.getElementById("date");
  

    var date = new Date();
    var dayList = ["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];
    var monthNames = ["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"];

    var dayName = dayList[date.getDay()];
    var monthName = monthNames[date.getMonth()];
    var todayDate = replaceNumbers(date.getDate()+'');
    var year = replaceNumbers(date.getFullYear()+'');
    // myDivd.innerText = dayName+', '+', '+replaceNumbers(today);
    dateDiv.innerText = dayName+', '+todayDate+' '+monthName+', '+year;
}
showDate();
setInterval(showDateTime, 1000);
