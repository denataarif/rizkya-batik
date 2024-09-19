import React,{useState} from 'react'
import Typhograph from '../Typhograph/Typhograph'
import assets from '../../../Assets/index.js'
const Select = (props) => {
  
  const {label, className, Catagories, Toggle} = props
  const [isHover, Setishover] = useState(false)
  
  return (
    <>
        <div className='Static Dropdown flex justify-between items-center gap-x-2 hover:text-isActive focus:text-isActive active:text-isActive' onMouseEnter={()=>Setishover(true)} onMouseLeave={()=>Setishover(false)} >
          <Typhograph children={label} className={`${className} font-normal`}/>
          {
            isHover === false ? <img src={assets.Dropdown} alt="Icon-Dropdown" /> : <img src={assets.activeDropdown} alt="Icon-Dropdown" />
          }
        </div>

        <div className={`absolute z-10 ${Toggle === false ? `hidden` : ``} rounded-lg py-2` }>
          {
            Catagories.map((items, index) => {
              return(
                <ul>
                  <li key={index} className={`${Toggle === true ? `block` : ``} bg-black hover:bg-white gap-y-1 px-2 hover:text-isActive`}>{items}</li>
                </ul>
              )
            })
          }
        </div>
    </>
  )
}

export default Select