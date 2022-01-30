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

	const onCollapse = (cb) => {
		setCollapsed(prev => !prev)
	};


	return (
		<Layout hasSider>
			<Sider
				className={classes.sidebar}
				// trigger={null}
				collapsedWidth={60}
				collapsible
				collapsed={collapsed}
				onCollapse={onCollapse}
				width={300}
			>
				{/* <Button 
				className={classes.menuBtn}
				type="text"
				size='large' 
				icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
				onClick={onCollapse}
				/> */}
				<Navbar collapsed={collapsed}  />
			</Sider>
			<Layout className={classes.content} >
				<div className={classes.wrapper}>
						<Cards/>
				</div>		  
			</Layout>
		</Layout>
	)
};
