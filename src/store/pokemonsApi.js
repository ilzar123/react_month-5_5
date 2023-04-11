import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const pokemonsApi = createApi({
    reducerPath: 'pokemonsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2'}),
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: () => `pokemon`,
        })
    })
})

export const {useGetPokemonsQuery} = pokemonsApi