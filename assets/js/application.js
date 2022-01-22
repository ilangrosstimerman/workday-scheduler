//define initials

let savedEvents = [];
let events = {};

//create events

function createEvent(rowId) {
    let textAreaEl = $("<textarea>");
    textAreaEl.val("your event");
    $("#" + rowId).append(textAreaEl);
}
