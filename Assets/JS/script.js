$(document).ready(function () {
    var calendar = $(".calendar");

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
            timeSection.addClass("col-2 p-4 bg-light border-right border-dark");
            timeSection.text(moment(i, 'H').format('LT'));
            
            var textSection = $("<div>");
            textSection.addClass("col-8 bg-light");

            var saveSection = $("<div>");
            saveSection.addClass("col-2 p-4 bg-primary text-light border-left border-dark");
            var saveButton = $("<i>");
            saveButton.addClass("fas fa-save fa-2x");
            saveSection.append(saveButton);

            timeBlock.append(timeSection, textSection, saveSection);

            calendar.append(timeBlock);
        }
    
    }
    
    //-----------------------------------------------------------------

    function main() {
        // add the date the to the header
        headerDate();

        // create the calendar
        createCalendar();

        // add color to the calendar

        // load all saved events
    }

    main();
});