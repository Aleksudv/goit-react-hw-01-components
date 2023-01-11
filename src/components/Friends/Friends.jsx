import PropTypes from 'prop-types';
import css from './Friends.module.css'

export const Friends = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <li className={css.item}>
            <span className={`${css.status} ${
          isOnline ? css.isOnline : css.isOffline
        }`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{ name}</p>
        </li>
    )
}

Friends.propType = {
    friend: PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.oneOf(['true', 'false']),        
    }).isRequired,
}