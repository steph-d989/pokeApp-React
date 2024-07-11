import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PokeCard({ pokemon: { name, id, sprites, types } }) {
  console.log(name, id, sprites, types);
  let name1 = name;
  name1= name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase();
  const id1 = id;
  const image1 = sprites.other["official-artwork"].front_default;
  const type1 = types[0].type.name;
  const type2 = types.length > 1 ? types[1].type.name : null;

  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardContent>
        <Typography variant="body2" /* color="text.secondary" */>
          nº{id1}
        </Typography>
        <Typography variant="body2" /* color="text.secondary" */>
          {name1}
        </Typography>
        <Typography variant="body2" /* color="text.secondary" */>
          {type1}
        </Typography>
        {type2!==null&&<Typography variant="body2" /* color="text.secondary" */>
          {type2}
        </Typography>}
      </CardContent>
      <CardMedia
        sx={{ height: 100, width: 100 }}
        image={image1}
        title={name1}
      />
    </Card>
  );
}