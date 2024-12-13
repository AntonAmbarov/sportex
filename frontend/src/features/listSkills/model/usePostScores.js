import { usePostScoresTeamMutation, usePostScoresPlayerMutation } from 'entities/score';

export function usePostScores(type) {
    const [postScoresPlayer] = usePostScoresPlayerMutation();
    const [postScoresTeam] = usePostScoresTeamMutation();

    const actions = {
        player: postScoresPlayer,
        team: postScoresTeam
    }

    if (!actions[type]) {
        throw new Error(`Invalid type "${type}". Expected "player" or "team".`);
    }

    return actions[type];
}