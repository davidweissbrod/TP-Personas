"use client";
import styles from "./styles/page.module.css";
import personas from "./Personas";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [show, setShow] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(null);

  const handleClose = () => {
    setShow(false);
    setSelectedPersona(null);
  };

  const handleShow = (persona) => {
    setSelectedPersona(persona);
    setShow(true);
  };

  return (
    <div className={styles.lista}>
      <h1>Listado de Personas</h1>
      <div className={styles.cardContainer}>
        {personas.map((persona, index) => (
          <Card key={index} className={styles.card}>
            <Card.Body>
              <Card.Title>{persona.nombre} {persona.apellido}</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {persona.email}<br />
                <strong>Edad:</strong> {persona.edad}
              </Card.Text>
              <Button variant="primary" onClick={() => handleShow(persona)}>
                Más Info
              </Button>
            </Card.Body>
          </Card>
        ))}
        
      </div>

      {selectedPersona && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Información</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Nombre:</strong> {selectedPersona.nombre}</p>
            <p><strong>Apellido:</strong> {selectedPersona.apellido}</p>
            <p><strong>Email:</strong> {selectedPersona.email}</p>
            <p><strong>Edad:</strong> {selectedPersona.edad}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

