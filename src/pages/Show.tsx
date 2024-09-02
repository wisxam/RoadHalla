import { useNavigate } from 'react-router-dom';

const Show = () => {
	const navigate = useNavigate();
	return (
		<div>
			<button
				onClick={() => {
					navigate('/');
				}}>
				asdasd
			</button>
		</div>
	);
};

export default Show;
