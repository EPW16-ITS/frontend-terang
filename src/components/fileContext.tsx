import { Context } from "react";
import { createContext } from "react";

const fileContext : Context<{
    [key: string]: any;
}[]> = createContext([
    {}
]);

export default fileContext;