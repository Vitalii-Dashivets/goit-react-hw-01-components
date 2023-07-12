import styled from '@emotion/styled';

export const FriendListCard = styled.li`
   display: flex;
   align-items: center;
   width: 300px;
   background-color: aliceblue;
   border-radius: 10px;
   margin: 10px auto;
   padding: 10px;
   box-shadow: 2px 2px 2px 0px rgba(1,1,1,0.3);
`;

export const Avatar = styled.img`
    width: 70px;
    height: 70px;
    margin-left: 20px;
`;
export const Name = styled.p`
    margin-left: 30px;
    font-size:30px;
    font-weight: 500;
`;
export const Online = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => {
        switch (props.isOnline) {
            case true:
                return 'green';
            case false:
                return 'red';
            default: return;
        }
    }
};
`;