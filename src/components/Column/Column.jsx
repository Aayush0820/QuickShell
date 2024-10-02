import { useMemo } from 'react';
import Card from '../Card/Card';
import "./column.css"
import PropTypes from 'prop-types';
import { getPriorityIcon, getStatusIcon } from '../../utils/icons';
import UserIcon from '../UserIcon/UserIcon';
import { add, threedot } from '../../assets';


function Column({ tickets, grouping, groupBy, userIdToData }) {

    const title = useMemo(() => {
        if (grouping === "status")
            return groupBy;
        if (grouping === "priority")
            return groupBy;
        if (grouping === "user")
            return userIdToData[groupBy].name;
    }, [grouping, groupBy, userIdToData]);

    const icon = useMemo(() => {
        if (grouping === "status")
            return getStatusIcon(groupBy);
        if (grouping === "priority")
            return getPriorityIcon(groupBy);
        if (grouping === "user")
            return <UserIcon name={userIdToData[groupBy].name} available={userIdToData[groupBy].available} />
    }, [grouping, groupBy, userIdToData])


    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    {icon}
                    <div className='column-title'>
                        {title}
                        <span className='count'>{tickets.length}</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                <img src={add} alt="add" width={14} height={14} />
                    <img src={threedot} alt="menu" width={14} height={14} />
                </div>
            </div>
            <div className='cards-container'>
                {tickets.map((ticket) => <Card key={ticket.id} ticket={ticket} userData={userIdToData[ticket.userId]} hideStatusIcon={grouping === "status"} hideProfileIcon={grouping === "user"} hidePriority={grouping === "priority"}/>)}
            </div>
        </div>
    );
}


Column.propTypes = {
    tickets: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            tag: PropTypes.arrayOf(PropTypes.string).isRequired,
            userId: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            priority: PropTypes.number.isRequired,
        })
    ).isRequired,
    grouping: PropTypes.oneOf(["status", "priority", "user"]).isRequired,
    groupBy: PropTypes.string.isRequired,
    userIdToData: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            available: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default Column;