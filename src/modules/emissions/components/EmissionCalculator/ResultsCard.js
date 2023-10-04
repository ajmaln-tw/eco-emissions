import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { getGradientColor as getGradient } from "../../../../utils/commonUtils";

const Card = ({ color, title, value, textColor }) => {

    return <Box sx={{ borderRadius: "15px", backgroundImage: color, p: 3, mt: 2, display: "flex", justifyContent: "center", alignItems: "space-between", flexDirection: "column" }}>
        <Box sx={{ alignSelf: "flex-start", mb: 1 }}>
            <Typography sx={{ fontSize: "18px", fontWeight: 500, color: textColor }}>{title}</Typography>
        </Box>
        <Box sx={{ alignSelf: "flex-end", mt: 1 }}>
            <Typography sx={{ fontSize: "26px", fontWeight: 800, color: textColor }}>{value}</Typography>
        </Box>
    </Box>;
};
const ResultsCard = ({ sox, nox, co2, fuelConsumption }) => {
    return <Grid container columnSpacing={3} rowSpacing={2} >
        <Grid item sm={6} md={3}>
            <Card value={sox} color={getGradient("#ECEC08", "#DC9F03")} title="Predicted SOx Emission" textColor="#000" />
        </Grid>
        <Grid item sm={6} md={3}>
            <Card value={nox} color={getGradient("#31C7DB", "#095C93")} title="Predicted NOx Emission" textColor="#fff" />
        </Grid>
        <Grid item sm={6} md={3}>
            <Card value={co2} color={getGradient("#25CF4A", "#028D20")} title="Predicted CO2 Emission" textColor="#fff" />
        </Grid>
        <Grid item sm={6} md={3}>
            <Card value={fuelConsumption} color={getGradient("#EC915D", "#C20808")} title="Predicted Fuel Consumption" textColor="#fff" />
        </Grid>
    </Grid>;
};

export default ResultsCard;
