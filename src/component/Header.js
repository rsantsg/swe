import React from 'react'
import PropTypes from 'prop-types'
/**
 * This component makes a simple navigation bar. 
 * It's linked it allows the cards associated them to be render. 
 * @param {*} param0 Props
 * @returns Renders NavBar. 
 */
const Header = ({home, mcdonald,tacoBell}) => {
  console.log(home)  
  return (
    <div className = 'header'>
        <nav>
        
            <a href ='#' onClick={home}>Cake</a>|
            <a href='#' onClick ={mcdonald}>Chipotle</a> |
            <a href= '#' onClick={tacoBell}>Trader Joe's</a> |
        </nav>
    </div>
  )
}
Header.defaultProps = {
  home : "",
  mcdonald : "", 
  tacoBell: ""}
Header.protoTypes = {
  placeholder: PropTypes.string 
}
export default Header