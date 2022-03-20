import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'

const style = {
    width: '100%',
    maxWidth: 160,
    bgcolor: 'black',
    color: 'white',
}

export default function SubMenu() {
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
                <ListItemText primary="Nature" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText primary="Travel" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Family" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Wedding" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Love story" />
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemText primary="Sport" />
            </ListItem>
        </List>
    )
}
