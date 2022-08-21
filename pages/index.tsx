import { Grid} from "@nextui-org/react";
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
            <PockemonItem 
              key={pokemon._id}
              pokemon={pokemon}
            />
        ))}
      </Grid.Container>
    </div>
  );
};
import { GetServerSideProps } from "next";
import pokedexApi from "../api/pokedexApi";
import { Pockemon, PockeResponse } from "../interfaces/pockedex-response";
import { PockemonItem } from "../components/pokemon";

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
