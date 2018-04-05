import config from './config'

const { apiKey } = config

export default function getArtists(country) {
	
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`
	const url = URL.replace(':country' , country)
	return fetch(url)
	.then( res => res.json() )
	.then( json => json.topartists.artist )
}