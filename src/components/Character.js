// Write your Character component here
import React, {useState} from 'react';



const Character = ({character}) => {

    const {list, setList} = useState()
 
    setList(list.map(()=> {
        return (
            <div>
                <Character character={character} key={character.name}/>    
            </div>     
        )
    }))
    console.log(Character);
}

export default Character;