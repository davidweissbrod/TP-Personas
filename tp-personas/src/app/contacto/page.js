import styles from '../styles/contacto.module.css'

const Contacto = () => {
    return(
        <form className={styles.formContainer}>
      <div className="form-group mb-3">
        <label className={styles.formLabel}>Nombre</label>
        <input type="text" className={styles.formControl} placeholder="Ingrese su nombre" />
      </div>
      <br/>
      <div className="form-group mb-3">
        <label className={styles.formLabel}>Apellido</label>
        <input type="text" className={styles.formControl} placeholder="Ingrese su apellido" />
      </div>
      <br/>
      <div className="form-group mb-3">
        <label className={styles.formLabel}>Edad</label>
        <input type="number" className={styles.formControl} placeholder="Ingrese su edad" />
      </div>
      <br/>
      <div className="form-group mb-3">
        <label className={styles.formLabel}>Email</label>
        <input type="email" className={styles.formControl} placeholder="Ingrese un email" />
      </div>
      <br/>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
    );
}
export default Contacto;