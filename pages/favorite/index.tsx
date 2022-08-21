import { Grid, Text } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import {
  FavoriteCardPokemon,
  FavoritePokemons,
} from "../../components/pokemon";
import { setFavorites } from "../../utils";
import { Pockemon } from "../../interfaces/pockedex-response";

const FavoritePage = () => {
  const [favorites, setfavorites] = useState<Pockemon[]>([]);
  useEffect(() => {
    setfavorites(setFavorites());
  }, []);

  return (
    <Layout title={"Favoritos"}>
      <Text h1>Favoritos</Text>
      {favorites.length === 0 ? (
        <Text h1>Nenhum favorito adicionado</Text>
      ) : (
        <FavoritePokemons pokemons={favorites} />
      )}
    </Layout>
  );
};

export default FavoritePage;
