const baseUrl = 'https://api.sportex.pro';

const paths = {
    getTeams: () => ('/wp-json/wp/v2/teams?_fields=id,title,acf.logo'),
    getTeam: (slug) => (`/wp-json/wp/v2/teams?slug=${slug}&_fields=id,title,acf`),
    getImg: (id) => (`/wp-json/wp/v2/media/${id}?_fields=media_details`),
    getPlayers: () => ('/wp-json/wp/v2/players?_fields=id,title,acf.logo'),
    getPlayer: (slug) => (`/wp-json/wp/v2/players?slug=${slug}&_fields=id,title,acf`),
    register: () => ('/wp-json/custom/v1/register'),
    auth: () => ('/wp-json/jwt-auth/v1/token'),
    getAdminToken: () => ('/wp-json/admin-ajax.php?action=get_admin_token'),
}

export { paths };
export default baseUrl;