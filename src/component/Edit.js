import React from 'react'

/**
 * This component allows to display data from the API call. 
 * Each card is independly render. 
 * @param {*} param0 Props 
 * @returns Render a card. 
 */
const Edit = ({onClick, label}) => {
    
      return (
    <>
        <button onClick={onClick} type='button'> {label}</button>

    </>
  )
}

export default Edit