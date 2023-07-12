import styled from '@emotion/styled';

export const StatisticSection = styled.section`
margin: 50px auto;
width: 300px;
background-color: aliceblue;
border-radius: 5px;
box-shadow: 2px 2px 2px 0px rgba(1,1,1,0.3);
border-radius: 4px;
overflow:hidden;
`;

export const Title = styled.h2`
text-align: center;
margin: 0;
padding-top:18px;
padding-bottom: 18px;
color: rgba(1,1,1,0.6);
background-color:#85bef0;

`;

export const StatList = styled.ul`
width: 100%;
list-style: none;
display: flex;
justify-content: space-between;
margin: 0 auto;
padding: 0;
`;

const getColor = () => {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   const color = "#" + randomColor;
   return color;
}

export const Item = styled.li`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
padding-top: 10px;
padding-bottom: 10px;
width: calc(100%/5);
background-color: ${getColor};
`;

export const Label = styled.span`
display: inline-block;
`;
export const Percentage = styled.span`
display: inline-block;
font-size: 22px;
`;

