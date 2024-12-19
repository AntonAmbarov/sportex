import { useMemo } from 'react';
import { useGetCommentsQuery } from '../api/endpoints';
import { transformCommentsForSection } from 'shared/lib/transformCommentsForSection';
import { useQueryStatus } from 'shared/lib/useQueryStatus';


export function useGetComments(id) {

    const commentsQuery = useGetCommentsQuery(id); //получаем комментарии для записи по id
    const { data } = commentsQuery;
    const queryStatus = useQueryStatus(commentsQuery); // получаем isLoading, error или null если data получена

    const comments = useMemo(() => (data ? transformCommentsForSection(data) : []), [data]);

    return useMemo(() => ({
        comments,
        queryStatus,
    }), [comments, queryStatus]);
}