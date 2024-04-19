//https://nivo.rocks/choropleth/
//npm i @nivo/geo
import { Box, useTheme } from "@mui/material";

import Geo from "./geo.jsx";
import Header from "../../componant/Header";

const Geography = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Geography" subTitle="Simple Geography Chart" />

      <Geo />
    </Box>
  );
};

export default Geography;