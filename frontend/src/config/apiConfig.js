const baseUrl = 'https://api.sportex.pro';
const wpBasePath = '/wp-json/wp/v2';
const customBasePath = '/wp-json/custom/v1';
const jwtBasePath = '/wp-json/jwt-auth/v1';

const paths = {
    getTeams: () => (`${wpBasePath}/teams?_fields=id,title,acf.logo`),
    getTeam: (slug) => (`${wpBasePath}/teams?slug=${slug}&_fields=id,title,acf`),
    getImg: (id) => (`${wpBasePath}/media/${id}?_fields=media_details`),
    getDefaultImg: () => (`${baseUrl}/wp-content/uploads/2024/08/333333textprekrasnayakartinkafontkelson.png`),
    getPlayers: () => (`${wpBasePath}/players?_fields=id,title,acf.logo`),
    getPlayer: (slug) => (`${wpBasePath}/players?slug=${slug}&_fields=id,title,acf`),
    register: () => (`${customBasePath}/register`),
    auth: () => (`${jwtBasePath}/token`),
    refreshToken: () => (`${jwtBasePath}/token/refresh`),
    getComments: (id) => (`${wpBasePath}/comments?post=${id}`),
    postComment: () => (`${wpBasePath}/comments`),
    avatar: (name) => (`https://ui-avatars.com/api/?name=${name}&background=random&rounded=true`),
};

export { paths };
export default baseUrl;
