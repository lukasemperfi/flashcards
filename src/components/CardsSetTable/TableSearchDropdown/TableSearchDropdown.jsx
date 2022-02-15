import React, { useEffect, useState, useRef } from 'react'
import classes from './TableSearchDropdown.module.css'

import {Space, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';



export const TableSearchDropdown = ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
	const [searchText, setSearchText] = useState('')
	const searchRef = useRef(null)

	useEffect(() => {
			setTimeout(() => searchRef.current.select(), 100);
	}, [])

	const handleSearch = () => {
		confirm()
		setSearchText(selectedKeys[0])
	};

	const handleReset = () => {
		clearFilters()
		setSearchText('')
	};

	const handleFilter = () => {
		confirm({ closeDropdown: false })
		setSearchText(selectedKeys[0])
	};

	const onChange = (event) => {
		const value = event.target.value
		setSelectedKeys( value ? [value] : [])
		setSearchText(value)
	}

	return (
		<div className={classes.dropdown}>
			<Input
				ref={searchRef}
				value={searchText}
				placeholder={'Search'}
				onChange={onChange}
				onPressEnter={handleSearch}
				className={classes.dropdownInput}
			/>
			<Space >
				<Button
					type="primary"
					onClick={handleSearch}
					icon={<SearchOutlined />}
					size="small"
					className={classes.searchBtn}
				>
					Поиск
				</Button>
				<Button
					onClick={handleReset}
					size="small"
					className={classes.resetBtn}
				>
					Сбросить
				</Button>
				<Button
					type="link"
					size="small"
					onClick={handleFilter}
					className={classes.filterBtn}
				>
					Фильтр
				</Button>
			</Space>
		</div>
	)
}
