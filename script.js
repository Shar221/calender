// Sample events with updated data
const events = [
  {
    title: "Tech Expo",
    date: new Date(2025, 6, 2, 9, 0),
    location: "Expo Hall 1",
    attendees: new Set(["James", "Linda", "Rahul"]),
    organizer: "Martha"
  },
  {
    title: "AI Workshop",
    date: new Date(2025, 6, 5, 14, 0),
    location: "Lab 3B",
    attendees: new Set(["Sofia", "Aiden", "Zuri", "Leo"]),
    organizer: "Victor"
  },
  {
    title: "Developer Meetup",
    date: new Date(2025, 6, 8, 18, 30),
    location: "Co-working Lounge",
    attendees: new Set(["Noah", "Amara"]),
    organizer: "Kenny"
  }
];

// Add an attendee to a specific event
function addAttendee(eventTitle, attendeeName) {
  const event = events.find(e => e.title === eventTitle);
  if (event) {
    event.attendees.add(attendeeName);
    console.log(`${attendeeName} has been added to "${eventTitle}".`);
  } else {
    console.log(`Event "${eventTitle}" not found.`);
  }
}

// WeakMap to dynamically store organizer info
const organizersMap = new WeakMap();
organizersMap.set(events[0], "Monica");
organizersMap.set(events[1], "Brian");
organizersMap.set(events[2], "Irene");

// Display events happening in the next 7 days
function showUpcomingEvents() {
  const now = new Date();
  const oneWeekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  const upcoming = events.filter(e => e.date >= now && e.date <= oneWeekFromNow);

  if (upcoming.length === 0) {
    console.log("No events scheduled in the next 7 days.");
  } else {
    console.log("Events in the next 7 days:");
    upcoming.forEach(e => {
      console.log(`- ${e.title} on ${e.date.toLocaleString()} at ${e.location}`);
    });
  }
}

// Convert event data to a formatted JSON string
function eventsToJSON() {
  const eventObjects = events.map(e => ({
    title: e.title,
    date: e.date.toISOString(),
    location: e.location,
    attendees: Array.from(e.attendees)
  }));

  return JSON.stringify(eventObjects, null, 2);
}

// Log event titles and their dates
function logEventSummaries() {
  console.log("Event Titles and Dates:");
  events.forEach(e => {
    console.log(`- "${e.title}" scheduled for ${e.date.toLocaleString()}`);
  });
}

// Delete an event by title
function deleteEvent(title) {
  const index = events.findIndex(e => e.title === title);
  if (index !== -1) {
    events.splice(index, 1);
    console.log(`Event "${title}" has been deleted.`);
  } else {
    console.log(`Event "${title}" not found.`);
  }
}

// Find the event with the most attendees
function findEventWithMostAttendees() {
  const mostPopular = events.reduce((max, curr) =>
    curr.attendees.size > max.attendees.size ? curr : max
  );

  console.log(`Most attended event: "${mostPopular.title}"`);
  console.log(`Attendees: ${Array.from(mostPopular.attendees).join(", ")}`);
}

