import React, { useState } from 'react';
import { Avatar as ProAvatar, Menu as MuiMenu, MenuItem, Divider, ListItemIcon, IconButton } from '@mui/material';
import { Edit as EditIcon, Receipt as ReceiptIcon, PersonAdd, Settings, Logout } from '@mui/icons-material';

const Profile = ({ url }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAccountClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAccountMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                onClick={handleAccountClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls="account-menu"
                aria-haspopup="true"
                aria-expanded={Boolean(anchorEl)}
            >
                <ProAvatar src={url} />
            </IconButton>
            <MuiMenu
                id="account-menu"
                open={Boolean(anchorEl)}
                onClose={handleAccountMenuClose}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                getcontentanchorel={null}
            >
                <MenuItem onClick={handleAccountMenuClose}>
                    <ProAvatar src={url} />
                    Profile
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAccountMenuClose}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    Edit Profile
                </MenuItem>
                <MenuItem onClick={handleAccountMenuClose}>
                    <ListItemIcon>
                        <ReceiptIcon fontSize="small" />
                    </ListItemIcon>
                    Bills
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleAccountMenuClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleAccountMenuClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleAccountMenuClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </MuiMenu>
        </>
    );
};

export default Profile;
