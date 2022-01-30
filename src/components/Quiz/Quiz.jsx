import React, { useState } from 'react';
import classes from './Quiz.module.css';
import { Layout, Progress, Statistic, Typography, Button, Input, Space, Collapse } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const { Title, Paragraph, Text, Link } = Typography;
export const Quiz = () => {
	const [isCollapseOpen, setIsCollapseOpen] = useState(false)

	console.log(isCollapseOpen);

	const collapseHeader = <Title level={4} style={{margin: 0}}>{isCollapseOpen ? 'СКРЫТЬ ОТВЕТ' : 'ПОКАЗАТЬ ОТВЕТ'}</Title>


	return (
		<section className={classes.quiz}>
			<div className={classes.container}>
				<div className={classes.card}>
					<div className={classes.cardHeader}>
						<div className={classes.cardTitle}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit?
						</div>
						<div className={classes.cardBtns}>
							<Space>
								<Button type="primary" icon={<CheckOutlined />}>Знаю</Button>
								<Button type="primary" icon={<CloseOutlined />} >Не знаю</Button>
							</Space>
						</div>
					</div>
					<div className={classes.cardBody}>
						<Collapse bordered={false} ghost={true} onChange={() => setIsCollapseOpen(!isCollapseOpen)}>
							<Panel header={collapseHeader} key="1" className={classes.panel} showArrow={false}>
						
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Totam ex consectetur, blanditiis hic dignissimos, nesciunt
										eveniet repellat distinctio laborum fugiat rerum mollitia
										debitis deserunt minus est, ullam eaque animi accusamus.
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Totam ex consectetur, blanditiis hic dignissimos, nesciunt
										eveniet repellat distinctio laborum fugiat rerum mollitia
										debitis deserunt minus est, ullam eaque animi accusamus.
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Totam ex consectetur, blanditiis hic dignissimos, nesciunt
										eveniet repellat distinctio laborum fugiat rerum mollitia
										debitis deserunt minus est, ullam eaque animi accusamus.
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Totam ex consectetur, blanditiis hic dignissimos, nesciunt
										eveniet repellat distinctio laborum fugiat rerum mollitia
										debitis deserunt minus est, ullam eaque animi accusamus.
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Totam ex consectetur, blanditiis hic dignissimos, nesciunt
										eveniet repellat distinctio laborum fugiat rerum mollitia
										debitis deserunt minus est, ullam eaque animi accusamus.
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Totam ex consectetur, blanditiis hic dignissimos, nesciunt
										eveniet repellat distinctio laborum fugiat rerum mollitia
										debitis deserunt minus est, ullam eaque animi accusamus.
									</p>
								
							</Panel>
						</Collapse>
					</div>
				</div>
			</div>
		</section>
	);
};
