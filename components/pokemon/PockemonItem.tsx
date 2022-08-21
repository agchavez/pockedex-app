import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";

import { Pockemon } from "../../interfaces";
import { useRouter } from "next/router";

interface PockemonItemProps {
    pokemon: Pockemon;
}
export const PockemonItem:FC<PockemonItemProps> = ({pokemon}) => {

    const router = useRouter();
    const handleClick = () => {
        router.push(`/pokemon/${pokemon._id}`);
    }
  return (
    <>
        <Grid key={pokemon._id}>
            <Card hoverable clickable css={{ width: "250px" }} onClick={handleClick}>
              <Card.Body css={{ p: 1 }}>
                <Card.Image src={pokemon.dream_world || ''} width="100%" height={140} />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text transform="capitalize">{pokemon.name}</Text>
                  <Text>#{pokemon.number}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

    </>
  )
}
