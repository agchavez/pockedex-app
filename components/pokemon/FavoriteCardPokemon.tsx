import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Grid, Card } from '@nextui-org/react';
import pokedexApi from '../../api/pokedexApi';
import { Pockemon } from '../../interfaces';


interface Props {
    pokemon: Pockemon;
}


export const FavoriteCardPokemon:FC<Props> = ({ pokemon }) => {

  const router = useRouter();


  const onFavoriteClicked = () => {
    router.push(`/pokemon/${ pokemon._id }`);
  }
  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ pokemon._id } onClick={ onFavoriteClicked }>
        <Card hoverable clickable css={{ padding: 10 }}>
        <Card.Image 
            src={pokemon.dream_world || "/no-image.png"}
            width={'100%'}
            height={ 140 }
        />
        </Card>
    </Grid>
  )
};