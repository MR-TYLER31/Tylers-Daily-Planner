$(document).ready(function() {

  // Create variables to hold the current date and hour
  var containerDiv = $('.container');
  var date = moment().format('dddd, MMMM Do YYYY')
  $('#current-date').text(date);
 var currentHour = parseInt(moment().format('H'))
console.log(currentHour)

// Create array of objects to hold the values for each our of the day
// milTime is the time in milatary time because moment.js displays military time
var timeValues = [
  {time: "9AM", milTime: 09},
  {time: "10AM", milTime: 10},
  {time: "11AM", milTime: 11},
  {time: "12AM", milTime: 12},
  {time: "1PM", milTime: 13},
  {time: "2PM", milTime: 14},
  {time: "3AM", milTime: 15},
  {time: "4PM", milTime: 16},
  {time: "5PM", milTime: 17}
]

// create a for loop to that iterates through the time values array and dynamically make a row for each hour.
for(var i = 0; i < timeValues.length; i++) {
  var timeRow = $('<div>');
  // create div to hold the hour content
  var hourDiv = $('<div>');
  // create div to hold the textarea content
  var textDiv = $('<div>');
  // create textarea element to type in task
  var textArea = $('<textarea>');
   // create div to hold the button
  var buttonDiv = $('<div>');
  // create the button to save for local storage
  var saveButton = $('<button>');

  // add classes to the created elements
  timeRow.addClass('row');
  hourDiv.addClass('col-md-1'); 
  hourDiv.html(`<p>${timeValues[i].time}</p>`) // Displays the hour
  textDiv.addClass('col-md-10');
  textDiv.attr('value', timeValues[i].milTime); // holds the time value in milary time because moment.js is military time
  buttonDiv.addClass('col-md-1');
  saveButton.addClass('saveBtn');
  saveButton.html(`<i class="fas fa-lock"></i>`)

  // append the row to the container div
  containerDiv.append(timeRow);
  // append the time, textareaDiv and button div to th row
  timeRow.append(hourDiv, textDiv, buttonDiv);
  // append the textarea element to the textareaDiv
  textDiv.append(textArea);
  // apppend the saveButton to the buttonDiv
  buttonDiv.append(saveButton);
}

// Loop through the textarea rows and change the color according to the current hour of the day
function colorDiv() {
  // 
  var rowColor = $(".col-md-10");
  for (let j = 0; j < rowColor.length; j++) {
    var currentDiv = $(rowColor[j]);
    if (currentDiv.attr("value") > currentHour) {
      currentDiv.addClass("future");
    } else if (currentDiv.attr("value") < currentHour) {
      currentDiv.addClass("past");
    } else {
      currentDiv.addClass("present");
    }
  }
}
// Call the colorDiv function
colorDiv();



});