import React, { useState, useEffect } from 'react'
import door_closed5 from '../assets/door_closed5.jpg'
import door_open2dr from '../assets/door_open2dr.jpg'
import door_open2laurarotate from '../assets/door_open2laurarotate.jpg'
import chand from '../assets/chand.jpg'
import chandOn from '../assets/chandOn.jpg'

const Door = () => {
  const [isLeftDoorSelected, setLeftDoorSelected] = useState(door_closed5)
  const [isRightDoorSelected, setRightDoorSelected] = useState('')
  const [isLeftPlantMoved, setLeftPlantMoved] = useState(true)
  const [isMidPlantMoved, setMidPlantMoved] = useState(true)
  const [isChandelierSelected, setChandelierSelected] = useState(chand)
  const [isChandelierOn, setChandelierOn] = useState(true)

  const startLeftPlantStyle = {
    top: '34%',
    left: '-49%',
    transition: 'left 1s',
    'z-index': '10',
  }
  const endLeftPlantStyle = {
    top: '34%',
    left: '35%',
    transition: 'left 1s',
    'z-index': '10',
  }
  const startMidPlantStyle = {
    top: '34%',
    left: '35%',
    transition: 'left 1s',
  }
  const endMidPlantStyle = {
    top: '34%',
    left: '116%',
    transition: 'left 1s',
  }

  useEffect(() => {
    const timer = setTimeout(() => setRightDoorSelected(''), 1000)
    return () => clearTimeout(timer)
  })
  const moveLeftPlant = () => {
    setLeftPlantMoved(!isLeftPlantMoved)
  }
  const moveMidPlant = () => {
    setMidPlantMoved(!isMidPlantMoved)
  }
  const chandActiveButton = () => {
    setChandelierSelected(chandOn)
    setChandelierOn()
  }

  const doorsRight = isRightDoorSelected ? door_open2dr : door_closed5

  return (
    <div className="door_container">
      <button
        onClick={() => setLeftDoorSelected(door_open2laurarotate)}
        className="key_button"
      ></button>
      <button
        onClick={() => setRightDoorSelected(door_closed5)}
        className="key_button left"
      ></button>

      <img src={isLeftDoorSelected} className="door_left" alt={'doors'} />
      <img src={doorsRight} className="door_right" alt={'doors'} />

      <button
        onClick={moveLeftPlant}
        className="plant"
        style={isLeftPlantMoved ? startLeftPlantStyle : endLeftPlantStyle}
      ></button>
      <button
        disabled={isChandelierOn}
        onClick={moveMidPlant}
        className="plant"
        style={isMidPlantMoved ? startMidPlantStyle : endMidPlantStyle}
      ></button>
      <button onClick={chandActiveButton} className="plant right"></button>
      <img src={isChandelierSelected} className="chandOn_click" />
    </div>
  )
}
export default Door
