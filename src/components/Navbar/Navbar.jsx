import './navbar.css'
import DisplayDropdown from '../Dropdown/Dropdown';
import PropTypes from 'prop-types';

function Header({ grouping, setGrouping, ordering, setOrdering }) {

    return (
        <header>
            <DisplayDropdown grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
        </header>
    );
}

Header.propTypes = {
    grouping: PropTypes.string.isRequired,
    setGrouping: PropTypes.func.isRequired, 
    ordering: PropTypes.string.isRequired, 
    setOrdering: PropTypes.func.isRequired, 
};

export default Header;