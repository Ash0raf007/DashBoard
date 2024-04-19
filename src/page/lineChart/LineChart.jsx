/// npm i @nivo/line
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import Line from "./Line.jsx";
import Header from "../../componant/Header";

const LineChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Line Chart" subTitle="Simple Line Chart" />

      <Line />
    </Box>
  );
};

export default LineChart;