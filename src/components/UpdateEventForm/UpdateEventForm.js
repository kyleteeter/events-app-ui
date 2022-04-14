import { useState } from "react";
import { updateEvent } from "../../crud";
import {
  Form,
  Input,
  SubmitButton,
  TextArea,
  Success,
  FlexDesktop,
} from "../../styles";

export function UpdateEventForm({ event }) {
  const [updatedEvent, setUpdatedEvent] = useState({
    id: event.id,
    name: event.name,
    date: event.date,
    time: event.time,
    phone: event.phone,
    email: event.email,
    company: event.company,
    description: event.description,
    color: event.color,
  });

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    updateEvent(updatedEvent);
    setIsSuccessfullySubmitted(true);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <label>
        Event Name
        <Input
          type='text'
          name='name'
          value={updatedEvent.name}
          onChange={(e) =>
            setUpdatedEvent({ ...updatedEvent, name: e.target.value })
          }
        />
      </label>

      <FlexDesktop>
        <label>
          Event Date
          <Input
            type='date'
            name='date'
            value={updatedEvent.date}
            onChange={(e) =>
              setUpdatedEvent({ ...updatedEvent, date: e.target.value })
            }
          />
        </label>

        <label>
          Event Time
          <Input
            type='time'
            name='time'
            value={updatedEvent.time}
            onChange={(e) =>
              setUpdatedEvent({ ...updatedEvent, time: e.target.value })
            }
          />
        </label>
      </FlexDesktop>

      <FlexDesktop>
        <label>
          Phone
          <Input
            type='tel'
            name='phone'
            value={updatedEvent.phone}
            onChange={(e) =>
              setUpdatedEvent({ ...updatedEvent, phone: e.target.value })
            }
          />
        </label>

        <label>
          Email
          <Input
            type='email'
            name='email'
            value={updatedEvent.email}
            onChange={(e) =>
              setUpdatedEvent({ ...updatedEvent, email: e.target.value })
            }
          />
        </label>
      </FlexDesktop>

      <label>
        Company
        <Input
          type='text'
          name='company'
          value={updatedEvent.company}
          onChange={(e) =>
            setUpdatedEvent({ ...updatedEvent, company: e.target.value })
          }
        />
      </label>

      <label>
        Description:
        <TextArea
          name='description'
          value={updatedEvent.description}
          onChange={(e) =>
            setUpdatedEvent({ ...updatedEvent, description: e.target.value })
          }
        />
      </label>

      <label>
        Color:
        <Input
          type='color'
          name='color'
          value={updatedEvent.color}
          onChange={(e) =>
            setUpdatedEvent({ ...updatedEvent, color: e.target.value })
          }
        />
      </label>

      <SubmitButton type='submit' name='Sign Up' />

      {isSuccessfullySubmitted && (
        <Success>Thanks! Your event has been updated.</Success>
      )}
    </Form>
  );
}
