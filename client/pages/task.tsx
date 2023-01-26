import Link from 'next/link';
import MainContainer from '../components/MainContainer';
import requests from '../utils/requests';
import { ITodos } from '../typings';
interface Props {
	fetchingTodos: ITodos[];
}
export default function Task({ fetchingTodos }: Props) {
	return (
		<MainContainer keywords={'hello'} title='Обработка заявок'>
			<div>Обработка заявок</div>
			{fetchingTodos.map(data => (
				<p key={data.id}>{data.title}</p>
			))}
		</MainContainer>
	);
}

export const getServerSideProps = async () => {
	const [fetchingTodos] = await Promise.all([
		fetch(requests.fetchingTodos).then(res => res.json()),
	]);
	return {
		props: {
			fetchingTodos,
		},
	};
};
