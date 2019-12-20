$(document).ready(function() {

  // Create variables to hold the current date and hour
  var containerDiv = $('.container');
  var date = moment().format('dddd, MMMM Do YYYY')
  $('#current-date').text(date);
 var currentHour = parseInt(moment().format('H'))
console.log(currentHour)

// Create array of objects to hold the values for each our of the day
var timeValues = [
  {time: "9AM"},
  {time: "10AM"},
  {time: "11AM"},
  {time: "12AM"},
  {time: "1PM"},
  {time: "2PM"},
  {time: "3AM"},
  {time: "4PM"},
  {time: "5PM"}
]

// create a for loop to that iterates through the time values array and dynamically make a row for each hour.
for(var i = 0; i < timeValues.length; i++) {
  var timeRow = $('<div>');
  // create div to hold the hour content
  var hourDiv = $('<div>');
  // create div to hold the textarea content
  var textDiv = $('<div>');
  // create textarea element to type in task
  var textAreaDiv = $('<textarea>');
   // create div to hold the button
  var buttonDiv = $('<div>');
  // create the button to save for local storage
  var saveButton = $('<button>');

  // add classes to the created elements
  timeRow.addClass('row');
  hourDiv.addClass('col-md-1');
  hourDiv.text(`<p>${timeValues[i].time}</p>`)

}



});