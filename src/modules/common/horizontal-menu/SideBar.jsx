import { List, ListItemButton, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../constants";
// import { actions as sliceActions } from "../slice";
import { logout as logoutAction } from "../actions";
import "./sideBar.css";
import { Dashboard, Logout } from "../../../assets/svg";

export let active = {
    display: "flex",
    justifyContent: "space-evenly",
    color: "white.main",
    bgcolor: "primary.main",
    "&:hover": {
        color: "secondary.main",
        bgcolor: "primary.dark"
    },
    fontWeight: "600 !important"
};
export let inActive = {
    display: "flex",
    justifyContent: "space-evenly",
    color: "grey.main",
    bgcolor: "secondary.main",
    "&:hover": {
        color: "secondary.main",
        bgcolor: "primary.dark"
    }
};
const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const drawerToggle = useSelector(state => state[STATE_REDUCER_KEY]).drawerToggle;
    const dispatch = useDispatch();
    // const handleDrawer = () => dispatch(sliceActions.setUnsetDrawer());
    const handleLogout = () => {
        dispatch(logoutAction({ isManualLogout: true }));
    };
    let dashStyle = { ...inActive };
    if (location.pathname === "/dashboard") {
        dashStyle = { ...active };
    }


    let logout = {
        color: "white.main",
        height: "47px",
        fontSize: "14px",
        bgcolor: "red.main",
        "&:hover": {
            bgcolor: "red.dark"
        }
    };
    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "secondary.main",
        fontSize: "14px",
        width: 51,
        transition: "width ease-in-out 300ms",
        zIndex: 2000000,
        bgcolor: "red",
        borderRadius: 0,
        height: "100vh",
        position: "absolute",
        top: 1,
        left: 1,
        pt: 10
    };

    return (

        <Paper elevation={1} sx={mainStyle}>
            <List sx={{ px: 1.5, height: "calc(100vh - 240px) !important", overflowX: "hidden", overflowY: "auto" }}>
                <List sx={{ px: 0.1, py: 0, mb: 2, display: "flex", justifyContent: drawerToggle ? "flex-start" : "center" }}>
                    {/* <Box >
                        <IconButton type="button" onClick={handleDrawer}>
                            <Menu size="20px" />
                        </IconButton>
                    </Box> */}
                </List>
                <List sx={{ px: 0.1, py: 0 }}>
                    <ListItemButton className="button-sidebar" sx={{ ...dashStyle, px: 0, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../dashboard")}>
                        <Dashboard className="svg-Icon" />
                    </ListItemButton>
                </List>
            </List>
            <List sx={{ px: 1.0, pt: 6 }}>
                <List sx={{ px: 0.1, py: 0 }}>
                    <ListItemButton sx={{ ...logout, px: 1, py: 0 }} onClick={() => handleLogout()}>
                        <Logout />
                    </ListItemButton>
                </List>
            </List>
        </Paper >

    );
};

export default SideBar;
