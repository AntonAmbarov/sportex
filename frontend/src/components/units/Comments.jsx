import React, { useEffect, useState } from "react";
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';
import { useGetCommentsQuery, usePostCommentMutation } from "../../services/api/apiComments";
import transformCommentsForSection from "../../utils/transformCommentsForSection";
import { useSelector } from "react-redux";
import transformCommentsForApi from "../../utils/transformCommentsForApi";
// import AuthButtons from '../shared/AuthButtons';
// import parse from 'html-react-parser';


function Comments({ id }) {

    const [comments, setComments] = useState();

    const currentUser = useSelector(state => state.authorizedUser);

    const { data: rawData, error, isLoading } = useGetCommentsQuery(id);
    const [postComment] = usePostCommentMutation()

    useEffect(() => {
        console.log('currentUser: ', currentUser)
        if (rawData) {
            const data = transformCommentsForSection(rawData);
            setComments(data);
        }
    }, [rawData])

    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>);
    if (!rawData || rawData.length === 0) return (<div>Нет данных</div>);

    const handleNewComment = async (comment) => {
        setComments(prevState => [...prevState, comment]);
        const data = transformCommentsForApi(comment, currentUser, id)
        try {
            await postComment(data).unwrap();
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleReplyComment = async (comment) => {
        setComments(prevState => {
            return prevState.map(prevComment => {
                if (prevComment.userId === comment.parentOfRepliedCommentId) {
                    return {
                        ...prevComment,
                        replies: [...prevComment.replies, comment]
                    }
                }
                return prevComment;
            })
        })
        const data = transformCommentsForApi(comment, currentUser, id)
        try {
            await postComment(data).unwrap();
        }
        catch (error) {
            console.error(error)
        }
    }

    const customNoComment = () => (
        <div className='no-com'>Sheessh! Zero Comments posted here!</div>
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

export default Comments;