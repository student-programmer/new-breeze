import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from '../styles/index.module.css';
interface Props {
    children: any,
    keywords: any,
    title: string
}
const MainContainer = ({ children, keywords, title}: Props) => {
    return (
        <>
            <Head>
                <meta ></meta>
                <title>{title}</title>
            </Head>
            <div className={styles.navbar}>
                <Link href='/' className={styles.link}>
                    Главная
                </Link>
                <Link href='/task' className={styles.link}>
                    Форма
                </Link>
            </div>
            <div>{children}</div>
        </>
    );
};

export default MainContainer;
