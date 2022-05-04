import { useState } from "react";
import Modal from "react-modal";
import { SecondaryButton, FlexSpaceBetween } from "../../shared/";
import { Close } from "../../shared/styles";
import { NewEventForm } from "../";


export function NewEventModal({ refresh }) {
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
      <SecondaryButton onClick={openModal}>Add a New Event</SecondaryButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Add a New Event Form'
      >
        <FlexSpaceBetween>
          <h2>Add a New Event</h2>
          <Close onClick={closeModal}>X</Close>
        </FlexSpaceBetween>
        <NewEventForm />
      </Modal>
    </div>
  );
}