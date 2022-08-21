import { Grid, Text } from '@nextui-org/react'
import React from 'react'
import { Layout } from '../../components/layouts'

const FavoritePage = () => {
  return (
    <Layout title={"Favoritos"}>
        <Grid.Container gap={2} justify="flex-start" css={{
            marginLeft: "10px",
        }}>
            <Text h1>Favoritos</Text>
        </Grid.Container>
    </Layout>
  )
}

export default FavoritePage