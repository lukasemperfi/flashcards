import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { CardsSetIdPage } from '../pages/CardsSetIdPage/CardsSetIdPage';
import { NotFound } from '../pages/NotFound/NotFound';
import { CardIdPage } from '../pages/CardIdPage/CardIdPage';
import { MainLayout } from '../components/MainLayout/MainLayout';
import { Quiz } from '../components/Quiz/Quiz';


export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path=':cardSetId' element={<CardsSetIdPage />} />
				<Route path=':cardSetId/:cardId' element={<CardIdPage />} />			
			</Route>
			<Route path='/quiz' element={<Quiz />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};
