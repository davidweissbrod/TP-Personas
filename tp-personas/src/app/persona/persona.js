import { useRouter } from 'next/router';
import personas from '../Personas';
import styles from '../styles/persona.module.css'

export default function Persona() {
  const router = useRouter();
  const { id } = router.query;
  const persona = personas.find(p => p.id === parseInt(id, 10));

  return (
    <div className={styles.persona}>
      <h1>Información de la Persona</h1>
      <p><strong>Nombre:</strong> {persona.nombre}</p>
      <p><strong>Apellido:</strong> {persona.apellido}</p>
      <p><strong>Email:</strong> {persona.email}</p>
      <p><strong>Edad:</strong> {persona.edad}</p>
    </div>
  );
}
