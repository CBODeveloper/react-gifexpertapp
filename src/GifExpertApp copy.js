import React, {useState} from 'react'


export const GifExpertApp = () => {

   // const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One punch']);

    const handleAdd = () => {
        //setCategories( [...categories, 'Nombre4'] ); 
        //setCategories( ['Nombre1', ...categories] );
        setCategories( cats => ['Nombre1', ...categories] );
    }


  return (
    <>
    <h2>GifExpertApp</h2>
    <hr />
    
    <button onClick={ handleAdd }>Agregar</button>
    <ol>
        {
            categories.map( (category, i) => {
                return <li key={ category }>{ category } </li>

            })
        }  

    </ol>
   
    
    </>
  )
}
