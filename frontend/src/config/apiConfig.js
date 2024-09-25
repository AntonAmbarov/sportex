const baseUrl = 'https://api.sportex.pro';
const wpBasePath = '/wp-json/wp/v2';
const customBasePath = '/wp-json/custom/v1';
const jwtBasePath = '/wp-json/jwt-auth/v1';

const paths = {
    getTeams: () => (`${wpBasePath}/teams?_fields=id,slug,title,acf.logo,acf.sport,acf.league`),
    getTeam: (slug) => (`${wpBasePath}/teams?slug=${slug}&_fields=id,title,acf`),
    getImg: (id) => (`${wpBasePath}/media/${id}?_fields=media_details`),
    getImgs: () => (`${wpBasePath}/media/?_fields=id,alt_text,media_details`),
    getDefaultImg: () => (`${baseUrl}/wp-content/uploads/2024/08/333333textprekrasnayakartinkafontkelson.png`),
    getPlayers: () => (`${wpBasePath}/players?_fields=id,slug,acf.name,acf.last_name,acf.role,acf.sport,acf.photo`),
    getPlayer: (slug) => (`${wpBasePath}/players?slug=${slug}&_fields=id,title,acf`),
    getLeagues: () => (`${wpBasePath}/league?_fields=id,slug,name,acf.logo`),
    getSports: () => (`${wpBasePath}/sport?_fields=id,name,slug,acf.logo`),
    getRoles: () => (`${wpBasePath}/role?_fields=id,slug,name`),
    register: () => (`${customBasePath}/register`),
    auth: () => (`${jwtBasePath}/token`),
    refreshToken: () => (`${jwtBasePath}/token/refresh`),
    getComments: (id) => (`${wpBasePath}/comments?post=${id}`),
    postComment: () => (`${wpBasePath}/comments`),
    postScoresTeam: () => (`${customBasePath}/team-ratings/`),
    postScoresPlayer: () => (`${customBasePath}/participant-ratings/`),
    getScoresAvg: (type, postId, sport) => (`${customBasePath}/average-ratings/?type=${type}&post_id=${postId}&sport=${sport}`),
    getAllScores: (type, postId, sport) => (`${customBasePath}/all-ratings/?type=${type}&post_id=${postId}&sport=${sport}`),
    avatar: (name) => (`https://ui-avatars.com/api/?name=${name}&background=random&rounded=true`),
};

export { paths };
export default baseUrl;
