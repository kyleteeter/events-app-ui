import { useState } from "react";
import Modal from "react-modal";
import { SecondaryButton, FlexSpaceBetween } from "../../shared/";
import { Close } from "../../shared/styles";


export function DisplayEventModal({ event }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <SecondaryButton onClick={openModal}>Full Event Details</SecondaryButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Update Event Info Form'
      >
        <FlexSpaceBetween>
          <h2>{event.name} Details</h2>
          <Close onClick={closeModal}>X</Close>
        </FlexSpaceBetween>
        <img
          src={event.image ? event.image : "https://placeimg.com/320/240/tech"}
          alt={event.name}
        />
        <p>
          <b>Date: </b>
          {event.date ? event.date : "No set date"}
        </p>
        <p>
          <b>Time: </b>
          {event.time ? event.time : "No set time"}
        </p>
        <p>
          <b>Company: </b>
          {event.company ? event.company : "No company assigned"}
        </p>
        <p>
          <b>Email: </b>
          {event.email ? event.email : "No email address on file"}
        </p>
        <p>
          <b>Phone: </b>
          {event.phone ? event.phone : "No phone number on file"}
        </p>
        <p>
          <b>Address: </b>
          {event.address ? event.address : "No address on file"}
        </p>
        <p>
          <b>Description: </b>
          {event.description ? event.description : "No description"}
        </p>
        <p>
          <b>Color: </b>
          {event.color ? event.color : "No color"}
        </p>
      </Modal>
    </div>
  );
}
