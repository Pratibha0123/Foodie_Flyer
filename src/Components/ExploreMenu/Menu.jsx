import { useState } from 'react';
import ExplorMenu from './ExplorMenu'
import FoodDisplay from '../FoodDisplay/FoodDisplay';

function Menu() {
     const [category,setCategory] =useState("All");
  return (
    <div>
       <ExplorMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Menu
