import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/homepage/Footer";
import Header from "./components/homepage/Header";
import { AppContext } from "./contexts/AppContext";
import { publicRoutes } from "./routes/routes";
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
        return <div style={{ color: "red", padding: "20px" }}>{envError}</div>;
    }

    return (
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
                        <Header />
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                return (
                                    <Route key={index} path={route.path} element={<Page />} />
                                );
                            })}
                        </Routes>
                    </Box>
                    <Footer />
                </Box>
            </div>
            <ToastContainer />
        </Router>
    );
}

export default App;
