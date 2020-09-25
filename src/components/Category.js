import React from 'react';
import PropTypes from 'prop-types';
import {Paper, Typography, List} from '@material-ui/core'

import './Category.css';
import priorityMap from '../service/PriorityMap';
import EntryItem from './EntryItem';

const PaperStyle = {
    borderRadius: '2%'
}

const TitleStyle = {
    borderRadius: '2% 2% 0% 0%',
    color: 'white'
}

// const handleDelete = () => {
//     console.log('test')
// }

function Category(props){
    // TODO: fix it so that if there is no data the categories are still displayed
    const {data, priority, handleDelete} = props;
    if(!data) {
        return null
    }
    const priorityValues = priorityMap[priority]
    const entries = data.map((entry) => <EntryItem title={entry.title} key={entry.id} id={entry.id} handleDelete={handleDelete}/>)
    return(
        <Paper className="CategoryWrapper" style={{backgroundColor: priorityValues.colour,...PaperStyle}}>
            <Typography variant='h4' style={{...TitleStyle, backgroundColor: priorityValues.titleColour}}>
                {priorityValues.title}
            </Typography>
            <List>
                {entries}
            </List>
        </Paper>
    )
}

Category.propTypes = {
    priority: PropTypes.string,
    data: PropTypes.arrayOf(Object)
}

export default Category;
