import { Routes, Route, Link } from 'react-router-dom';

import React from 'react';
import { CardSetIdPage } from '../pages/CardSetIdPage/CardSetIdPage';
import { NotFound } from '../pages/NotFound';
import { CardIdPage } from '../pages/CardIdPage/CardIdPage';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<WelcomePage />} />
				<Route path=':cardSetId' element={<CardSetIdPage />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
};
