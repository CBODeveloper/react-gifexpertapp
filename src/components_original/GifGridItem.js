import React from 'react'

export const GifGridItem = ({ title, url }) => {

  console.log({ url });

    return (
    <div className="card animate__animated animate__bounce animate__delay-2s">
        <img scr={ url } alt={ title } /> 
        <p> { title } </p>            
    </div>
  )
}
