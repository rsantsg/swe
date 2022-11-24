import React from 'react'
import Edit from './Edit'
import EditCard from './EditCard'
import { useState, useEffect} from 'react'

/**
 * This component allows to display data from the API call. 
 * Each card is independly render. 
 * @param {*} param0 Props 
 * @returns Render a card. 
 */
const Card = ({id,data }) => {
  const [check, setCheck] = useState(false)
  const [post, setPost] = useState(true)

  console.log(data)
  const onClick = ()=> {
    setCheck(value => !value)
    setPost(value=> !value)
  }
  const onPost = () => {
    setPost(value => !value )
    setCheck(value => !value)
  }

  //console.log(check)
  if( check){
    return(
    
    <div className ="card">
      <Edit onClick={onPost} label = {"Done"}/>

        <header>
      <h1><strong>Name: {data.food_name}</strong></h1>

      </header>
      <section>
      <p>Brand:{data.brand_name} </p>

      </section>
    </div>
    )
  }
  else if(post){
    return(
      <div className ="card">
        <Edit onClick={onClick} label = {"Edit"}/>
        <header>
      <h1><strong>Name: {data.food_name}</strong></h1>

      </header>
      <section>
      <p>Brand:{data.brand_name} Calories:{data.nf_calories} Serving:{data.serving_qty}</p>

      </section>
    </div>

    )
  }
  else{
    return (
      <div className ="card">
          <Edit onClick={onClick} label = {"Edit"}/>
          <header>
        <h1><strong>Name: {data.food_name}</strong></h1>

        </header>
        <section>
        <p>Brand:{data.brand_name} Calories:{data.nf_calories} Serving:{data.serving_qty}</p>

        </section>
      </div>
    )
  }
}

export default Card