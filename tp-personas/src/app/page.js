import styles from "./styles/page.module.css";
import Personas from "./Personas";

export default function Home() {
  console.log(Personas)
  return (
    <>
        <h1>Listado de Personas</h1>
        <ul>
          {Personas.map((persona, index) => (
            <li key={index}>{persona.nombre}, {persona.apellido}</li>
          ))}
        </ul>
    </>
  );
}
