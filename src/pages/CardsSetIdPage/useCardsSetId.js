import { useSelector } from 'react-redux';
import { selectFirstCardsSetId, selectSecondCardsSetId } from '../../store/selectors';

export const useFirstCardsSetIdAfterDelete = (deleteId) => {
	const firstId = useSelector(selectFirstCardsSetId)
	const secondId = useSelector(selectSecondCardsSetId)

	if (firstId === deleteId) { return secondId || '' }
	return firstId || ''

}
