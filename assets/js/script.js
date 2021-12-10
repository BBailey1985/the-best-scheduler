
var currentDayEl = $("#currentDay");
var currentDay = moment().format("LL"); 
var textAreaEl = $("textarea");
var currentHour = moment().format("H");

//Display current Date on page
currentDayEl.text(currentDay);


//add color classes

if (9 < currentHour) {
  $("#nine").addClass("past");
} else if (9 == currentHour) {
  $("#nine").addClass("present");
} else if (i > currentHour) {
  $("#nine").addClass("future");
}

if (10 < currentHour) {
  $("#ten").addClass("past");
} else if (10 == currentHour) {
  $("#ten").addClass("present");
} else if (10 > currentHour) {
  $("#ten").addClass("future");
}

if (11 < currentHour) {
  $("#eleven").addClass("past");
} else if (11 == currentHour) {
  $("#eleven").addClass("present");
} else if (11 > currentHour) {
  $("#eleven").addClass("future");
}

if (12 < currentHour) {
  $("#twelve").addClass("past");
} else if (12 == currentHour) {
  $("#twelve").addClass("present");
} else if (12 > currentHour) {
  $("#twelve").addClass("future");
}

if (13 < currentHour) {
  $("#thirteen").addClass("past");
} else if (13 == currentHour) {
  $("#thirteen").addClass("present");
} else if (13 > currentHour) {
  $("#thirteen").addClass("future");
}

if (14 < currentHour) {
  $("#fourteen").addClass("past");
} else if (14 == currentHour) {
  $("#fourteen").addClass("present");
} else if (14 > currentHour) {
  $("#fourteen").addClass("future");
}

if (15 < currentHour) {
  $("#fifteen").addClass("past");
} else if (15 == currentHour) {
  $("#fifteen").addClass("present");
} else if (15 > currentHour) {
  $("#fifteen").addClass("future");
}

if (16 < currentHour) {
  $("#sixteen").addClass("past");
} else if (16 == currentHour) {
  $("#sixteen").addClass("present");
} else if (16 > currentHour) {
  $("#sixteen").addClass("future");
}

if (17 < currentHour) {
  $("#seventeen").addClass("past");
} else if (17 == currentHour) {
  $("#seventeen").addClass("present");
} else if (17 > currentHour) {
  $("#seventeen").addClass("future");
}

//save buttons

$("#btn9").click (function() {
  var hourNine = $("#nine").val();
  localStorage.setItem("hourNine");  
});

$("#btn10").click (function() {
  var hourTen = $("#ten").val();
  localStorage.setItem("hourTen");  
});

$("#btn11").click (function() {
  var hourEleven = $("#eleven").val();
  localStorage.setItem("hourEleven");  
});

$("#btn12").click (function() {
  var hourTwelve = $("#twelve").val();
  localStorage.setItem("hourTwelve");  
});

$("#btn13").click (function() {
  var hourThirteen = $("#thirteen").val();
  localStorage.setItem("hourThirteen");  
});

$("#btn14").click (function() {
  var hourFourteen = $("#fourteen").val();
  localStorage.setItem("hourFourteen");  
});

$("#btn15").click (function() {
  var hourFifteen = $("#fifteen").val();
  localStorage.setItem("hourFifteen");  
});

$("#btn16").click (function() {
  var hourSixteen = $("#sixteen").val();
  localStorage.setItem("hourSixteen");  
});

$("#btn17").click (function() {
  var hourSeventeen = $("#seventeen").val();
  localStorage.setItem("hourSeventeen");  
});

