// Write your Character component here
import React, {useState, useEffect} from 'react';



const Character = ({character}) => {
    const [individualCharacter, setIndividualCharacter] = useState([])

    setIndividualCharacter(individualCharacter.map(()=> {
        return (
            <Character character={character} key={character.id}/>
        )
    }))
}

export default Character;