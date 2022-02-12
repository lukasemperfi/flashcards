import React, { useState } from 'react'
import classes from './MainLayout.module.css'
import { Layout } from 'antd'
import { Navbar } from '../Navbar/Navbar'
import SimpleBar from 'simplebar-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectFirstCardsSetId, selectLastCardsSetId } from '../../store/selectors'
import { useEffect } from 'react'


const { Sider } = Layout

export const MainLayout = () => {
	const [collapsed, setCollapsed] = useState(false)
	const firstCardsSetId = useSelector(selectFirstCardsSetId)
	const lastCardsSetId = useSelector(selectLastCardsSetId)
	
	const navigate = useNavigate()

	// console.log(firstCardsSetId)

	const onCollapse = () => {
		setCollapsed(prev => !prev)
	};

	useEffect(() => {
		if (firstCardsSetId !== undefined) {
			console.log('first')
			navigate(`/${firstCardsSetId}`)	
		} else {
			console.log('welcom')
			navigate('/welcome')
		}

	}, [])

	useEffect(() => {
		if (lastCardsSetId !== undefined) {
			console.log('last')
			navigate(`/${lastCardsSetId}`)
		} 

	}, [lastCardsSetId])

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
				<SimpleBar style={{ maxHeight: '100vh' }}>
					<div className={classes.wrapper}>
						<Outlet />
					</div>
				</SimpleBar>
			</Layout>
		</Layout>
	)
}
