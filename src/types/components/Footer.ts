import React from "react";

export interface FooterProps{
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    onClick : () => void;
    
}