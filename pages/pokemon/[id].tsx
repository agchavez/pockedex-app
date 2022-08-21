import React, { FC, useEffect, useState } from "react";

import { Button, Card, Grid, Spacer, Text } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { Pockemon, PockeResponse } from "../../interfaces/pockedex-response";
import { toggleFavorite, existsFavorite } from "../../utils";

interface HomeProps {
  pokemon: Pockemon | undefined;
}

const PokemonPage: FC<HomeProps> = ({ pokemon }) => {
  const [exists, setexists] = useState(existsFavorite(pokemon?._id));

  const handleAddLocalStorage = () => {
    toggleFavorite(pokemon);
    setexists(!exists);
  };
  return (
    <Layout title={pokemon ? pokemon.name : "Pokemon"}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={pokemon?.dream_world || "/no-image.png"}
                alt={pokemon?.name}
                width="100%"
                height={300}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body css={{ p: 1 }}>
              <div
                style={{
                  display: "flex",
                }}
              >
                <Text transform="capitalize" h1>
                  {pokemon?.name || ""}
                </Text>
                <Spacer css={{ flex: 1 }} />
                <Button
                  color="gradient"
                  shadow
                  bordered = {!exists}
                  css={{
                    marginTop: "20px",
                  }}
                  size="sm"
                  onClick={handleAddLocalStorage}
                >
                  <Text h4>Favorito</Text>
                </Button>
              </div>
              <Text h1>#{pokemon?.number || ""}</Text>
              <Button
                bordered
                color="success"
                css={{
                  width: "100px",
                  cursor: "inherit",
                }}
                clickable={false}
              >
                 <Text h3 color="success">{pokemon?.type}</Text>
              </Button>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
import { GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const resp = await pokedexApi.get<PockeResponse>("pockemon/?limit=100");
  return {
    paths: resp.data.results.map((pokemon) => ({
      params: {
        id: pokemon._id,
      },
    })),
    fallback: false,
  };
};
import { GetStaticProps } from "next";
import pokedexApi from "../../api/pokedexApi";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };
  try {
    const resp = await pokedexApi.get<Pockemon>(`pockemon/${id}`);
    return {
      props: {
        pokemon: resp.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        pokemon: {},
      },
    };
  }
};

export default PokemonPage;
