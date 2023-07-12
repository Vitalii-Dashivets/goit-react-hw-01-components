import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ data } ) {
    return (
        data.map(({ avatar, name, isOnline, id }) => {
            
            return (
                <FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                    key={id}
                />
            )
        })
    )
}

FriendList.propTypes = {
    data: PropTypes.arrayOf(
         PropTypes.object
    )
  }