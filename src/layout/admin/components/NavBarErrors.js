import React from 'react'

export const NavBarErrors = () => {
    return (
        <>
            <Menu       
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                
                transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
                }}
            >
                <MenuItem>hola</MenuItem>
                <MenuItem>hola</MenuItem>
            </Menu>
            <Badge  badgeContent={4} color="primary">
                <FontAwesomeIcon icon={faExclamationTriangle} />
            </Badge>
        </>
    )
}
