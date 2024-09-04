import Link from 'next/link';
import styles from '../styles/sidebar.module.css';


const Sidebar = () => {
    return (
    <div className={styles.sidebar}>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
            <li><Link href="/estadisticas">Estadisticas</Link></li>
        </ul>
    </div>
);
};

export default Sidebar;