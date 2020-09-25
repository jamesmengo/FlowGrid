import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemIcon, Checkbox, ListItemText, Button } from '@material-ui/core';
// import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EntryService from '../service/EntryService';
import axios from 'axios';

function EntryItem(props) {
    const { title, id, handleDelete } = props;
    console.log(props)
    return (
        <ListItem>
            <ListItemIcon>
                    <Checkbox />
            </ListItemIcon>
            <ListItemText>
                {title}
            </ListItemText>
            {/* <DeleteOutlinedIcon /> */}
            <Button variant="outlined" size="small" onClick={() => {
                handleDelete(id)
            }} >
                Delete
            </Button>
        </ListItem>
    )
}

EntryItem.propTypes = {
    title: PropTypes.string
}

export default EntryItem;