import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';  


export const GifGrid =  ({ category }) => {

    const { data:images, loading } = useFetchGifs( category ); 
  

    return (
    <>
        <h3 className="animate__rubberBand"> { category } </h3>

        { /*loading ? 'Cargando...' : 'Data cargada' */}
        { loading && <p className="animate__swing">Loaing...</p> }
        <div className="car-grid">   
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                    
                }
        </div>
    </>
  )
}
