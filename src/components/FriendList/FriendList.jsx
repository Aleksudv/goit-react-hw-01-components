import PropTypes from 'prop-types';
import { Friends } from "components/Friends/Friends";

export const FriendsList = ({friends}) => {
    return (
        <div>
            {friends.map(friend => (
                <Friends key={friend.id} friend={friend} />
            ))}
        </div>
    );
};


FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number.isRequired })
    ).isRequired,
}
