import React from 'react';
import './usericon.css';
import PropTypes from 'prop-types';

function UserIcon({ name, available }) {
    const text = React.useMemo(() => {
        return name.split(" ").map((item) => item[0]).join("");
    }, [name]);

    return (
        <div className='usericon-container'>
            <div className='usericon-text'>{text}</div>
            <div className={`user-status ${available && "available"}`}></div>
        </div>
    );
}

UserIcon.propTypes = {
    name: PropTypes.string.isRequired, 
    available: PropTypes.bool.isRequired, 
};

export default UserIcon;