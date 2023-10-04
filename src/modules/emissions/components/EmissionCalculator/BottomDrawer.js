import { Box, Drawer, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Close as CloseIcon } from "@mui/icons-material";
import { actions as sliceAction } from "../../slice";
import { STATE_REDUCER_KEY } from "../../constants";
import ResultsCard from "./ResultsCard";

const BottomDrawer = () => {
    const isBottomDrawer = useSelector(state => state[STATE_REDUCER_KEY].emissionFilter.isBottomDrawer);
    const dispatch = useDispatch();
    const { emissionVariableValues: { co2 = 0, fuelConsumption = 0, sox = 0, nox = 0 } = {} } = useSelector(state => state[STATE_REDUCER_KEY].routeEmission.data);
    const handleClose = () => dispatch(sliceAction.toggleBottomDrawer(false));
    return <Drawer
        anchor="bottom"
        open={isBottomDrawer}
        sx={{
            "& .MuiDrawer-paper": {
                height: { sm: "32%", md: "28%" },
                padding: "16px",
                borderRadius: "16px 16px 0 0"
            }
        }}
    >
        <Box sx={{ ml: { sm: "40%", md: "320px", lg: "360px", xl: "20%" } }}>
            <IconButton
                onClick={handleClose}
                style={{
                    position: "absolute",
                    top: "2px",
                    right: "4px"
                }}
            >
                <CloseIcon />
            </IconButton>
            <ResultsCard co2={co2} fuelConsumption={fuelConsumption} sox={sox} nox={nox} />
        </Box>
    </Drawer>;
};

export default BottomDrawer;
