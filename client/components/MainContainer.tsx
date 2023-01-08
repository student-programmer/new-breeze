import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/index.module.css';
import Header from './Header';
interface Props {
	children: any;
	keywords: any;
	title: string;
}
const MainContainer = ({ children, keywords, title }: Props) => {
	return (
		<>
			<Head>
				<meta></meta>
				<title>{title}</title>
			</Head>
			<Header />
			<div>{children}</div>
		</>
	);
};

export default MainContainer;
