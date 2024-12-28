import React, { useEffect, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectCurrentUser } from 'shared/model/currentUser';
import { useGetComments } from '../model/useGetComments';
import { usePostComments } from '../model/usePostComments';
import { CommentsUI } from './CommentsUI';

const commentsReducer = (state, action) => {
    switch (action.type) {
        case 'setComments':
            return action.payload;
        case 'newComment':
            return [...state, action.payload];
        case 'replyComment':
            return state.map(comment =>
                comment.userId === action.payload.parentOfRepliedCommentId
                    ? { ...comment, replies: [...(comment.replies || []), action.payload] }
                    : comment
            )
        default:
            return state;
    }
}

export function Comments({ id }) {
    const [comments, dispatch] = useReducer(commentsReducer, []);

    const currentUser = useSelector(selectCurrentUser);
    const { t } = useTranslation();

    const { comments: commentsById, queryStatus } = useGetComments(id);
    const sendComment = usePostComments(currentUser, id);

    const handleComment = async (type, comment) => {
        dispatch({ type: type, payload: comment })

        try {
            await sendComment(comment);
        }
        catch (err) {
            console.error('Ошибка при отправке формы: ', err);
        }
    }

    const handleNewComment = (comment) => handleComment('newComment', comment);

    const handleReplyComment = (comment) => handleComment('replyComment', comment);

    useEffect(() => {
        if (comments.length === 0 && commentsById?.length > 0) {
            dispatch({ type: 'setComments', payload: commentsById });
        }
    }, [commentsById]);

    return (
        <CommentsUI
            comments={comments || []}
            queryStatus={queryStatus}
            handleNewComment={handleNewComment}
            handleReplyComment={handleReplyComment}
            noCommentText={t('comments.empty')}
            currentUser={currentUser}
        />
    )
}