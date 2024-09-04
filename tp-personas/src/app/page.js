import styles from "./styles/page.module.css";
import personas from "./Personas";
import Link from "next/link";

export default function Home() {
console.log(personas)
  return (
    <div className={styles.lista}>
        <h1>Listado de Personas</h1>
        <ul>
          {personas.map((persona, index) => (
            <>
              <li key={index}>{persona.nombre}, {persona.apellido}</li> <Link href='/persona'>Mas info</Link>
            </> 
          ))}
        </ul>
    </div>
  );
}
