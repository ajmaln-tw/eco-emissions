import { Components } from "../../../common/components";

const { Box, Grid } = Components;
const Header = () => {
    //, "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
    // const drawerToggle = useSelector(state => state[STATE_REDUCER_KEY]).drawerToggle;

    return (
        <Grid
            component="header"
            sx={{ backgroundColor: "secondary.main", pb: 0.4, width: "100%", height: "83px", position: "sticky", top: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
            <Box
                sx={{
                    display: "flex", justifyContent: "space-between", alignItems: "center", mr: 1, borderRadius: "10px", p: 1, position: "relative"
                }}
            >
                <Box sx={{ minWidth: "140px" }}>
                    <Box sx={{ m: 1, mr: 1, p: 2 }}>
                    </Box>
                </Box>
            </Box>
        </Grid >
    );
};

export default Header;
