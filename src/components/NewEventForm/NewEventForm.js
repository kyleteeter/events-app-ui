import { useState } from "react";
import { createEvent } from "../../crud";
import {
  Form,
  Input,
  SubmitButton,
  TextArea,
  Success,
  FlexDesktop,
} from "../../shared/";

export function NewEventForm() {
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    time: "",
    phone: "",
    email: "",
    company: "",
    description: "",
    color: "",
  });

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createEvent(newEvent);
    setIsSuccessfullySubmitted(true);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <label>
        Event Name
        <Input
          required
          type='text'
          name='name'
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        />
      </label>

      <FlexDesktop>
        <label>
          Event Date
          <Input
            type='date'
            name='date'
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          />
        </label>

        <label>
          Event Time
          <Input
            type='time'
            name='time'
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
          />
        </label>
      </FlexDesktop>

      <FlexDesktop>
        <label>
          Phone
          <Input
            type='tel'
            name='phone'
            value={newEvent.phone}
            onChange={(e) =>
              setNewEvent({ ...newEvent, phone: e.target.value })
            }
          />
        </label>

        <label>
          Email
          <Input
            type='email'
            name='email'
            value={newEvent.email}
            onChange={(e) =>
              setNewEvent({ ...newEvent, email: e.target.value })
            }
          />
        </label>
      </FlexDesktop>

      <label>
        Company
        <Input
          required
          type='text'
          name='company'
          value={newEvent.company}
          onChange={(e) =>
            setNewEvent({ ...newEvent, company: e.target.value })
          }
        />
      </label>

      <label>
        Description
        <TextArea
          required
          name='description'
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
      </label>

      <label>
        Color
        <Input
          type='color'
          name='color'
          value={newEvent.color}
          onChange={(e) => setNewEvent({ ...newEvent, color: e.target.value })}
        />
      </label>

      <SubmitButton type='submit' name='Sign Up' />

      {isSuccessfullySubmitted && (
        <Success>Thanks! Your event has been added.</Success>
      )}
    </Form>
  );
}
