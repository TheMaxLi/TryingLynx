import { useCallback, useEffect, useState } from "@lynx-js/react";

import "./App.css";

interface Pokemon {
  name: string;
  url: string;
  src?: string;
  id?: number;
}

type PokemonFetchData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
};

export function App() {
  const [isFetching, setFetching] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextLink, setNextLink] = useState<string | null>(
    "https://pokeapi.co/api/v2/pokemon?limit=40"
  );

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    "background only";
    try {
      setFetching(true);
      if (!nextLink) {
        return;
      }
      const json = (await fetch(nextLink).then((res) =>
        res.json()
      )) as PokemonFetchData;

      const newPokemons = json.results;

      for await (let pokemon of newPokemons) {
        const json = await fetch(pokemon.url).then((res) => res.json());
        pokemon.src = json.sprites.front_default as string;
        pokemon.id = json.id;
      }

      setNextLink(json.next);
      setPokemons([...pokemons, ...newPokemons]);
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  };

  return (
    <view style={{ width: "100vw", height: "100vh" }}>
      <scroll-view
        scroll-orientation="vertical"
        style={{ padding: "20px", paddingTop: "40px", height: "100%" }}
        bindscrolltolower={(e) => {
          fetchPokemon();
        }}
      >
        <view
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {pokemons.map((pokemon) => (
            <view
              style={{
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <image
                style={{ width: "100px", height: "100px" }}
                src={pokemon.src}
              ></image>
              <text>{pokemon.name}</text>
              <text>id: {pokemon.id}</text>
            </view>
          ))}
        </view>
      </scroll-view>
    </view>
  );
}
