import { Box, Typography } from "@mui/material"
import {COLORS} from "../../constants/constant";

const coreValues = [
    "Continuous Growth",
    "Competence Improvement",
    "Personalize",
    "Focus",
    "Actionable"
]

const HomePage = () => {
    return (
        <Box>
            <Box sx={styles.welcomeBg}>
                <Typography variant="h4" sx={styles.welcomeTitle}>Welcome to Agile Assessment</Typography>
                <Typography variant="h5" sx={styles.text}>For Axon Active memebers, <span style={{color: `${COLORS.PRIMARY}`}}>Agile Assessment</span>  is a tool that drive</Typography>
                <Box sx={[styles.coreValue, {marginBottom: 6}]}>
                    {coreValues.slice(0, 2).map((value, index) => (
                        <Typography key={index} sx={styles.coreValueText}>{value}</Typography>
                    ))}
                </Box>
                <Typography variant="h5" sx={styles.text}>Unlike traditional Excel, our product are</Typography>
                <Box sx={styles.coreValue}>
                    {coreValues.slice(2, 5).map((value, index) => (
                        <Typography key={index} sx={styles.coreValueText}>{value}</Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

const styles = {
    welcomeBg: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        paddingX: {xs: 5, md: 10},
        paddingY: 5
    },
    welcomeTitle: {
        color: `${COLORS.PRIMARY}`,
        fontStyle: "italic",
        fontWeight: "bold",
        marginBottom: 6
    },
    coreValue: {
        display: 'flex',
        flexDirection: {
            xs: 'column',
            md: 'row'
        },
        justifyContent: 'center',
        gap: {xs: 2, md: 4}
    },
    coreValueText: {
        fontSize: {xs: 22, md: 28},
        color: `${COLORS.SECONDARY}`,
        fontWeight: "bold",
        textTransform: 'uppercase'
    },
    text: {
        fontWeight: "bold",
        marginBottom: 3
    }
}

export default HomePage