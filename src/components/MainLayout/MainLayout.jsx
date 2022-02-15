import React, { useState, useEffect } from 'react'

import classes from './MainLayout.module.css'

import { Navbar } from '../Navbar/Navbar'
import { CardsSetEmpty } from '../CardsSetEmpty/CardsSetEmpty'

import { Layout } from 'antd'

import { useSelector } from 'react-redux'
import { selectFirstCardsSetId} from '../../store/selectors'

import { Outlet, useMatch, useNavigate } from 'react-router-dom'

import SimpleBar from 'simplebar-react'

const { Sider } = Layout

export const MainLayout = () => {
	const navigate = useNavigate()
	const match = useMatch('/')

	const [collapsed, setCollapsed] = useState(false)
	const firstCardsSetId = useSelector(selectFirstCardsSetId)

	useEffect(() => {
		if (match && firstCardsSetId) {
			navigate(`/${firstCardsSetId}`, {replace: true})
		}
	}, []) 

	const description = <span>Нажмите 'Создать', <br /> чтобы создать набор карточек</span>

	const onCollapse = () => {
		setCollapsed(prev => !prev)
	};

	return (
		<Layout hasSider>
			<Sider
				className={classes.sidebar}
				collapsedWidth={60}
				collapsible
				collapsed={collapsed}
				onCollapse={onCollapse}
				width={300}
			>
				<Navbar collapsed={collapsed} />
			</Sider>
			<Layout className={classes.content} >
				<SimpleBar style={{ height: '100vh' }}>
					<div className={classes.wrapper}>
						{!firstCardsSetId && <CardsSetEmpty description={description}/>}
							<Outlet />
					</div>
				</SimpleBar>
			</Layout>
		</Layout>
	)
}
