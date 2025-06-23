import DarkOpenCard from "./DarkOpenCard"
import DarkCloseCard from "./DarkCloseCard"
import LightCloseCard from "./LightCloseCard"
import LightOpenCard from "./LightOpenCard"

const Card ={
    /**
     * @param {React.ReactNode} children
     * @param {string} [className='']
     * @param {React.CSSProperties} [style={}]
     * @param {lg|base|sm} [size='base']
     * @param {React.ElementType} [as="div"]
   */

   DarkCloseCard,

    /**
     * @param {React.ReactNode} children
     * @param {string} [className='']
     * @param {React.CSSProperties} [style={}]
     * @param {lg|base|sm} [size='base']
     * @param {React.ElementType} [as="div"]
   */
   DarkOpenCard,

    /**
     * @param {string} [text='']
     * @param {string} [className='']
     * @param {React.CSSProperties} [style={}]
     * @param {lg|base|sm} [size='base']
     * @param {React.ElementType} [as="div"]
   */
   LightOpenCard,
   
    /**
     * @param {React.ReactNode} children
     * @param {string} [className='']
     * @param {React.CSSProperties} [style={}]
     * @param {lg|base|sm} [size='base']
     * @param {React.ElementType} [as="div"]
   */
   LightCloseCard,

   

}


export default Card