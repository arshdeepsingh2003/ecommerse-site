import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/NewCollections';
import Item from '../Item/Item'
export const NewCollections = () => {
  return (
    <div className='newcollections'>
        <h1>NEW COLLECTIONS</h1>
        <hr></hr>
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}
export default NewCollections;
