import React from 'react';
import { Form, Input, Button, Row, Col, Space } from 'antd';
const { TextArea } = Input;

export const CardForm = () => {
	const isCreateForm = false

	return (

		<form >
			<Space direction="vertical" style={{ width: '100%' }}>
				<label >
					Вопрос:
					<TextArea
						// placeholder="Арбуз это ягода или фрукт?"
						allowClear
						// rows={1}
						autoSize={{ minRows: 1 }}
					/>
				</label>
				<label>
					Ответ:
					<TextArea
						// placeholder="Арбуз – это ягодовидный плод, и он подразделяется на тыквину, при этом он еще и фрукт. Ботаники называют плод ягодой, если у него сочная мякоть, много семян и тонкая кожура, арбуз не подходит под это описание, и не может быть ягодой. У него действительно сочный околоплодник, но семян существенно больше, а кожура намного толще. Плод арбуза по ботанической классификации относят к семейству тыквенных, в котором выделяют род Арбуз и 7 видов этого травянистого растения."
						allowClear
						// rows={1}
						autoSize={{ minRows: 10 }}
					/>
				</label>
				<Row>
					<Col span={24} style={{ textAlign: 'right' }}>
						<Space>
							<Button type="primary">
								{isCreateForm ? 'Добавить карточку' : 'Сохранить изменения'}
							</Button>
							<Button>
								Отменить
							</Button>
						</Space>
					</Col>
				</Row>
			</Space>
		</form>


	);
};
