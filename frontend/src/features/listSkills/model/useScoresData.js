import { useGetScoresAvgQuery } from 'entities/score';
import { useQueryStatus } from 'shared/lib/useQueryStatus';

export function useScoresData(type, postId, sport) {
    const scoresAvgQuery = useGetScoresAvgQuery({ type: type, postId: postId, sport: sport });
    const scoresAvgStatus = useQueryStatus(scoresAvgQuery);

    return {
        scores: scoresAvgQuery.data || [],
        status: scoresAvgStatus,
    }
}