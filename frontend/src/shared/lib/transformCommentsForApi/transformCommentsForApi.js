export function transformCommentsForApi(dataComment, currenUser, postId) {

    return {
        post: postId,
        author: currenUser.userId,
        author_name: currenUser.userName,
        author_email: currenUser.userEmail,
        content: dataComment.text,
        parent: dataComment.repliedToCommentId ? dataComment.repliedToCommentId : 0,
        date: new Date(),
        // status: 'approve',
    }
}