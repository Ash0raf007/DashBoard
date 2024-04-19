import LineA from "./LineA.jsx";
import LineB from "./LineB.jsx";
import LineC from "./LineC.jsx";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack,useTheme } from "@mui/material";
import Header from "../../componant/Header";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <div>
<Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />
  
        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
</Stack>

      <LineA />
      <LineC />
      <LineB />
    </div>
  );
};

export default Dashboard;