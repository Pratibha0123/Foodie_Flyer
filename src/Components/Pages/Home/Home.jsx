import { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import ExplorMenu from '../../ExploreMenu/ExplorMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay';
import AppDownload from '../../AppDownload/AppDownload';


function Home() {
    const [category,setCategory] =useState("All");
    return (
   
    <div>
        <Header/>
        <ExplorMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} setCategory={setCategory}/>
        <AppDownload/>
       
    </div>
  )
}

export default Home