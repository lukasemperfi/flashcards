import { Routes, Route, Link } from 'react-router-dom';

import React from 'react';
import { CardsSetIdPage } from '../pages/CardsSetIdPage/CardsSetIdPage';
import { NotFound } from '../pages/NotFound';
import { CardIdPage } from '../pages/CardIdPage/CardIdPage';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<WelcomePage />} />
				<Route path=':cardSetId' element={<CardsSetIdPage />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
};
