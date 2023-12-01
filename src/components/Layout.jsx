import * as React from 'react';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Layout() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(true);

    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header onToggleDrawer={handleToggleDrawer} />
            {isDrawerOpen && (<Sidebar />)}

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <main style={{ width: '1200px', overflowX: 'auto' }}>
                    <Outlet />
                </main>
            </Box>
        </Box>
    );
}