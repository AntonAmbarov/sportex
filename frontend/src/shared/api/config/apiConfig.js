const baseUrl = 'https://api.sportex.pro';
const wpBasePath = '/wp-json/wp/v2';
const customBasePath = '/wp-json/custom/v1';
const jwtBasePath = '/wp-json/jwt-auth/v1';

const paths = {
    getTeams: () => (`${wpBasePath}/teams?_fields=id,slug,title,acf.logo,acf.sport,acf.league`),
    getTeam: (slug) => (`${wpBasePath}/teams?slug=${slug}&_fields=id,title,content,acf`),
    getImg: (id = 101) => (`${wpBasePath}/media/${id}?_fields=media_details`),
    getImgs: () => (`${wpBasePath}/media/?_fields=id,alt_text,media_details`),
    getDefaultImg: () => (`${baseUrl}/wp-content/uploads/2024/10/defaultimg.png`),
    getPlayers: () => (`${wpBasePath}/players?_fields=id,slug,title,acf.name,acf.last_name,acf.team,acf.role,acf.sport,acf.logo`),
    getPlayer: (slug) => (`${wpBasePath}/players?slug=${slug}&_fields=id,title,content,acf`),
    getLeagues: () => (`${wpBasePath}/league?_fields=id,slug,name,acf.logo`),
    getSports: () => (`${wpBasePath}/sport?_fields=id,name,slug,acf.logo`),
    getRoles: () => (`${wpBasePath}/role?_fields=id,slug,name`),
    register: () => (`${customBasePath}/register`),
    auth: () => (`${jwtBasePath}/token`),
    refreshToken: () => (`${jwtBasePath}/token/refresh`),
    getComments: (id) => (id ? `${wpBasePath}/comments?post=${id}` : `${wpBasePath}/comments`),
    postComment: () => (`${wpBasePath}/comments`),
    postScoresTeam: () => (`${customBasePath}/team-ratings/`),
    postScoresPlayer: () => (`${customBasePath}/participant-ratings/`),
    getScoresAvg: (type, postId, sport) => (`${customBasePath}/average-ratings/?type=${type}&post_id=${postId}&sport=${sport}`),
    getAllScores: (type, postId, sport) => (`${customBasePath}/all-ratings/?type=${type}&post_id=${postId}&sport=${sport}`),
    getAllScoresAvg: () => (`${customBasePath}/overall-ratings/`),
    avatar: (name) => (`https://ui-avatars.com/api/?name=${name}&background=random&rounded=true`),
};

export { paths };
export { baseUrl };
