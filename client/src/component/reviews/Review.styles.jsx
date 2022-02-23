import styled from 'styled-components';
import { BsHandThumbsUpFill } from 'react-icons/bs';

export const Container = styled.div`
margin: auto;
width: 1200px;
`;

export const Content = styled.section`
height: 50px;
width: 100%;
margin: 20px 0px;
padding: 15px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
text-align: left;
color: #000000;
font-size: 14px;
font-weight: thin;
font-family: Helvetica;
`;

export const ReviewListContainer = styled.div`
margin: 15px;
flex-shrink: 0;
object-fit: cover;
// flex-grow: 1;
padding; 10px;
text-align: left;
align-items: left;
width: 800px;
float: left;
`;

export const RatingBreakdownContainer = styled.div`
margin: 15px;
text-align: left;
align-items: left;
float: left;
height: 350px;
width: 250px;
background-color: #fff;
`;

export const ReviewContainer = styled.div`
margin: 15px;
padding: 8px 10px;
background-color: #ededed;
background-position: center;
background-repeat: no-repeat;
text-align: left;
align-items: left;
height: 210px;
width: 650px;
`;

export const ReviewTitle = styled.h1`
font-size: 20px;
font-weight: bold;
margin: 10px;
float: left;
`;

export const Title = styled.h2`
font-size: 15px;
font-weight: bold;
margin: 10px 0px;
padding-top: 1rem;
`;

export const Subtext = styled.p`
font-size: 16px;
font-weight: thin;
padding-top: 1rem;
text-align: right;
align-items: right;
`;

export const SelectContainer = styled.div`
margin: 10px;
padding: 8px 10px;
width: 500px;
float: left;
`;

export const Thumb = styled(BsHandThumbsUpFill)`
  background-color:  '#000';
  font-size: 20px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all .5s ease;
  order:6;
  &:hover{
      transform: translateY(-.5rem) scale(1.02);
      color: #0000FF;
  }
  &:active{
      transform: translateY(.5rem);
  }
`;

// @media only screen and (max-width:1600px) {
//     height: 85vh;
// }
