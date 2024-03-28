// Function returns the exact time and date in two variables using this format:
// Time = hh:mm:ss, Date = dd/mm/aa 

function getDateTime(){
    var currentDate = new Date(); // Get current date
    var time = currentDate.toLocaleTimeString();
    var date = currentDate.toLocaleDateString();

    return {date, time};
}

module.exports = getDateTime;

// Uncomment this three lines below to call the function and print an example of it's return.
// var a = getDateTime()
// console.log(a.time)
// console.log(a.date)