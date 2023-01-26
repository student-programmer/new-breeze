import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/index.module.css';
function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`${isScrolled ? styles.nav_color : styles.navbar }`} >
            <div className={styles.navbar_item}>
                <Link href='/' className={styles.link}>
                    Главная
                </Link>
                <Link href='/task' className={styles.link}>
                    Форма
                </Link>
                <Link href='/connection' className={styles.link}>
                    Заявка
                </Link>
            </div>
        </header>
    );
}

export default Header;
