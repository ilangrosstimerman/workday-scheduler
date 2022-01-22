//define initials

let savedEvents = [];
let events = {};

//create events

function createEvent(rowId) {
    let textAreaEl = $("<textarea>");
    textAreaEl.val("your event");
    $("#" + rowId).append(textAreaEl);
}

//edit existing events

function editEvent(rowId) {
    let eventEl = $("#" + rowId).children();
    let eventText = eventEl.text();
    let newEventEl = $("<textarea>").text(eventText);
    eventEl.replaceWith(newEventEl);
    newEventEl.focus();
}

//save information to local

function saveEvent() {
    localStorage.setItem("events", JSON.stringify(savedEvents));
}

//load information from local

function loadEvents() {
    savedEvents = JSON.parse(localStorage.getItem("events"));
    if (!savedEvents) {
        savedEvents = [];
    }
}
$.each(savedEvents, function(index) {
    let eventText = savedEvents[index].eventVal;
    let rowId = savedEvents[index].rowId;
    let eventEl = $("<p>").text(eventText);
    $(`.event#${rowId}`).append(eventEl);
 });
