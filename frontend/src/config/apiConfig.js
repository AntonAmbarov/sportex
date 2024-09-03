const baseUrl = 'https://api.sportex.pro';

const paths = {
    getTeams: () => ('/wp-json/wp/v2/teams?_fields=id,title,acf.logo'),
    getTeam: (slug) => (`/wp-json/wp/v2/teams?slug=${slug}&_fields=id,title,acf`),
    getImg: (id) => (`/wp-json/wp/v2/media/${id}?_fields=media_details`),
    getDefaultImg: () => (`${baseUrl}/wp-content/uploads/2024/08/333333textprekrasnayakartinkafontkelson.png`),
    getPlayers: () => ('/wp-json/wp/v2/players?_fields=id,title,acf.logo'),
    getPlayer: (slug) => (`/wp-json/wp/v2/players?slug=${slug}&_fields=id,title,acf`),
    register: () => ('/wp-json/custom/v1/register'),
    auth: () => ('/wp-json/jwt-auth/v1/token'),
    refreshToken: () => ('/wp-json/jwt-auth/v1/token/refresh'),
    getComments: (id) => (`/wp-json/wp/v2/comments?post=${id}`),
    postComment: () => ('/wp-json/wp/v2/comments'),
    avatar: (name) => (`https://ui-avatars.com/api/?name=${name}&background=random&rounded=true`),
}

export { paths };
export default baseUrl;