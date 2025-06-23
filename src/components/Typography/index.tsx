import Poppins from "./Poppins";
import CrystalUniverseOblique from "./CrystalUniverseOblique";
import CrystalUniverseRegular from "./CrystalUniverseRegular";
import Homica from "./Homica";
import SuperComic from "./SuperComic";

const Typography = {
  /**
 * Props for the Display component.
 * @param {React.ReactNode} children
 * - The content of the component for the Display component. - Required
 * @param {lg|base|sm|xs} [size='xs']
 * - The level of the Display component. Can be lg, base, or sm. Default is sm. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='h1']
 * - The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. Default is h1. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
* @param {1|2|3|4|5|6|7|8|9|10|11|12} [level = '1']
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
  CrystalUniverseOblique,

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
  CrystalUniverseRegular,

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
  Homica,

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
  SuperComic,
};

export default Typography;
