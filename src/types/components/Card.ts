

export interface CardProps {
    children?: React.ReactNode;
    className?: string;
    size?: "lg" | "base" | "sm";
    style?: React.CSSProperties;  
    as?: React.ElementType 
    header?: string
    paragraph?: string
}