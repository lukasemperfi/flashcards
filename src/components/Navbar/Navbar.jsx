import React from 'react';
import { Input, Menu } from 'antd';
import classes from './Navbar.module.css'

export const Navbar = () => {

	const onSearch = value => console.log(value);

	return (
		<>
			<div
			 className={classes.search}
			 >
				<Input 
				placeholder="input search text" 
				onChange={onSearch} 
				/>
			</div>

			<Menu
			className={classes.menu}
				theme="dark"
				defaultSelectedKeys={['1']}
				mode="inline"
			>
				{Array(30).fill(1).map((el, i) => {
					return (
						<Menu.Item key={i}>
							nav more text bla test yoxu {i}
						</Menu.Item>
					)
				})}
			</Menu>
		</>
	);
};
