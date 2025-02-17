import { Box, ThemeProvider } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppContext } from "./contexts/AppContext";
import { publicRoutes } from "./routes/routes";
import theme from "./theme/stylesheet";
import { checkEnv } from "./utils/checkEnv";

function App() {
    const context = useContext(AppContext);
    const [envError, setEnvError] = useState<string | null>(null);

    useEffect(() => {
        const error = checkEnv();
        if (error) {
            setEnvError(error);
        } else if (context && typeof context.setData === "function") {
            context.setData({ initial: "data" });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (envError) {
        return <div style={{ color: theme.palette.error.main, padding: "20px" }}>{envError}</div>;
    }

    return (
        <ThemeProvider theme={{ theme }}>
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <div className="App">
                    <Box
                        sx={{
                            minHeight: "100vh",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Routes>
                                {publicRoutes.map((route, index) => {
                                    const Page = route.component;
                                    return (
                                        <Route key={index} path={route.path} element={<Page />} />
                                    );
                                })}
                            </Routes>
                        </Box>
                    </Box>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
