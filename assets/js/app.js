let m = moment()

// console.log(`toString() => ${m.toString()}`);


var currentDate = $('#current-date');



function date() {
    currentDate.text(m.format("dddd, MMMM Do YYYY"));
}

date()