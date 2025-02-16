import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Stack, Toolbar } from "@mui/material";
import { NavLink } from 'react-router-dom';
import AgileLogo from "./AgileLogo.tsx";

const initialNavLinks = [
    
    { name: 'Template', path: '/templates' },
    { name: 'Criteria', path: '/criteria' },
];

const getNavLinks = (role: unknown) => {
    switch (role) {
        case 'ADMIN':
            return [{ name: 'Assessment', path: '/assessments' },...initialNavLinks, { name: 'Admin', path: '/admin' }];
        case 'HEAD_OF_DEPARTMENT':
            return [{ name: 'Assessment', path: '/assessments' },...initialNavLinks];
        default:
            return initialNavLinks;
    }
};

const Header = () => {
    


    return (
        <>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1 }}>
                            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <AgileLogo />
                            </NavLink>
                        </Box>
                        <Stack direction="row" spacing={2}>
                            {getNavLinks('USER').map((link) => (
                                <NavLink key={link.name} to={link.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </Stack>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
};

export default Header;