import React from 'react';
import { Menu } from 'antd';
import { DatabaseOutlined } from '@ant-design/icons';
import classes from './CardsSetMenu.module.css'
import { Link } from 'react-router-dom';

export const CardsSetMenu = ({ data }) => {
	return (
		<Menu
			className={classes.menu}
			theme="dark"
			mode="inline"
		>
			{data && data.map((el, i) => {
				return (
					<Menu.Item key={el.id} icon={<DatabaseOutlined />}>
						<Link to={`/${el.id}`}>{el.title}</Link>
					</Menu.Item>
				)
			})}

			{/* {data && data.map((el, i) => {
				return (
					<Menu.Item key={i} icon={<DatabaseOutlined />}>
						nav more text bla test yoxu {i}
					</Menu.Item>
				)
			})} */}
		</Menu>
	);
};
