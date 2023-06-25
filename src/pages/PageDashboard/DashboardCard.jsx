import React from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea
} from "@mui/material";
import { styled } from "@mui/system";

const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const url = 'https://images.news18.com/ibnlive/uploads/2021/10/asus-rog-strix-g15-advantage-edition-review-163394012216x9.jpeg'

const url1 = 'https://s.yimg.com/uu/api/res/1.2/vZgz2iO8gsVGp5ualbFz2g--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/9a3f11a0-e365-11ed-afdd-1e771755831b.cf.webp'

const url2 = 'https://www.cnet.com/a/img/resize/e5a0585d8e3cea048a4676f5fd9ba66551afdc6c/hub/2022/12/02/a858ae06-dc6b-4638-bc70-44420b23b5e0/asus-x16-3.jpg?auto=webp&width=1024'

const DashboardComponent = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Content>
          <Typography variant="h4" component="h1">
            Dashboard
          </Typography>
          <br />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="170"
                    src={url}
                    alt="Asus Rog"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Asus ROG Strix G15
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Alongside the AMD CPU and GPU, the Asus ROG Strix G15 Advantage Edition SKU
                      we reviewed features 16GB DDR4-3200 RAM, and a 1TB M.2 NVMe SSD for storage.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="170"
                    src={url1}
                    alt="Asus Rog"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      ASUS ROG Ally
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Feature a new Ryzen Z1 chip which is a customized Zen 4/RDNA 3 APU designed specifically
                      for handheld gaming PCs it also has a 1080p screen with 500 nits of brightness.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="170"
                    src={url2}
                    alt="Asus Rog"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Asus ROG Flow X16
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      That makes the Asus ROG Flow X16 a very unique gaming laptop, but also an expensive one
                      The base system we tested is $1,999, frankly way too much for a gaming laptop.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Content>
      </Container>
    </>
  );
};

export default DashboardComponent;