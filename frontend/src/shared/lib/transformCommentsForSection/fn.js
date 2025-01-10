import { paths } from '../../api/config';

export function transformCommentsForSection(data) {
    const memo = {};

    const buildTree = (comments, parentId = 0) => {

        if (memo[parentId]) return memo[parentId];

        const result = comments
            .filter(comm => comm.parent === parentId)
            .map(comm => ({
                userId: comm.author.toString(),
                comId: comm.id.toString(),
                fullName: comm.author_name,
                userProfile: null,
                text: comm.content.rendered,
                avatarUrl: paths.avatar(comm.author_name),
                replies: buildTree(comments, comm.id),
            }));

        memo[parentId] = result;

        return result;
    }

    return buildTree(data);
}