import { useEffect, useState } from "react";
import { NewEventModal } from "../Modals";
import { DisplayEvents } from "../DisplayEvents";
import { FlexCenter, FlexSpaceBetween, Title } from "../../styles";
import "../../styles/global-styles.css";
import { getEvents } from "../../crud";

export function App() {
  const [events, setEvents] = useState([]);
  const [triggerRefresh, setTriggerRefresh] = useState(false);

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

  return (
    <div className='App'>
      <FlexSpaceBetween>
        <Title>RainFocus Events App</Title>
        <NewEventModal handleRefresh={handleRefresh} />
      </FlexSpaceBetween>
      <FlexCenter>
        {Object.values(events).map((event) => (
          <div key={event.id}>
            <DisplayEvents event={event} handleRefresh={handleRefresh} />
          </div>
        ))}
      </FlexCenter>
    </div>
  );
}
