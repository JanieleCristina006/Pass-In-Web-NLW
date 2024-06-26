import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'>{

}
export function TableHeader (props:TableHeaderProps){
    return(
        <th {...props} className="px-4 py-3 text-sm font-semibold text-left" />
    )
}