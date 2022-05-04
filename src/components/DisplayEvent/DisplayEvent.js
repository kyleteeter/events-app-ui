import { DisplayEventModal, UpdateEventModal } from "..";
import { deleteEvent } from "../../crud";
import { CardContent, CardImage, Event, Flex, Icon } from "../../shared/";
import { trashIcon } from "../../assets";

export function DisplayEvent({ event, refresh }) {
  const excerpt = event.description.substring(0, 110);

  function deleteHandler(e) {
    e.preventDefault();
    if (window.confirm("Are you sure you wish to delete this item?")) {
      deleteEvent(e, refresh);
    }
  }

  return (
    <Event>
      <CardImage
        src={event.image ? event.image : "https://placeimg.com/320/240/tech"}
        alt={event.name}
      />
      <Icon
        id={event.id}
        src={trashIcon}
        alt='Trash'
        onClick={(e) => {
          deleteHandler(e);
        }}
      />
      <CardContent>
        <h2>{event.name}</h2>
        <h3>{event.company}</h3>
        <p>{excerpt}</p>
      </CardContent>
      <Flex>
        <DisplayEventModal event={event} />
        <UpdateEventModal event={event} refresh={refresh} />
      </Flex>
    </Event>
  );
}
