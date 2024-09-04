import styles from '../styles/estadisticas.module.css'
import personas from '../Personas';

const Estadisticas = () => {
  const mayoresDe35 = personas.filter(persona => persona.edad > 35);
  const edades = personas.map(persona => persona.edad);
  let maxEdad = -Infinity
  let minEdad = Infinity
  for (const edad of edades) {
    if (edad > maxEdad) {
      maxEdad = edad;
    }
    if (edad < minEdad) {
      minEdad = edad;
    }
  }
  const personasMayorEdad = personas.filter(persona => persona.edad === maxEdad);
  const personasMenorEdad = personas.filter(persona => persona.edad === minEdad);

  return (
    <div className={styles.datos}>
      <h2>Datos de las Personas</h2>
      <p>Mayores de 35 años:</p>
      <ul>
        {mayoresDe35.map(persona => (
          <li key={persona.id}>
            {persona.nombre} {persona.apellido} ({persona.edad} años)
          </li>
        ))}
      </ul>
      <p>Persona de mayor edad:</p>
      <ul>
        {personasMayorEdad.map(persona => (
          <li key={persona.id}>
            {persona.nombre} {persona.apellido} ({persona.edad} años)
          </li>
        ))}
      </ul>
      <p>Persona de menor edad:</p>
      <ul>
        {personasMenorEdad.map(persona => (
          <li key={persona.id}>
            {persona.nombre} {persona.apellido} ({persona.edad} años)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Estadisticas;
