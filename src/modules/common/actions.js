import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

export const ACTION_TYPES = {

    LOG_OUT: `${STATE_REDUCER_KEY}/LOG_OUT`,

    NAVIGATE_TO: `${STATE_REDUCER_KEY}/NAVIGATE_TO`,
    REFRESH_CURRENT_PATH: `${STATE_REDUCER_KEY}/REFRESH_CURRENT_PATH`,

    FETCH_STATE_DROPDOWN: `${STATE_REDUCER_KEY}/FETCH_STATE_DROPDOWN`,
    FETCH_STATE_DROPDOWN_REQUEST: `${STATE_REDUCER_KEY}/FETCH_STATE_DROPDOWN_REQUEST`,
    FETCH_STATE_DROPDOWN_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_STATE_DROPDOWN_SUCCESS`,
    FETCH_STATE_DROPDOWN_FAILURE: `${STATE_REDUCER_KEY}/FETCH_STATE_DROPDOWN_FAILURE`,


    FETCH_DISTRICT_DROPDOWN: `${STATE_REDUCER_KEY}/FETCH_DISTRICT_DROPDOWN`,
    FETCH_DISTRICT_DROPDOWN_REQUEST: `${STATE_REDUCER_KEY}/FETCH_DISTRICT_DROPDOWN_REQUEST`,
    FETCH_DISTRICT_DROPDOWN_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_DISTRICT_DROPDOWN_SUCCESS`,
    FETCH_DISTRICT_DROPDOWN_FAILURE: `${STATE_REDUCER_KEY}/FETCH_DISTRICT_DROPDOWN_FAILURE`,

    FETCH_WARD_DROPDOWN: `${STATE_REDUCER_KEY}/FETCH_WARD_DROPDOWN`,
    FETCH_WARD_DROPDOWN_REQUEST: `${STATE_REDUCER_KEY}/FETCH_WARD_DROPDOWN_REQUEST`,
    FETCH_WARD_DROPDOWN_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_WARD_DROPDOWN_SUCCESS`,
    FETCH_WARD_DROPDOWN_FAILURE: `${STATE_REDUCER_KEY}/FETCH_WARD_DROPDOWN_FAILURE`,

    FETCH_LSGI_DROPDOWN: `${STATE_REDUCER_KEY}/FETCH_LSGI_DROPDOWN`,
    FETCH_LSGI_DROPDOWN_REQUEST: `${STATE_REDUCER_KEY}/FETCH_LSGI_DROPDOWN_REQUEST`,
    FETCH_LSGI_DROPDOWN_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_LSGI_DROPDOWN_SUCCESS`,
    FETCH_LSGI_DROPDOWN_FAILURE: `${STATE_REDUCER_KEY}/FETCH_LSGI_DROPDOWN_FAILURE`,

    FETCH_LSGI_TYPE_DROPDOWN: `${STATE_REDUCER_KEY}/FETCH_LSGI_TYPE_DROPDOWN`,
    FETCH_LSGI_TYPE_DROPDOWN_REQUEST: `${STATE_REDUCER_KEY}/FETCH_LSGI_TYPE_DROPDOWN_REQUEST`,
    FETCH_LSGI_TYPE_DROPDOWN_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_LSGI_TYPE_DROPDOWN_SUCCESS`,
    FETCH_LSGI_TYPE_DROPDOWN_FAILURE: `${STATE_REDUCER_KEY}/FETCH_LSGI_TYPE_DROPDOWN_FAILURE`,

    GET_OTP_DETAILS: `${STATE_REDUCER_KEY}/GET_OTP_DETAILS`,
    GET_OTP_DETAILS_REQUEST: `${STATE_REDUCER_KEY}/GET_OTP_DETAILS_REQUEST`,
    GET_OTP_DETAILS_SUCCESS: `${STATE_REDUCER_KEY}/GET_OTP_DETAILS_SUCCESS`,
    GET_OTP_DETAILS_FAILURE: `${STATE_REDUCER_KEY}/GET_OTP_DETAILS_FAILURE`,

    POST_OTP_DETAILS: `${STATE_REDUCER_KEY}/POST_OTP_DETAILS`,
    POST_OTP_DETAILS_REQUEST: `${STATE_REDUCER_KEY}/POST_OTP_DETAILS_REQUEST`,
    POST_OTP_DETAILS_SUCCESS: `${STATE_REDUCER_KEY}/POST_OTP_DETAILS_SUCCESS`,
    POST_OTP_DETAILS_FAILURE: `${STATE_REDUCER_KEY}/POST_OTP_DETAILS_FAILURE`,

    COMMON_DOWNLOAD_FILE: `${STATE_REDUCER_KEY}/COMMON_DOWNLOAD_FILE`,
    COMMON_DOWNLOAD_FILE_REQUEST: `${STATE_REDUCER_KEY}/COMMON_DOWNLOAD_FILE_REQUEST`,
    COMMON_DOWNLOAD_FILE_SUCCESS: `${STATE_REDUCER_KEY}/COMMON_DOWNLOAD_FILE_SUCCESS`,
    COMMON_DOWNLOAD_FILE_FAILURE: `${STATE_REDUCER_KEY}/COMMON_DOWNLOAD_FILE_FAILURE`,

    RESEND_OTP: `${STATE_REDUCER_KEY}/RESEND_OTP`
};

export const logout = createAction(ACTION_TYPES.LOG_OUT);
export const navigateTo = createAction(ACTION_TYPES.NAVIGATE_TO);
export const refresh = createAction(ACTION_TYPES.REFRESH_CURRENT_PATH);
export const fetchStateDropDown = createAction(ACTION_TYPES.FETCH_STATE_DROPDOWN);
export const fetchDistrictDropDown = createAction(ACTION_TYPES.FETCH_DISTRICT_DROPDOWN);
export const fetchWardDropDown = createAction(ACTION_TYPES.FETCH_WARD_DROPDOWN);
export const fetchLSGITypeDropDown = createAction(ACTION_TYPES.FETCH_LSGI_TYPE_DROPDOWN);
export const fetchLSGIDropDown = createAction(ACTION_TYPES.FETCH_LSGI_DROPDOWN);
export const getOtp = createAction(ACTION_TYPES.GET_OTP_DETAILS);
export const resendOtp = createAction(ACTION_TYPES.RESEND_OTP);
export const postOtp = createAction(ACTION_TYPES.POST_OTP_DETAILS);
export const commonFileDownload = createAction(ACTION_TYPES.COMMON_DOWNLOAD_FILE);
