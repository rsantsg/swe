import React from 'react'
import Search from './Search'
import Card from './Card'
import PropTypes from 'prop-types'
/**
 * This is the body component. Cards are render on within this component.
 * @param {*} param0 Prop
 * @returns Renders the body only when cards are call. 
 */
const Body = ({data}) => {
  
  console.log( `This is data ${data}`)
  if(typeof data === 'object'){

    return(
      <>
       {
       data.map((e)=>(
        
        <Card  data={e} />
       
      ))
    }
      </>
      
    )

  }
  else{
    return (
      <>
     
      
      </>
    )
  }
 
}

export default Body