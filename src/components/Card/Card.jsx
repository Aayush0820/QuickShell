import './card.css';
import PropTypes from 'prop-types';
import UserIcon from '../UserIcon/UserIcon';
import { getPriorityIcon, getStatusIcon } from '../../utils/icons';
import { getPriorityLabel } from '../../utils';
//import { threedot } from '../../assets';

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon, hidePriority}) {
  const priorityNumber = getPriorityLabel(ticket.priority);
  const priorityIcon = getPriorityIcon(priorityNumber);
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {hideStatusIcon ? null : getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
      {hidePriority ? null :<div className='more-icon-container'>
        {priorityIcon}
        </div>}
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tag: PropTypes.arrayOf(PropTypes.string).isRequired,
    userId: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
  }).isRequired,
  userData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
  }).isRequired,
  hideStatusIcon: PropTypes.bool.isRequired,
  hideProfileIcon: PropTypes.bool.isRequired,
  hidePriority: PropTypes.bool.isRequired,
};

export default Card;
