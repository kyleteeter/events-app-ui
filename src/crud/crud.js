import { sortByCompany } from "../utils";
const endpoint = "https://rf-json-server.herokuapp.com/events-5/";
const headers = { "Content-Type": "application/json" };

export function getEvents(setEvents) {
  fetch(endpoint, { headers })
    .then((res) => {
      if (!res.ok) {
        alert("HTTP request unsuccessful");
      }
      return res;
    })
    .then((res) => res.json())
    .then((data) => setEvents(data.sort(sortByCompany)))
    .catch((error) => {
      alert(error);
    });
}

export function deleteEvent(id) {
  // const id = e.target.getAttribute("id");
  fetch(endpoint + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .catch((error) => {
      console.log(error);
    });
}

export function updateEvent(updatedEvent) {
  const requestOptions = {
    method: "PUT",
    headers,
    body: JSON.stringify({
      id: updatedEvent.id,
      name: updatedEvent.name,
      date: updatedEvent.date,
      time: updatedEvent.time,
      phone: updatedEvent.phone,
      email: updatedEvent.email,
      company: updatedEvent.company,
      description: updatedEvent.description,
      color: updatedEvent.color,
    }),
  };
  fetch(endpoint + updatedEvent.id, requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}

export function createEvent(newEvent) {
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: newEvent.name,
      date: newEvent.date,
      time: newEvent.time,
      phone: newEvent.phone,
      email: newEvent.email,
      company: newEvent.company,
      description: newEvent.description,
      color: newEvent.color,
    }),
  };
  fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
}
