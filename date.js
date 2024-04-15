document.addEventListener('DOMContentLoaded', function() {
    const displayDateTime = document.getElementById('displayDateTime');
    const currentDateTimeBtn = document.getElementById('currentDateTimeBtn');
    const yesterdayDateTimeBtn = document.getElementById('yesterdayDateTimeBtn');
    const tomorrowDateTimeBtn = document.getElementById('tomorrowDateTimeBtn');

    // Function to display current date and time
    function showCurrentDateTime() {
        const currentDate = new Date();
        const currentDateString = currentDate.toLocaleDateString();
        const currentTimeString = currentDate.toLocaleTimeString();
        displayDateTime.textContent = `Current Date and Time: ${currentDateString} ${currentTimeString}`;
    }

    // Function to display yesterday's date
    function showYesterdayDate() {
        const currentDate = new Date();
        const yesterdayDate = new Date(currentDate);
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        const yesterdayDateString = yesterdayDate.toLocaleDateString();
        displayDateTime.textContent = `Yesterday's Date: ${yesterdayDateString}`;
    }

    // Function to display tomorrow's date
    function showTomorrowDate() {
        const currentDate = new Date();
        const tomorrowDate = new Date(currentDate);
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        const tomorrowDateString = tomorrowDate.toLocaleDateString();
        displayDateTime.textContent = `Tomorrow's Date: ${tomorrowDateString}`;
    }

    // Event listeners for button clicks
    currentDateTimeBtn.addEventListener('click', showCurrentDateTime);
    yesterdayDateTimeBtn.addEventListener('click', showYesterdayDate);
    tomorrowDateTimeBtn.addEventListener('click', showTomorrowDate);
});
