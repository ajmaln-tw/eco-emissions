import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

export const ACTION_TYPES = {


    FETCH_USER_BY_ID: `${STATE_REDUCER_KEY}/FETCH_USER_BY_ID`,
    FETCH_USER_BY_ID_REQUEST: `${STATE_REDUCER_KEY}/FETCH_USER_BY_ID_REQUEST`,
    FETCH_USER_BY_ID_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_USER_BY_ID_SUCCESS`,
    FETCH_USER_BY_ID_FAILURE: `${STATE_REDUCER_KEY}/FETCH_USER_BY_ID_FAILURE`,

    FETCH_DASHBOARD_DATA: `${STATE_REDUCER_KEY}/FETCH_DASHBOARD_DATA`,
    FETCH_DASHBOARD_DATA_REQUEST: `${STATE_REDUCER_KEY}/FETCH_DASHBOARD_DATA_REQUEST`,
    FETCH_DASHBOARD_DATA_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_DASHBOARD_DATA_SUCCESS`,
    FETCH_DASHBOARD_DATA_FAILURE: `${STATE_REDUCER_KEY}/FETCH_DASHBOARD_DATA_FAILURE`,

    FETCH_STATS_VESSEL_REQUEST: `${STATE_REDUCER_KEY}/FETCH_STATS_VESSEL_REQUEST`,
    FETCH_STATS_VESSEL_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_STATS_VESSEL_SUCCESS`,
    FETCH_STATS_VESSEL_FAILURE: `${STATE_REDUCER_KEY}/FETCH_STATS_VESSEL_FAILURE`,

    FETCH_LINE_CHART_REQUEST: `${STATE_REDUCER_KEY}/FETCH_LINE_CHART_REQUEST`,
    FETCH_LINE_CHART_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_LINE_CHART_SUCCESS`,
    FETCH_LINE_CHART_FAILURE: `${STATE_REDUCER_KEY}/FETCH_LINE_CHART_FAILURE`,

    FETCH_EMISSION_DATA: `${STATE_REDUCER_KEY}/FETCH_EMISSION_DATA`,
    FETCH_EMISSION_DATA_REQUEST: `${STATE_REDUCER_KEY}/FETCH_EMISSION_DATA_REQUEST`,
    FETCH_EMISSION_DATA_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_EMISSION_DATA_SUCCESS`,
    FETCH_EMISSION_DATA_FAILURE: `${STATE_REDUCER_KEY}/FETCH_EMISSION_DATA_FAILURE`

};

export const fetchDashBoardData = createAction(ACTION_TYPES.FETCH_DASHBOARD_DATA);
export const fetchDashBoardDataReq = createAction(ACTION_TYPES.FETCH_DASHBOARD_DATA_REQUEST);
export const fetchDashBoardDataFailure = createAction(ACTION_TYPES.FETCH_DASHBOARD_DATA_FAILURE);
export const fetchUserById = createAction(ACTION_TYPES.FETCH_USER_BY_ID);
export const fetchEmissionData = createAction(ACTION_TYPES.FETCH_EMISSION_DATA);
