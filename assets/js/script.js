//variables
var currentDayEl = $("#currentDay");
var currentDay = moment().format("LL"); 
var textAreaEl = $("textarea");
var currentHour = moment().format("H");

//Display current Date on page
currentDayEl.text(currentDay);


//add color to textarea

$("textarea").each(function() {
  var hour = parseInt($(this).attr("id"));
  currentHour = parseInt(currentHour);
  
  if (hour < currentHour) {
    $(this).addClass("past")
  } else if (hour === currentHour) {
    $(this).addClass("present") 
  } else {
    $(this).addClass("future")
    }
});

//save to localstorage
$(".saveBtn").on("click", function() {
  var hourlyData  = $(this).siblings("textarea").val();
  var hourName = $(this).siblings("textarea").attr("id");
  localStorage.setItem(hourName, hourlyData)
});

// get from localstorage
for (var i=9; i < 17; i++) {
  $("#" + i).val(localStorage.getItem(i));
};
