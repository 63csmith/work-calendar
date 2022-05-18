var today = now();
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
