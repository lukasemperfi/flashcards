import { Routes, Route, Link } from 'react-router-dom';

import React from 'react';
import { CardsSetIdPage } from '../pages/CardsSetIdPage/CardsSetIdPage';
import { NotFound } from '../pages/NotFound';
import { CardIdPage } from '../pages/CardIdPage/CardIdPage';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage';
import { Quiz } from '../components/Quiz/Quiz';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='/welcome' element={<WelcomePage />} />
				<Route path=':cardSetId' element={<CardsSetIdPage />} />
				<Route path=':cardSetId/:cardId' element={<CardIdPage />} />
				<Route path='*' element={<NotFound />} />
			</Route>
			<Route path='/quiz' element={<Quiz />} />
		</Routes>
	);
};
