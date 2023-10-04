import { Box } from "@mui/material";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../../constants";

import { createStructuredSelector } from "reselect";
import { getRouteEmission } from "../../selectors";
import "leaflet/dist/leaflet.css";
import CustomMap from "../../../../common/components/map/CustomMap";
import { useEffect } from "react";
import { fetchVesselSizeDropDown, fetchVesselTypeDropDown } from "../../actions";
import LeftDrawer from "./LeftDrawer";
import BottomDrawer from "./BottomDrawer";
const RouteMap = (props) => {
    const requestInProgress = useSelector(state => state[STATE_REDUCER_KEY].routeEmission.requestInProgress);
    const { routeEmission: { mapPositionCurrent = [], mapJourney = [], emissionRouteCoordinatesVariables = [] } = {} } = props;
    const dispatch = useDispatch();

    // todo
    //1 Icon
    useEffect(() => {
        // dispatch(fetchMT());
        dispatch(fetchVesselTypeDropDown());
        dispatch(fetchVesselSizeDropDown());
    }, []);
    return <>
        <Box sx={{ display: "flex", justifyContent: "center", pt: "4px" }}>
            <LeftDrawer />
            <CustomMap
                title=""
                icon=""
                height="70vh"
                width="75vw"
                borderRadius="5px"
                overLay={false}
                center={mapPositionCurrent || []}
                markersList={emissionRouteCoordinatesVariables || []}
                mapJourney={mapJourney}
                requestInProgress={requestInProgress}
            />
            <BottomDrawer />
        </Box>
    </>;
};
const mapStateToProps = createStructuredSelector({
    routeEmission: getRouteEmission
});
export default connect(mapStateToProps)(RouteMap);
