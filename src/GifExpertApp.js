
import React, {useState} from 'react'
import { AddCategory }  from './components/AddCategory';
import { GifGrid }  from './components/GifGrid';
    
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Friends']);

    // const handleAdd = () => {
    //     //setCategories( [...categories, 'Nombre4'] ); 
    //     //setCategories( ['Nombre1', ...categories] );
    //     setCategories( cats => ['Nombre1', ...categories] );
    // }


  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <hr />  
        
        <ol>
            {
                categories.map( category => (
                    <GifGrid
                    key= { category }
                    category= { category } />     
                ))  
            }  

        </ol>
   
    
    </>
  )
}
