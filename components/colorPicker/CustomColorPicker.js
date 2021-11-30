import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { HexColorPicker, HexColorInput } from 'react-colorful'
export default function CustomColorPicker({color, setColor, close}){
  // #aabbcc is set as the default color in the color picker
  // You can change it to any color by changing the hex value in the useState hook
  return (
    <div>
      <HexColorPicker color={color} onChange={setColor} />
      <div onClick={close} className="bg-lightPrimary h-8 w-full rounded-md shadow-inner items-center p-1
                        hover:shadow-innerHover transition-all duration-300 ease-linear text-white cursor-pointer text-center flex justify-center font-bold text-lg">
          <FontAwesomeIcon icon={faCheck} color="white"/>
      </div>
    </div>
  )
}
