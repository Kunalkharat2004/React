/* eslint-disable react/prop-types */
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"

import { Favorite, Share, MoreVert, FavoriteBorder } from "@mui/icons-material";

function SingleCard({ CardInfo }) {
  return (
    CardInfo.map((item) => (
      <Card key={item.title}> {/* Added a unique key for each Card */}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: item.userLogoColor }} aria-label="recipe">
              {item.userLogo}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={item.title}
          subheader={item.date}
        />
        <CardMedia
          component="img"
          height="20%"
          image={item.img}
          alt={item.imgDesc}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.imgDesc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    ))
  )
}

export default SingleCard;