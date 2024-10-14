import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isPositive = parseFloat(increase) >= 0;

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: "black" }}>
          {subtitle}
        </Typography>

        <Box display="flex" alignItems="center">
          {isPositive ? (
            <TrendingUpOutlinedIcon sx={{  fontSize: "24px" }} />
          ) : (
            <TrendingDownOutlinedIcon sx={{ fontSize: "24px" }} />
          )}
          <Typography
            variant="h5"
            fontStyle="italic"
            // sx={{ color: isPositive  ml: "4px" }}
          >
           {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
