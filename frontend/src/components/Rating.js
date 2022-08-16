import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FaStar } from 'react-icons/fa'

const colors = {
  yellow: "#FFBA5A",
  grey: "#A9A9A9",
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textarea: {
    border: '1px solid #A9A9A9',
    borderRadius: 5,
    width: 300,
    minHeight: 100,
    padding: 10,
  },
  button: {
    border: '1px solid #A9A9A9',
    borderRadius: 5,
    width: 300,
    margin: '20px 0',
    padding: 10,
  },
}

function Rating() {
 const stars = Array(5).fill(0);
const [currentValue, setCurrentValue] = React.useState(0);
const [hoverValue, setHoverValue] = React.useState(undefined)

const handleClick = value =>{
    setCurrentValue(value)
};

const handleMouseOver = value => {
    setHoverValue(value)
};

const handleMouseLeave = () => {
setHoverValue(undefined)
}

  return (
    <div style={styles.container}>
      <h2>Ratings for RAJH Frames</h2>
      <div style = {styles.stars}>

    {stars.map((_, index) => {
        return(
            <FaStar
            key = {index} 
            size = {24}
            style = {{
                marginRight: 10,
                cursor: 'pointer'
            }}

            color = {(hoverValue|| currentValue) >index ? colors.yellow : colors.grey}
            onClick= {() => handleClick(index +1)}
            onMouseOver={() => handleMouseOver(index +1)}
            onMouseLeave={handleMouseLeave}
            />
        )
    })}

      </div>
      <textarea style = {styles.textarea} placeholder="Leave feedback here"/>
      <button style={styles.button}>Submit</button>
      
    </div>
  )
}



export default Rating
