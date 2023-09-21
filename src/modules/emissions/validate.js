/* eslint-disable camelcase */
import * as Yup from "yup";

export const emissionRouteFilter = Yup.object().shape({
    Start_Port_Id: Yup.object().required("Start Port Required"),
    End_Port_Id: Yup.object().required("End Port Required"),
    Total_Distance: Yup.object().required("Total Distance Required"),
    Length: Yup.object().required("Length Required"),
    Breadth: Yup.object().required("Breadth Required"),
    Depth: Yup.object().required("Depth Required"),
    Draft: Yup.object().required("Draft Required"),
    Grt: Yup.object().required("Grt Required"),
    Dwt: Yup.object().required("Dwt Required"),
    Total_Cargo_Onboard: Yup.object().required("Total Cargo Onboard Required"),
    Cargo_Mt: Yup.object().required("Cargo Mt Required"),
    Avg_Actual_Speed_Logged: Yup.object().required("Avg Actual Speed Logged Required"),
    Avg_Draft_Fore: Yup.object().required("Avg Draft Fore Required"),
    Avg_Draft_After: Yup.object().required("Avg Draft After Required"),
    Avg_Displacement: Yup.object().required("Avg Displacement Required"),
    Tot_ME_Run_Hours: Yup.object().required("Total ME Run Hours Required"),
    Log_Time_Duration: Yup.object().required("Log Time Duration Required"),
    Avg_AE_Power: Yup.object().required("Avg AE_Power Required"),
    Vessel_Type: Yup.object().required("Vessel Type Required"),
    Sub_Type: Yup.object().required("Sub Type Required")
});


