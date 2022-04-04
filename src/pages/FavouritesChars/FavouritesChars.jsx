import React from 'react'
import { useFavouritesContext } from '../../shared/context/FavouritesContext';
import {RiDislikeLine as DeleteBtn} from 'react-icons/ri'

const FavouritesChars = () => {
    const {favChars, eliminateFavChar} = useFavouritesContext();
  return (
    <ul>
        {favChars && favChars.map((char)=>{
            return(
                <li key = {char._id} className='characterCard'>
                  <div className='characters'>
                    <img src={char.image} alt={char.name}/>
                    <p>{char.name}</p>
                  </div>
                <DeleteBtn size= {30} color = "orange" onClick={()=>eliminateFavChar(char)}/>
                </li>
            )
        })}
    </ul>
  )
}

export default FavouritesChars