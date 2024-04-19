//https://nivo.rocks/bar/
//npm i @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import Bar from "./bar.jsx";
import Header from "../../componant/Header";

const BarChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header
        title="Bar Chart"
        subTitle="The minimum wage in Germany, France and Spain (EUR/month)"
      />
      <Bar />
    </Box>
  );
};

export default BarChart;