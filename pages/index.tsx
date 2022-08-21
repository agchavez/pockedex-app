import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/layouts";

interface HomeProps {
  pokemons: Pockemon[];
}

const Home: NextPage<HomeProps> = ({ pokemons }) => {
  return (
    <div >
      <Layout title="Home" />
      <Grid.Container gap={2} justify="center" css={{
        width: "100%",
      }}>
        {pokemons?.map((pokemon) => (
          <Grid key={pokemon._id}>
            <Card hoverable clickable>
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={pokemon.urlImage} width="100%" height={140} />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text>{pokemon.name}</Text>
                  <Text>{pokemon.number}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};
import { GetServerSideProps } from "next";
import pokedexApi from "../api/pokedexApi";
import { Pockemon, PockeResponse } from "../interfaces/pockedex-response";

// Funciopn solo se ejecuta en el servidor antes de renderizar la página y retona las props para la página
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const resp = await pokedexApi.get<PockeResponse>("pockemon/?limit=100");
    return {
      props: {
        pokemons: resp.data.results,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        pokemons:  [],
      },
    };
  }
};

export default Home;
