import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Chart from "../utils/Chart";
import PieChart from "../utils/PieChart";
import { Container, Stack } from "@mui/system";

export default function Feeds() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "#e0e0e0",
        height: "100vh",
      }}
    >
      <Box display={"flex"}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Stack spacing={4} direction="row">
                <Card sx={{ minWidth: "48%", height: 130 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      300
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: "48%", height: 130 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      300
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: "48%", height: 130 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      300
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ height: "40vh" }}>
                <CardContent>
                  <Chart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ height: "40vh" }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <PieChart />
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={2}>
                <Card sx={{ minWidth: "48%", height: 200 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
