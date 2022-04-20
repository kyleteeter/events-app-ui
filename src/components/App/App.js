import { useEffect, useState } from "react";
import { NewEventModal } from "../Modals";
import { DisplayEvents } from "../DisplayEvents";
import {
  FlexCenter,
  FlexSpaceBetween,
  PrimaryButton,
  Title,
} from "../../styles";
import "../../styles/global-styles.css";
import { deleteEvent, getEvents } from "../../crud";

export function App() {
  const [events, setEvents] = useState([]);
  const [triggerRefresh, setTriggerRefresh] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState([]);

  useEffect(() => {
    getEvents(setEvents);
  }, [triggerRefresh]);

  const handleRefresh = () => {
    if (triggerRefresh) {
      setTriggerRefresh(false);
    } else {
      setTriggerRefresh(true);
    }
  };

  function addToDeleteQueue(e) {
    e.preventDefault();
    console.log("selected", selectedToDelete);
    if(selectedToDelete.indexOf(e.target.id)) {
      setSelectedToDelete((oldArray) => [...oldArray, e.target.id]);
    }
  }

  function executeDeleteMultiple(e) {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      selectedToDelete.forEach(function (eventId) {
        deleteEvent(eventId);
      });
    }
    handleRefresh();
  }

  return (
    <div className='App'>
      <FlexSpaceBetween>
        <Title>RainFocus Events App</Title>
        <NewEventModal handleRefresh={handleRefresh} />
        <PrimaryButton
          onClick={(e) => {
            executeDeleteMultiple(e);
          }}
        >
          Delete {selectedToDelete.length} Events
        </PrimaryButton>
      </FlexSpaceBetween>
      <FlexCenter>
        {Object.values(events).map((event) => (
          <div key={event.id}>
            <DisplayEvents
              event={event}
              handleRefresh={handleRefresh}
              deleteHandler={addToDeleteQueue}
            />
          </div>
        ))}
      </FlexCenter>
    </div>
  );
}
