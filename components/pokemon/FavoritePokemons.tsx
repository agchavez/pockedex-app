import { FC } from 'react';
import { Grid } from '@nextui-org/react';

import { FavoriteCardPokemon } from './';
import { Pockemon } from '../../interfaces/pockedex-response';

interface Props {
    pokemons: Pockemon[];
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (

    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
    {
        pokemons.map( pokemon => (
            <FavoriteCardPokemon key={ pokemon._id } pokemon={ pokemon } />          
        ))
    }
    </Grid.Container>

  )
};