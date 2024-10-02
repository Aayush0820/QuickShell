import {useMemo } from 'react';
import './grid.css'
import Column from '../Column/Column';
import PropTypes from 'prop-types';

function Grid({ gridData, grouping, userIdToData }) {
    const keys = useMemo(() => Object.keys(gridData), [gridData]);

    return (
        <div className='grid'>
            {keys.map((k) => <Column key={k} tickets={gridData[k] } grouping={grouping} groupBy={k} userIdToData={userIdToData} />)}
        </div>
    );
}

Grid.propTypes = {
    gridData: PropTypes.objectOf(PropTypes.array).isRequired, 
    grouping: PropTypes.string.isRequired, 
    userIdToData: PropTypes.objectOf(PropTypes.shape({ 
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired,
    })).isRequired,
};

export default Grid;