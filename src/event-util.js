let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Daniela",
    start: todayStr + "T19:00:00",
  },
  {
    id: createEventId(),
    title: "Marcos",
    start: todayStr + "T12:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
