import { useState } from "react";
import Modal from "react-modal";
import { PrimaryButton, FlexSpaceBetween } from "../../shared/";
import { Close } from "../../shared/styles";
import { UpdateEventForm } from "../";


export function UpdateEventModal({ event, refresh }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    refresh();
    setIsOpen(false);
  }

  return (
    <div>
      <PrimaryButton onClick={openModal}>Update Event Info</PrimaryButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Update Event Info Form'
      >
        <FlexSpaceBetween>
          <h2>Update {event.name}</h2>
          <Close onClick={closeModal}>X</Close>
        </FlexSpaceBetween>
        <UpdateEventForm event={event} />
      </Modal>
    </div>
  );
}