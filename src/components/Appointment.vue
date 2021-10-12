<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../event-util";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },

  data: function() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        initialView: "dayGridMonth",
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
    };
  },

  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // update a property
    },

    handleDateSelect(selectInfo) {
      let title = prompt("Name of hairstylist");
      prompt("Which services do you want? (haircut/hairstyle)");
      let calendarApi = selectInfo.view.calendar;

      calendarApi.unselect(); // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
      }
    },

    handleEventClick(clickInfo) {
      if (
        confirm(
          `Are you sure you want to delete your appointment with ${clickInfo.event.title}?`,
        )
      ) {
        clickInfo.event.remove();
      }
    },

    handleEvents(events) {
      this.currentEvents = events;
    },
  },
};
</script>

<template>
  <div class="demo-app">
    <div class="demo-app-sidebar">
      <div class="demo-app-sidebar-section">
        <h1>
          ✂️ Click on the calendar and make an appointment to get your new
          haircut!
        </h1>
        <h1>Next appointments</h1>
      </div>
      <div class="demo-app-sidebar-section">
        <ul>
          <li class="event-card" v-for="event in currentEvents" :key="event.id">
            <b class="event-info"
              ><span>📅&nbsp;{{ event.startStr.split("T")[0] }}</span>
              <span>
                ⏰&nbsp;{{
                  new Date(event.startStr)
                    .toLocaleString("pt-BR")
                    .split(" ")[1]
                    .substring(0, 5)
                }}</span
              ></b
            >
            <p>{{ event.title }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="demo-app-main">
      <h1>📅 Calendar</h1>
      <FullCalendar class="demo-app-calendar" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          <b v-if="arg.timeText">{{ arg.timeText + "m" }}</b>
          <span>with {{ arg.event.title }}</span>
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<style lang="css">
h2 {
  margin: 0;
  font-size: 16px;
}

b {
  /* used for event dates/times */
  margin-right: 3px;
}

.event-card {
  background: #fff;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
}

.event-info {
  display: flex;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.demo-app {
  display: flex;
  min-height: 100%;
  font-size: 14px;
}

.demo-app-sidebar {
  width: 350px;
  line-height: 1.5;
  height: 100vh;
  background: rgba(225, 210, 250, 0.8);
}

.demo-app-sidebar-section {
  padding: 1em 2em 0 2em;
}

.demo-app-sidebar-section h1 {
  font-size: 22px;
  font-weight: bold;
  margin-top: 40px;
}

.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}

.demo-app-main h1 {
  color: #fff;
  margin-bottom: 30px;
}

.fc-event-main {
  background: #ff8811;
  border: 1px solid #ff8811;
}

.fc-timegrid-event.fc-v-event.fc-event.fc-event-draggable.fc-event-resizable.fc-event-start.fc-event-end.fc-event-future {
  background: #ff8811;
  border: 1px solid #ff8811;
}

.fc-daygrid-event.fc-daygrid-block-event.fc-h-event.fc-event.fc-event-draggable.fc-event-resizable.fc-event-start.fc-event-end.fc-event-future {
  background: #ff8811;
  border: 1px solid #ff8811;
}

.fc-daygrid-event-harness {
  background: #ff8811;
  margin-bottom: 5px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
}

.fc {
  /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
  background: #fff;
  border-radius: 15px;
}

.fc .fc-toolbar.fc-header-toolbar {
  background: #fff;
  border-radius: 5px;
  border-radius: 15px;
  padding: 15px;
}

.fc .fc-button-group > .fc-button {
  background: #fff;
  color: #ff8811;
  border: none;
}

.fc .fc-button-group > .fc-button:active {
  border: none;
  background: #ff8811;
  color: #fff;
}

.fc .fc-button-group > .fc-button {
  border: none;
  border-radius: 15px;
}
.fc .fc-button-group > .fc-button:focus,
.fc .fc-button-group > .fc-button:active,
.fc .fc-button-group > .fc-button.fc-button-active {
  border: none;
  background: #ff8811;
  color: #fff;
}

.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
  border: none;
  background: #ff8811;
}

.fc .fc-scrollgrid-liquid {
  border-radius: 15px;
}

.fc .fc-scrollgrid-section-liquid > td {
  border-radius: 15px;
}

@media (max-width: 910px) {
  .fc-toolbar-title {
    font-size: 16px !important;
  }
  .demo-app-sidebar-section h1 {
    font-size: 18px;
  }
}

@media (max-width: 630px) {
  .demo-app {
    flex-direction: column;
  }

  .demo-app-sidebar {
    width: 100%;
    height: fit-content;
    padding-bottom: 30px;
  }
}

@media (max-width: 410px) {
  .demo-app-main {
    padding: 2em 1em;
  }
}
</style>
