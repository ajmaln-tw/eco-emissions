/* eslint-disable no-unused-vars */
import { Box, Grid, IconButton, Paper, useMediaQuery, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { Form, withFormik } from "formik";
import { IoIosNavigate } from "react-icons/io";
import { FormController } from "../../../../common/components";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getDepartureDropDown, getDestinationDropDown, getEmissionFilter, getShowVariables, getVesselSizeDropDown, getVesselTypeDropDown } from "../../selectors";
import { fetchDeparturePortDropDown, fetchDestinationPortDropDown, searchVesselRouteEmissionData } from "../../actions";
import { actions as sliceActions } from "../../slice";
import EmissionVariables from "./EmissionVariables";
import { emissionRouteFilter } from "../../validate";


const EmissionCalculatorFilterOverlay = (props) => {
    const theme = useTheme();
    const smSc = useMediaQuery(theme.breakpoints.down("md"));

    const dispatch = useDispatch();
    const { handleSubmit, errors = {}, vesselTypeOptions = [], vesselSizeOptions = [],
        departureOptions = [], destinationOptions = [], searchVesselRoute, showVariables = false } = props;

    const searchIconStyle = {
        "&:hover": {
            backgroundColor: "primary.dark",
            opacity: 1
        }, backgroundColor: "primary.light", width: "100px", borderRadius: "17px", fontSize: { xs: "16px", xl: "18px" }, height: { xs: "40px", xl: "50px" }
    };
    const vesselTypeChange = (val) => dispatch(sliceActions.setFiler({ vesselType: val }));
    const departureChange = (val) => dispatch(sliceActions.setFiler({ departure: val }));
    const destinationChange = (val) => {
        dispatch(sliceActions.setFiler({ destination: val }));
        dispatch(searchVesselRoute());
    };
    // eslint-disable-next-line no-unused-vars
    const vesselSizeChange = (val) => {
        dispatch(sliceActions.setFiler({ vesselSize: val }));
        dispatch(fetchDeparturePortDropDown());
        dispatch(fetchDestinationPortDropDown());
    };

    return <Box sx={{ height: "60vh", overflowY: "scroll" }}>
        <Form onSubmit={handleSubmit} >
            <Grid container rowSpacing={2} columnSpacing={1}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController
                        width="100%"
                        statusError={true}
                        errorName={errors?.Vessel_Type}
                        control="select" placeholder={"Vessel Type"}
                        name="Vessel_Type"
                        options={vesselTypeOptions || []}
                    // onChangeFromController={ } onInputChange={(e) => handleInputChange(e, "name")} options={[]}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController
                        width="100%"
                        statusError={true}
                        errorName={errors?.Sub_Type}
                        control="select" placeholder={"Vessel Sub Type"}
                        name="Sub_Type"
                        options={vesselTypeOptions || []}
                    // onChangeFromController={ } onInputChange={(e) => handleInputChange(e, "name")} options={[]}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Total_Distance} control="input3" placeholder={"Total Distance"} name="Total_Distance" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Length} control="input3" placeholder={"Vessel Length"} name="Length" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Breadth} control="input3" placeholder={"Vessel Breadth"} name="Breadth" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Depth} control="input3" placeholder={"Vessel Depth"} name="Depth" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Draft} control="input3" placeholder={"Draft"} name="Draft" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Grt} control="input3" placeholder={"Grt"} name="Grt" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Dwt} control="input3" placeholder={"Dwt"} name="Dwt" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Total_Cargo_Onboard} control="input3" placeholder={"Total Cargo Onboard"} name="Total_Cargo_Onboard" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Cargo_Mt} control="input3" placeholder={"Cargo Mt"} name="Cargo_Mt" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Avg_Actual_Speed_Logged} control="input3" placeholder={"Avg Actual Speed Logged"} name="Avg_Actual_Speed_Logged" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Avg_Draft_Fore} control="input3" placeholder={"Avg Draft Fore"} name="Avg_Draft_Fore" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Avg_Draft_After} control="input3" placeholder={"Avg Draft After"} name="Avg_Draft_After" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Avg_Displacement} control="input3" placeholder={"Avg Displacement"} name="Avg_Displacement" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Tot_ME_Run_Hours} control="input3" placeholder={"Total ME Run Hours"} name="Tot_ME_Run_Hours" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Log_Time_Duration} control="input3" placeholder={"Log Time Duration"} name="Log_Time_Duration" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController statusError={true} errorName={errors?.Avg_AE_Power} control="input3" placeholder={"Avg AE Power"} name="Avg_AE_Power" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: "flex", justifyContent: "center" }} >
                    <FormController width="100%" statusError={true} errorName={errors?.Start_Port_Id} control="select" placeholder={"Departure Port"} name="Start_Port_Id" />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController width="100%" statusError={true} errorName={errors?.End_Port_Id} control="select" placeholder={"Destination Port"} name="End_Port_Id" />
                </Grid>
            </Grid>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mb: 1 }}>
                <IconButton sx={searchIconStyle} variant="contained" type="submit">
                    <IoIosNavigate />
                </IconButton>
            </Box>
        </Form >
    </Box >;

};

const mapStateToProps = createStructuredSelector({
    emissionFilter: getEmissionFilter,
    showVariables: getShowVariables,
    //dropDown
    vesselTypeOptions: getVesselTypeDropDown,
    vesselSizeOptions: getVesselSizeDropDown,
    departureOptions: getDepartureDropDown,
    destinationOptions: getDestinationDropDown
});

const mapDispatchToProps = (dispatch) => ({
    submit: (data) => dispatch(searchVesselRouteEmissionData(data))
});

const filterEmission = withFormik({
    enableReinitialize: true,
    // validationSchema: emissionRouteFilter,
    mapPropsToValues: (props) => {
        return props.emissionFilter;
    },
    displayName: "Emission/FilterOverlay",
    handleSubmit: (values, { props: { submit } }) => {
        submit(values);
    }
})(EmissionCalculatorFilterOverlay);

export default connect(mapStateToProps, mapDispatchToProps)(filterEmission);

