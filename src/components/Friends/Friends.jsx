import PropTypes from 'prop-types';

export const Friends = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <div>
        <h2>{name}</h2>
        <img src={avatar} alt={name} width='100' />
        <h2>{isOnline}</h2>
        </div>
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