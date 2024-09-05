"use client";
import styles from "./styles/page.module.css";
import personas from "./Personas";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            {persona.nombre}, {persona.apellido}
            <Button variant="primary" onClick={() => handleShow(persona)}>
              Más Info
            </Button>
          </li>
        ))}
      </ul>

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
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

