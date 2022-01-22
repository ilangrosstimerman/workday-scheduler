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

 //add saved button

function saveButton(rowId) {
    let eventEl = $("#" + rowId + "textarea");
    let eventText = eventEl.val();
    //convert into a p element
    let savedEventEl = $("<p>").text(eventText);
    let updatedEvent = eventEl.replaceWith(savedEventEl);
    let updatedVal = updatedEvent.val();
    if (updatedVal) {
        eventObjHandler(updatedVal, rowID);
        //for loop to check for match in array
        for (i = 0; i < savedEvents.length; i++) {
            if (savedEvents[i].rowId === rowId) {
                savedEvents.splice(i, 1);
            }
        }
    }

    savedEvents.push(events);
    saveEvent();
}

//define eventObjHandler

function eventObjHandler(updatedVal, rowId) {
    events = {
        eventVal: updatedVal,
        rowId: rowId
    };
}
