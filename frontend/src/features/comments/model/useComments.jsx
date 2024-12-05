import { useState, useEffect } from "react";
import { useGetCommentsQuery, usePostCommentMutation } from '../api/endpoints';
import { transformCommentsForSection } from 'shared/lib/transformCommentsForSection';
import { transformCommentsForApi } from 'shared/lib/transformCommentsForApi';
import { useQueryStatus } from 'shared/lib/useQueryStatus';


export function useComments(id, currentUser) {

    const [comments, setComments] = useState();
    const commentsQuery = useGetCommentsQuery(id); //получаем комментарии для записи по id
    const [postComment] = usePostCommentMutation();
    const { data: rawData } = commentsQuery;

    useEffect(() => {
        if (rawData) {
            const data = transformCommentsForSection(rawData); //трансформируем комментарии в понятный формат для рендера
            setComments(data);
        }
    }, [rawData])

    const queryStatus = useQueryStatus(commentsQuery); // получаем isLoading, error или null если data получена

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

    return {
        comments,
        queryStatus,
        handleNewComment,
        handleReplyComment
    }
}