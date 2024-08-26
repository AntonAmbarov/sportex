const baseUrl = 'https://api.sportex.pro/wp-json';

const paths = {
    getTeams: () => ('/wp/v2/teams?_fields=id,title,acf.logo'),
    getTeam: (slug) => (`/wp/v2/teams?slug=${slug}&_fields=id,title,acf`),
    getImg: (id) => (`/wp/v2/media/${id}?_fields=media_details`),
    getPlayers: () => ('/wp/v2/players?_fields=id,title,acf.logo'),
    getPlayer: (slug) => (`/wp/v2/players?slug=${slug}&_fields=id,title,acf`),
    register: () => ('/wp/v2/users'),
    auth: () => ('/jwt-auth/v1/token'),
    getAdminToken: () => ('admin-ajax.php?action=get_admin_token'),
}

export { paths };
export default baseUrl;