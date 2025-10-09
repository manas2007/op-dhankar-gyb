import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader = (props) => {
    const { color, size } = props;
	return (
		<>
			<div className="h-full w-full flex items-center justify-center">
				<Box sx={{ display: "" }}>
					<CircularProgress size={size ? size : "20px"} thickness={5} sx={{ color: color ? color : "#FFFFFF" }} />
				</Box>
			</div>
		</>
	);
};

export default Loader;
