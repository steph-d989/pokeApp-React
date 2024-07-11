import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PokeCard({ pokemon: { name, id, sprites, types } }) {
  console.log(name, id, sprites, types);

  const name1 = name;
  const id1 = id;
  const image1 = sprites.other["official-artwork"].front_default;
  const type1 = types[0].type.name;
  const type2 = types[1] ? types[1].type.name : null;

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          nº{id1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          name: {name1}
        </Typography>
        <CardMedia
          sx={{ height: 100, width: 100 }}
          image={image1}
          title={name1}
        />
        <Typography variant="body2" color="text.secondary">
          type: {type1}
        </Typography>
        {type2 && (
          <Typography variant="body2" color="text.secondary">
            type: {type2}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
