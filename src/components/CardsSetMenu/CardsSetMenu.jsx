import React from 'react';

import { Menu } from 'antd';
import { DatabaseOutlined } from '@ant-design/icons';

import { Link, useLocation } from 'react-router-dom';

export const CardsSetMenu = ({ data }) => {
	const location = useLocation()

	return (
		<Menu
			theme="dark"
			mode="inline"
			selectedKeys={[location.pathname]}
		>
			{data && data.map((el, i) => {
				return (<Menu.Item
					key={`/${el.id}`}
					icon={<DatabaseOutlined />}
				>
					<Link to={`/${el.id}`}>{el.title}</Link>
				</Menu.Item>
				)
			})}
		</Menu>
	);
};
