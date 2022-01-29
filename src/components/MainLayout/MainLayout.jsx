import React, { useState } from 'react';
import classes from './MainLayout.module.css'
import { Layout, Button  } from 'antd';
import { Navbar } from '../Navbar/Navbar';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
  } from '@ant-design/icons';
import { Cards } from '../../pages/Cards/Cards';
const { Sider } = Layout;




export const MainLayout = () => {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapse = () => {
		setCollapsed(prev => !prev)
	};


	return (
		<Layout hasSider>
			<Sider
				className={classes.sidebar}
				trigger={null}
				collapsedWidth={0}
				collapsible
				collapsed={collapsed}
				width={300}
			>
				<Button 
				className={classes.menuBtn}
				type="text"
				size='large' 
				icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
				onClick={onCollapse}
				/>
				<Navbar />
			</Sider>
			<Layout className={classes.content} >
				<Cards/>			
			</Layout>
		</Layout>
	)
};
