import PropTypes from "prop-types";
import { FriendListCard, Avatar, Name, Online } from "./FriendListItem.styled";

export default function FriendListItem({ avatar, name, isOnline,id }) {
    return (
        <FriendListCard >
            <Online isOnline={isOnline}>{isOnline }</Online>
            <Avatar src={avatar} alt="User avatar"  />
            <Name>{ name}</Name>
        </FriendListCard>
    )
}

FriendListItem.propTypes = {
            id: PropTypes.number,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        
}