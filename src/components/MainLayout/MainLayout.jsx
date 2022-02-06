import React, { useState } from 'react';
import classes from './MainLayout.module.css'
import { Layout, Button } from 'antd';
import { Navbar } from '../Navbar/Navbar';
import SimpleBar from 'simplebar-react';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
const { Sider } = Layout;




export const MainLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapse = (cb) => {
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
				<SimpleBar style={{ maxHeight: '100vh' }}>
					<div className={classes.wrapper}>
						<Outlet/> 
					</div>
				</SimpleBar>
			</Layout>
		</Layout>
	)
};
