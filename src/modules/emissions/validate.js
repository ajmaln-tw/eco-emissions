/* eslint-disable camelcase */
import * as Yup from "yup";

export const emissionRouteFilter = Yup.object().shape({
    Start_Port_Id: Yup.object().required("Start Port Required"),
    End_Port_Id: Yup.object().required("End Port Required"),
    Total_Distance: Yup.string().required("Total Distance Required"),
    Length: Yup.string().required("Length Required"),
    Breadth: Yup.string().required("Breadth Required"),
    Depth: Yup.string().required("Depth Required"),
    Draft: Yup.string().required("Draft Required"),
    Grt: Yup.string().required("Grt Required"),
    Dwt: Yup.string().required("Dwt Required"),
    Total_Cargo_Onboard: Yup.string().required("Total Cargo Onboard Required"),
    Cargo_Mt: Yup.string().required("Cargo Mt Required"),
    Avg_Actual_Speed_Logged: Yup.string().required("Avg Actual Speed Logged Required"),
    Avg_Draft_Fore: Yup.string().required("Avg Draft Fore Required"),
    Avg_Draft_After: Yup.string().required("Avg Draft After Required"),
    Avg_Displacement: Yup.string().required("Avg Displacement Required"),
    Tot_ME_Run_Hours: Yup.string().required("Total ME Run Hours Required"),
    Log_Time_Duration: Yup.string().required("Log Time Duration Required"),
    Avg_AE_Power: Yup.string().required("Avg AE_Power Required"),
    Vessel_Type: Yup.object().required("Vessel Type Required"),
    Sub_Type: Yup.object().required("Sub Type Required")
});


