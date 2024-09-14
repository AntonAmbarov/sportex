function transformScoresForApi({
    values,
    // participantId,
    teamId,
    userId,
    // role,
    // sport
}) {
    return {
        "user_id": userId,
        // "participant_id": participantId,
        "team_id": teamId,
        // "role": role,
        "ratings": values,
        "sport": 'hockey',
    }
}

export default transformScoresForApi;