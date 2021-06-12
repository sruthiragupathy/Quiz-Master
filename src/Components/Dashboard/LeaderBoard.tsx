import { useEffect } from 'react';
import { useQuiz } from '../../context/quizContext';
import { getLeaderBoard } from '../services/service';
import StarIcon from '@material-ui/icons/Star';
import { getTotalScore } from '../../utils/utils';
import { Header } from './Header';

export const LeaderBoard = () => {
	const {
		quizState: { currentUserScoreBoard, leaderBoard },
		quizDispatch,
	} = useQuiz();
	useEffect(() => {
		(async function () {
			await getLeaderBoard(quizDispatch);
		})();
	}, [currentUserScoreBoard]);
	return (
		<>
			<Header />
			<div className='flex justify-center items-center flex-col mx-4'>
				<div className='font-extrabold text-4xl my-6'>LeaderBoard</div>
				{leaderBoard.map((user) => {
					return (
						<div
							key={user._id}
							className='flex w-full m-2 md:w-9/12 items-center justify-between m-4 shadow-md rounded-lg p-4'>
							<div className='img-logo uppercase'>
								{user.userId.firstName[0]}
								{user.userId.lastName[0]}
							</div>
							<div className='flex flex-col items-start justify-start w-1/2 ml-10'>
								<div className='capitalize font-semibold text-lg'>
									{user.userId.firstName} {user.userId.lastName}
								</div>
								<div>@{user.userId.userName}</div>
							</div>
							<div>
								<div className='capitalize font-semibold text-lg'>
									{user.quizId.genre}
								</div>
								<div className='flex w-20 justify-between items-center text-purple-600'>
									<StarIcon color='inherit' />

									<div className='flex text-lg font-semibold text-gray-600 dark:text-gray-50'>
										{user.score} / {getTotalScore(user.quizId)}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};
