import configuration from "../configuration";

async function get<TBody>(relativeUrl: string): Promise<TBody> {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${configuration.apiToken}`
        }
    };
    
    /* The code snippet `const response = await fetch(
            `${configuration.apiUrl}/3`,
            options
            );` is making a GET request to a specified URL constructed using the
    `configuration.apiUrl`, the number `3`, and the `relativeUrl` parameter. The request is made
    with the specified options including the method as 'GET' and headers such as 'accept' and
    'Authorization' with the API token. */
    const response = await fetch(
        `${configuration.apiUrl}/3${relativeUrl}`,
        options
        );

    const json: TBody = await response.json()
    return json;
}

export interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    popularity: number;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface PageResponse<TResult> {
    page: number;
    results: TResult[];
}

interface Configuration {
    images: {
        base_url: string;
    }
}

export const client = {
    async getConfiguration() {
        return await get<Configuration>('/configuration');
    },
    async getNowPlaying(): Promise<MovieDetails[]> {
        const response = await get<PageResponse<MovieDetails>>(
            '/movie/now_playing?page=1'
        )
        return response.results;
    }
}