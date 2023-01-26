import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import MainContainer from '../components/MainContainer'
import { NextPage } from 'next'
import Banner from '../components/Banner'
import requests from '../utils/requests'
import { IBanner } from '../typings'

const inter = Inter({ subsets: ['latin'] })
interface Props {
	fetchImage: IBanner;
}

export default function Home({fetchImage}: Props) {
  return (
		<MainContainer keywords={'hello'} title='Главная страница'>
			<Banner fetchImage={fetchImage} />
		</MainContainer>
	);
}
export const getServerSideProps = async () => {
	const [fetchImage] = await Promise.all([
		fetch(requests.fetchImage).then(res => res.json()),
	]);
	return {
		props: {
			fetchImage,
		},
	};
};
