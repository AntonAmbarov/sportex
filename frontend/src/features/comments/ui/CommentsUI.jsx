import React from 'react';
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';

const CustomNoComment = ({ text }) => (
    <div className='no-com'>{text}</div>
)

export function CommentsUI({
    comments,
    queryStatus,
    handleNewComment,
    handleReplyComment,
    noCommentText,
    currentUser
}) {

    if (queryStatus) return queryStatus;

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
            customNoComment={() => CustomNoComment(noCommentText)}
        >

        </CommentSection >
    )
}