import Poppins from "./Poppins";
import Sirukota from "./Sirukota";
import Righteous from "./Righteous";
import Steelfish from "./Steelfish";

const Typography = {
  /**
 * Props for the Display component.
 * @param {React.ReactNode} children
 * - The content of the component for the Display component. - Required
 * @param {lg|base|sm} [size='base']
 * - The level of the Display component. Can be lg, base, or sm. Default is base. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='h1']
 * - The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. Default is h1. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
* @param {1|2|3|4|5|6|7|8|9|10} [level = '1']
 * @returns {React.ReactElement} The Display component with the appropriate HTML tag, styling, and content.
 */
  Poppins,

  /**
 * Props for the Heading component.
 * @param {React.ReactNode} children
 * - The content of the component for the Heading component. - Required
 * @param {1|2|3|4|5|6} [level='1']
 * - The level of the Display component. Can be 1, 2, 3, 4, 5, or 6. Default is 1. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='h1']
 * - The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. Default is h1. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Heading component with the appropriate HTML tag, styling, and content.
 */
  Sirukota,

  /**
 * Props for the Paragraph component.
 * @param {React.ReactNode} children
 * - The content of the component for the Paragraph component. - Required
 * @param {1|2|3|4|5|6|7|8|9} [level = '1']
 
 * @param {keyof JSX.IntrinsicElements} [as='p']
 * - The HTML tag to use for the component. Can be p, span, or small. Default is p. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Paragraph component with the appropriate HTML tag, styling, and content.
 */
  Righteous,

 /**
 * Props for the Heading component.
 * @param {React.ReactNode} children
 * - The content of the component for the Heading component. - Required
 * @param {1|2|3|4|5|6|7|8|9} [level='1']
 * - The level of the Display component. Can be 1, 2, 3, 4, 5, or 6. Default is 1. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='h1']
 * - The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. Default is h1. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Heading component with the appropriate HTML tag, styling, and content.
 */
  Steelfish,
};

export default Typography;
