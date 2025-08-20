// Import React Bootstrap components
import { Modal, Button, Form } from "react-bootstrap";
// Import React hooks and types
import { useState, type FC, useEffect } from "react";
// Import types
import type { Car } from "../../types";

// Define the props interface for this component
interface EditCarModalProps {
  show: boolean;
  onHide: () => void;
  onSubmit: (carData: Car) => void;
  car: Car | null;
}

// Define the EditCarModal component
const EditCarModal: FC<EditCarModalProps> = ({
  show,
  onHide,
  onSubmit,
  car,
}) => {
  // State for form data
  const [formData, setFormData] = useState<Car>({
    id: "",
    year: "",
    make: "",
    model: "",
    description: "",
    imageUrl: "",
    favorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  // Update form data when car prop changes
  useEffect(() => {
    if (car) {
      setFormData(car);
    }
  }, [car]);

  // Handler function to handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  // Handler function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the updatedAt timestamp
    const updatedCar = {
      ...formData,
      updatedAt: new Date().toISOString(),
    };
    onSubmit(updatedCar);
  };

  // Handler function to handle modal close
  const handleClose = () => {
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Car</Modal.Title>
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

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              name="favorite"
              checked={formData.favorite}
              onChange={handleInputChange}
              label="Mark as favorite"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Update Car
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditCarModal;
