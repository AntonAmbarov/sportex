import { useSelector } from 'react-redux';
import { selectStatusAuth } from '../../model/ui'

export function useAuth() {
    return useSelector(selectStatusAuth);
}