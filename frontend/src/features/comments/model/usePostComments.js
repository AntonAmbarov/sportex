import { usePostCommentMutation } from '../api/endpoints';
import { transformCommentsForApi } from 'shared/lib/transformCommentsForApi';


export function usePostComments(currentUser, id) {
    const [postComment] = usePostCommentMutation();


    const sendComment = async (comment) => {
        console.log(currentUser);

        const data = transformCommentsForApi(comment, currentUser, id)
        return await postComment(data).unwrap();
    }

    return sendComment;
}