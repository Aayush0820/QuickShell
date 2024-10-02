import './loader.css'
import PropTypes from 'prop-types';
function Loader({ fullscreen = true }) {
    return (
        <div className={`loader-container ${fullscreen && "fullscreen"}`}>
            <span className='loader'>Loading...</span>
        </div>
    );
}

Loader.propTypes = {
    fullscreen: PropTypes.bool,
};

export default Loader;