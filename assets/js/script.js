
var currentDayEl = $("#currentDay");
var currentDay = moment().format("LL"); 
var textAreaEl = $("textarea");
var currentHour = moment().format("HH");

//Display current Date on page
currentDayEl.text(currentDay);



for (var i = 9; i < 17; i++) {
  if (i < currentHour)  {
    textAreaEl.addClass("past");
  } else if (i === currentHour) {
    textAreaEl.addClass("present");
  } else if (i > currentHour) {
    textAreaEl.addClass("future");
  }
};

//save buttons

$("#btn9").click (function() {
  var hourNine = document.querySelector("#nine").value;
  localStorage.setItem("hourNine", JSON.stringify(hourNine));  
});

$("#btn10").click (function() {
  var hourTen = document.querySelector("#ten").value;
  localStorage.setItem("hourTen", JSON.stringify(hourTen));  
});

$("#btn11").click (function() {
  var hourEleven = document.querySelector("#eleven").value;
  localStorage.setItem("hourEleven", JSON.stringify(hourEleven));  
});

$("#btn12").click (function() {
  var hourTwelve = document.querySelector("#twelve").value;
  localStorage.setItem("hourTwelve", JSON.stringify(hourTwelve));  
});


