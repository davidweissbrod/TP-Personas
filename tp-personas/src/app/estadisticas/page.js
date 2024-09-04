import styles from '../styles/estadisticas.module.css'
import personas from '../Personas';

const Estadisticas = () => {
  const mayoresDe35 = personas.filter(persona => persona.edad > 35);
  const edades = personas.map(persona => persona.edad);
  const maxEdad = Math.max(...edades);
  const minEdad = Math.min(...edades);
  const personasMayorEdad = personas.filter(persona => persona.edad === maxEdad);
  const personasMenorEdad = personas.filter(persona => persona.edad === minEdad);
    return(
        <div className = {styles.datos}>
            <h2>Datos de las Personas</h2>
            <p><strong>Mayores de 35 años:</strong> {mayoresDe35}</p>
            <p><strong>Persona de mayor edad: {personasMayorEdad}</strong></p>
            <p><strong>Persona de menor edad:{personasMenorEdad}</strong></p>
        </div>
    );
}

export default Estadisticas;