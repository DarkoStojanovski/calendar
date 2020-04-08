$(document).ready(function () {
    var calendar = $(".calendar");

    var timeSections;
    var textSections;

    //-----------------------------------------------------------------
    
    function headerDate() {
        var date = moment().format('MMMM Do YYYY, h:mm a');
        $("#currentDay").text(date);
    }
    


    
    function createCalendar() {
        var start = 9;
        var end = 17;

        for (let i = start; i <= end; i++) {
            var timeBlock = $("<div>");
            timeBlock.addClass("row m-2 bg-light border border-dark rounded");
            
            var timeSection = $("<div>");
            timeSection.addClass("col-2 p-4 bg-light border-right border-dark timeSection");
            timeSection.text(moment(i, 'H').format('LT')); // i = 13 format = 1:00 PM
            
            var textSection = $("<div>");
            textSection.addClass("col-8 textSection");

            // do first
            //textSection.click();
            let input = $("<input>");
            input.addClass('form-control');
            input.attr("id", "hour-" +i);
            input.change(function(event){
                console.log(event)
            });
            textSection.append(input);





            var saveSection = $("<div>");
            saveSection.addClass("col-2 p-4 bg-primary text-light border-left border-dark");
            saveSection.attr("id", "hour-" +i);
            var saveButton = $("<i>");
            saveButton.addClass("fas fa-save fa-2x");
            saveSection.append(saveButton);

            
            // do second
            saveSection.on("click", function(){
                var timeSlote = $(this).attr("id");
                var siblingSlot = $(this).siblings(".textSection");
                var chiled = siblingSlot.children();
                var input = chiled.val();
                localStorage.setItem(timeSlote, input);
            }); 

            



            timeBlock.append(timeSection, textSection, saveSection);

            calendar.append(timeBlock);
        }
        timeSections = $(".timeSection");
        textSections = $(".textSection");
    }

    function addColor() {
        
        var hour = parseInt(moment().format("H"));

        for (let i = 0; i < timeSections.length; i++) {
            var time = $(timeSections[i]).text();
            var time24 = parseInt(moment(time, 'LT').format('H'));

            if ( hour < time24 ) {
                $(textSections[i]).addClass("future");
            }
            if ( hour > time24) {
                $(textSections[i]).addClass("past");
            }
            if ( hour === time24){
                $(textSections[i]).addClass("present");
            }
        }
    }
    
        function populate() {
            $('#hour- 9').val(localStorage.getItem("hour- 9"));
            $('#hour-10').val(localStorage.getItem("hour-10"));
            $('#hour-11').val(localStorage.getItem("hour-11"));
            $('#hour-12').val(localStorage.getItem("hour-12"));
            $('#hour-13').val(localStorage.getItem("hour-13"));
            $('#hour-14').val(localStorage.getItem("hour-14"));
            $('#hour-15').val(localStorage.getItem("hour-15"));
            $('#hour-16').val(localStorage.getItem("hour-16"));
            $('#hour-17').val(localStorage.getItem("hour-17"));
            
        }

    //-----------------------------------------------------------------

    function main() {
        // add the date the to the header
        headerDate();

        // create the calendar
        createCalendar();

        // add color to the calendar
        addColor();

        // render all saved events
        populate();
    }

    main();
});