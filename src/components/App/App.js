import { useEffect, useState } from "react";
import { NewEventModal } from "../";
import { FlexCenter, FlexSpaceBetween, Title } from "../../shared/";
import { getEvents } from "../../crud";
import { DisplayEvent } from "../";

export function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents(setEvents);
  }, []);

  const refresh = () => {
    getEvents(setEvents);
  };

  return (
    <div className='App'>
      <FlexSpaceBetween>
        <Title>Events App</Title>
        <NewEventModal refresh={refresh} />
      </FlexSpaceBetween>
      <FlexCenter>
        {Object.values(events).map((event) => (
          <div key={event.id}>
            <DisplayEvent event={event} refresh={refresh} />
          </div>
        ))}
      </FlexCenter>
    </div>
  );
}
