var times = [
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
]






var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));

function hour(){
    var currentTime = moment().hour();
    console.log("hour is: " + currentTime);

    $(".time-block").each(function (){
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
        console.log(hourBlock, currentTime);

        if (hourBlock < currentTime){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } else if (hourBlock === currentTime){
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
}
hour();


//localStorage
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));