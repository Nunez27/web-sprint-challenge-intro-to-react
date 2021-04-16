// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
    color: black;
    font-weight: bold;
    font-size: 1.2rem;
    background-color: transparent;
    padding: 4%;
    display: flex;
    justify-content: center;
    flex-direction: column;
   

    &:hover {
        color: 'orange'

    }
`



const Character = (props) => {
    const {data} = props

    return (
        <StyledBody>
        <div className='Title'>
            <h1>{data.name}</h1>
        </div>
        <div className='data'>
            <p>Gender: {data.gender}</p>
            <p>Mass: {data.mass}</p>
            <p>Birth Year: {data.birth_year}</p>
        </div>
        </StyledBody>
    )
}

export default Character;