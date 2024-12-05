import React from 'react';
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectCurrentUser } from 'shared/model/currentUser';
import { useComments } from '../model/useComments';

export function Comments({ id }) {

    const currentUser = useSelector(selectCurrentUser);
    const { t } = useTranslation();

    const {
        comments,
        queryStatus,
        handleNewComment,
        handleReplyComment
    } = useComments(id, currentUser);

    if (queryStatus) return queryStatus;

    const customNoComment = () => (
        <div className='no-com'>{t('comments.empty')}</div>
    )

    return (
        <CommentSection
            key={currentUser.userId || 'guest'}
            currentUser={currentUser.userId && {
                currentUserId: currentUser.userId,
                currentUserImg: currentUser.avatar,
                currentUserProfile: null,
                currentUserFullName: currentUser.userName,
            }}
            logIn={{
                loginLink: '#',
                signupLink: '#',
            }}
            commentData={comments}
            onSubmitAction={handleNewComment}
            onReplyAction={handleReplyComment}
            submitBtnStyle={{
                backgroundColor: 'var(--bs-primary)',
                color: 'var(--bs-white)',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
            }}
            customNoComment={() => customNoComment()}
        >

        </CommentSection >
    )
}