/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import { LINE_GRAPHS_SAMPLE_DATA, STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";
import _ from "lodash";
import { EMISSION_TYPES, DATE_RANGE } from "./constants";
import { toEpoch } from "../../utils/dateUtils";
import routes from "./route.json";
import emissionJson from "./routeEmissions.json";
const initialState = {
    vesselList: [],
    emissionsOverall: {
        requestInProgress: false,
        data: {}
    },
    emissionsIndividual: {
        requestInProgress: false,
        data: {}
    },
    emissionLineGraph: {
        requestInProgress: false,
        selectedSwitch: { ...EMISSION_TYPES[0] },
        currentDateRange: { ...DATE_RANGE[0] },
        day: toEpoch(new Date()),
        data: { predictedEmissions: [], actualEmissions: [] }
    },
    routeEmission: {
        requestInProgress: false,
        showVariables: false,
        showLeftDrawer: true,
        data: {
            mapPositionCurrent: [17.6959515, 83.2873001],
            mapJourney: [
                [8.750165, 78.21742167],
                [6.996001667, 79.79937167]
            ],
            emissionRouteVariables: [],
            emissionSummary: { arrivalLocation: 0, departureLocation: "10 hr 33 mins" },
            emissionVariableValues: { co2: 1000, fuelConsumption: 880, sox: 982, nox: 987 }
        }
    },
    emissionFilter: {
        requestInProgress: false,
        data: {
            Start_Port_Id: { id: "111", name: "111" },
            End_Port_Id: { id: "111", name: "111" },
            Total_Distance: "2",
            Length: "122",
            Breadth: "123",
            Depth: "111",
            Draft: "11",
            Grt: "11",
            Dwt: "11",
            Total_Cargo_Onboard: "121",
            Cargo_Mt: "121",
            Avg_Actual_Speed_Logged: "121",
            Avg_Draft_Fore: "112",
            Avg_Draft_After: "121",
            Avg_Displacement: "121",
            Tot_ME_Run_Hours: "121",
            Log_Time_Duration: "121",
            Avg_AE_Power: "122",
            Vessel_Type: { id: "111", name: "111" },
            Sub_Type: { id: "111", name: "111" }
        },
        isDrawerOpen: false,
        isBottomDrawer: false
    },
    vesselTypeDropDown: {
        requestInProgress: false,
        data: [{ id: 100, name: "Vessel Type test 1" }]
    },
    vesselSizeDropDown: {
        requestInProgress: false,
        data: [{ id: 200, name: "test 2" }]
    },
    departureDropDown: {
        requestInProgress: false,
        data: [{ id: 300, name: "test 3" }]
    },
    destinationDropDown: {
        requestInProgress: false,
        data: [{ id: 400, name: "test 4" }]
    }

};

const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        clearDateRange: (state) => {
            _.set(state, "emissionLineGraph.currentDateRange", {});
        },
        setFiler: (state, { payload = {} }) => {
            let key = _.keys(payload)[0];
            let val = _.values(payload)[0];
            _.set(state, `emissionFilter.data.${key}`, val);
        },
        setIsDrawerOpen: (state) => {
            _.set(state, "emissionFilter.isDrawerOpen", !_.get(state, "emissionFilter.isDrawerOpen"));
        },
        setIsBottomDrawer: (state) => {
            _.set(state, "emissionFilter.isBottomDrawer", !_.get(state, "emissionFilter.isBottomDrawer"));
        },
        setLeftDrawer: (state) => {
            _.set(state, "emissionFilter.showLeftDrawer", !_.get(state, "emissionFilter.showLeftDrawer"));
        },
        toggleBottomDrawer: (state, { payload }) => {
            _.set(state, "emissionFilter.isBottomDrawer", payload);
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.TOGGLE_EMISSION, (state, { payload }) => {
                _.set(state, "emissionLineGraph.selectedSwitch", payload);
            })
            .addCase(ACTION_TYPES.TOGGLE_DATE_RANGE, (state, { payload }) => {
                _.set(state, "emissionLineGraph.currentDateRange", payload);
            })
            .addCase(ACTION_TYPES.SET_DAY, (state, { payload }) => {
                _.set(state, "emissionLineGraph.day", payload);
            })
            .addCase(ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA_REQUEST, (state) => {
                _.set(state, "emissionLineGraph.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA_SUCCESS, (state, { payload }) => {
                _.set(state, "emissionLineGraph.data", payload);
            })
            .addCase(ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA_FAILURE, (state) => {
                _.set(state, "emissionLineGraph.requestInProgress", false);
                _.set(state, "emissionLineGraph.data", LINE_GRAPHS_SAMPLE_DATA);
            })
            //route emission submodule
            .addCase(ACTION_TYPES.SEARCH_VESSEL_ROUTE_EMISSION_REQUEST, (state) => {
                _.set(state, "routeEmission.requestInProgress", true);
            }).addCase(ACTION_TYPES.SEARCH_VESSEL_ROUTE_EMISSION_SUCCESS, (state, { payload }) => {
                _.set(state, "routeEmission.requestInProgress", false);
                _.set(state, "routeEmission.data", payload);
                _.set(state, "emissionFilter.isDrawerOpen", true);
                _.set(state, "routeEmission.showVariables", true);
            }).addCase(ACTION_TYPES.SEARCH_VESSEL_ROUTE_EMISSION_FAILURE, (state) => {
                _.set(state, "routeEmission.requestInProgress", false);
                _.set(state, "routeEmission.showVariables", true);
                _.set(state, "routeEmission.data.mapJourney", routes.coordinates);
                _.set(state, "emissionFilter.isDrawerOpen", true);
                _.set(state, "routeEmission.data.emissionRouteCoordinatesVariables", emissionJson.emissionRoute);
            });
    }
});

export const { actions, reducer } = slice;
