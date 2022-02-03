import React, { useContext } from 'react';
import Card from './Card'
import {Context} from '../utils/GlobalContext'

export default function CardList() {
    const {cards} = useContext(Context);
  return (
      <div className='cardlist'>
        {cards.map((card) =>{
            return <Card key={card._id} pic={card.imageUrl} name={card.name} surname={card.surname}/>
        })}      
      </div>
  );
}
