import { Box, Typography } from "@mui/material";
import { COLORS } from "../../constants/constant";

const Footer = () => {
    return (
        <Box sx={styles.footerBox}>
            <Box sx={styles.footerLogo}>
                <Typography sx={styles.text}>© Copyright 2025. AXON ACTIVE VIETNAM. All Right Reserved</Typography>
            </Box>

            <Typography sx={styles.text}>Version 0.3.0</Typography>
        </Box>
    )
}

const styles = {
    footerLogo: {
        display: 'flex',
        alignItems: {
            xs: 'start',
            md: 'center'
        },
        flexDirection: {
            xs: 'column',
            md: 'row'
        },
        gap: { md: 2 }
    },
    footerBox: {
        display: "flex",
        alignItems: {
            xs: 'start',
            md: 'center'
        },
        flexDirection: {
            xs: 'column',
            md: 'row'
        },
        gap: 0.5,
        justifyContent: "space-between",
        paddingY: 2,
        paddingX: 4,
        borderTop: `1px solid ${COLORS.LIGHT_GREY}`,
    },
    text: {
        fontSize: 14,
    }
}

export default Footer;