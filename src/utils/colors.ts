import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#000000"
        },
        background: {
            default: "#eeece6"
        }
    },
});

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff"
        },
        background: {
            default: "#333333"
        }
    },
    components: {
        MuiDivider: {
            defaultProps: {
                color: "#ffffff"
            }
        }
    }
});

export { lightTheme, darkTheme }