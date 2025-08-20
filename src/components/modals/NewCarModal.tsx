// Import React Bootstrap components
import { Modal, Button, Form } from "react-bootstrap";
// Import React hooks and types
import { useState, type FC } from "react";
// Import types
import type { NewCar } from "../../types";

// Define the props interface for this component
interface NewCarModalProps {
  show: boolean;
  onHide: () => void;
  onSubmit: (carData: NewCar) => void;
}

// Define the NewCarModal component
const NewCarModal: FC<NewCarModalProps> = ({ show, onHide, onSubmit }) => {
  // State for form data
  const [formData, setFormData] = useState<NewCar>({
    year: "",
    make: "",
    model: "",
    description: "",
    imageUrl: "",
    favorite: false,
    createdAt: "",
    updatedAt: "",
  });

  // Handler function to handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handler function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form data after submission
    setFormData({
      year: "",
      make: "",
      model: "",
      description: "",
      imageUrl: "",
      favorite: false,
      createdAt: "",
      updatedAt: "",
    });
  };

  // Handler function to handle modal close
  const handleClose = () => {
    // Reset form data when closing
    setFormData({
      year: "",
      make: "",
      model: "",
      description: "",
      imageUrl: "",
      favorite: false,
      createdAt: "",
      updatedAt: "",
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="text"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              placeholder="Enter year (e.g., 2024)"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Make</Form.Label>
            <Form.Control
              type="text"
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              placeholder="Enter make (e.g., Ferrari)"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Model</Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              placeholder="Enter model (e.g., 812GTS)"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter car description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="Enter image URL"
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Car
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewCarModal;
