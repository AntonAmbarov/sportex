import React, { useEffect, useState } from "react";
import { CommentSection } from 'react-comments-section';
import 'react-comments-section/dist/index.css';
import { useGetCommentsQuery } from "../../services/api/apiComments";
import transformCommentsForSection from "../../utils/transformCommentsForSection";
import { useSelector } from "react-redux";


function Comments({ id }) {

    const [comments, setComments] = useState();

    const currentUser = useSelector(state => state.authorizedUser);

    const { data: rawData, error, isLoading } = useGetCommentsQuery(id);

    useEffect(() => {
        if (rawData) {
            const data = transformCommentsForSection(rawData);
            setComments(data);
        }
    }, [rawData])

    if (isLoading) return (<div>Загрузка</div>);
    if (error) return (<div>Ошибка</div>);
    if (!rawData || rawData.length === 0) return (<div>Нет данных</div>);

    const handleNewComment = (comment) => {
        console.log(comment)
        setComments(prevState => [...prevState, comment]);
    }

    const handleReplyComment = (comment) => {
        console.log(comment)
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
    }

    const handlePostComment = (comment) => {
        console.log(comment)
    }

    return (
        <CommentSection
            currentUser={{
                currentUserId: currentUser.userName,
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
            currentData={handlePostComment}
        >

        </CommentSection>
    )
}

export default Comments;