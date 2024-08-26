const baseUrl = 'https://api.sportex.pro/wp-json/wp/v2';

const paths = {
    getTeams: () => ('/teams?_fields=id,title,acf.logo'),
    getTeam: (slug) => (`/teams?slug=${slug}&_fields=id,title,acf`),
    getImg: (id) => (`/media/${id}?_fields=media_details`),
    getPlayers: () => ('/players?_fields=id,title,acf.logo'),
    getPlayer: (slug) => (`/players?slug=${slug}&_fields=id,title,acf`),
}

export { paths };
export default baseUrl;