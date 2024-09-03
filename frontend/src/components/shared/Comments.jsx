import React, { useEffect, useState } from "react";
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';
import { useGetCommentsQuery, usePostCommentMutation } from "../../services/api/apiComments";
import transformCommentsForSection from "../../utils/transformCommentsForSection";
import { useSelector } from "react-redux";
import transformCommentsForApi from "../../utils/transformCommentsForApi";


function Comments({ id }) {

    const [comments, setComments] = useState();

    const currentUser = useSelector(state => state.authorizedUser);

    console.log('currentUser: ', currentUser) //log

    const { data: rawData, error, isLoading } = useGetCommentsQuery(id);
    const [postComment] = usePostCommentMutation()

    useEffect(() => {
        if (rawData) {
            const data = transformCommentsForSection(rawData);
            setComments(data);
        }
    }, [rawData])

    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>);
    if (!rawData || rawData.length === 0) return (<div>Нет данных</div>);

    const handleNewComment = async (comment) => {
        console.log('new comment: ', comment) //log
        setComments(prevState => [...prevState, comment]);
        const data = transformCommentsForApi(comment, currentUser, id)
        try {
        const resp = await postComment(data).unwrap();
        console.log('post successful:', resp.data)
        }
        catch(error) {
            console.error(error)
        }
    }

    const handleReplyComment = async (comment) => {
        console.log('reply comment', comment) //log
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
            const resp = await postComment(data).unwrap();
            console.log('post successful:', resp.data)
            }
            catch(error) {
                console.error(error)
            }
    }

    return (
        <CommentSection
            currentUser={{
                currentUserId: currentUser.userId,
                currentUserImg: currentUser.avatar,
                currentUserProfile: null,
                currentUserFullName: currentUser.userName,
            }}
            logIn={{
                loginLink: null,
                signupLink: null,
            }}
            commentData={comments}
            onSubmitAction={handleNewComment}
            onReplyAction={handleReplyComment}
        >

        </CommentSection>
    )
}

export default Comments;