// LeftDrawer.js
import React from "react";
import { Box, Paper } from "@mui/material";
import OverLayFilter from "./OverLayFilter";
import logo from "../../../../assets/images/ecoEmission.png";
function LeftDrawer() {
    return (
        <Box sx={{ width: "30%", zIndex: 100000, background: "white.main" }}>
            <Paper elevation={0} sx={{ height: "100vh", p: 0, borderRadius: 0, position: "absolute", top: 1, left: 50, width: "300px" }}>
                < Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: 3 }}>
                    <Box sx={{ m: 1, p: 0 }}>
                        <img width={70} height={73} src={logo} alt="logo_eco_emission" />
                    </Box>
                </Box>
                <OverLayFilter />
            </Paper >
        </Box >
    );
}

export default LeftDrawer;
