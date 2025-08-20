// Import React Bootstrap components
import { Modal, Button } from "react-bootstrap";
// Import React types
import { type FC } from "react";
// Import types
import type { Car } from "../../types";

// Define the props interface for this component
interface DeleteModalProps {
  show: boolean;
  onHide: () => void;
  onConfirm: () => void;
  car: Car | null;
}

// Define the DeleteModal component
const DeleteModal: FC<DeleteModalProps> = ({
  show,
  onHide,
  onConfirm,
  car,
}) => {
  // Handler function to handle confirmation
  const handleConfirm = () => {
    onConfirm();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {car ? (
          <p>
            Are you sure you want to delete the{" "}
            <strong>
              {car.year} {car.make} {car.model}
            </strong>
            ? This action cannot be undone.
          </p>
        ) : (
          <p>
            Are you sure you want to delete this car? This action cannot be
            undone.
          </p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
