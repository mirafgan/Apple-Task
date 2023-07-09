import { FC } from "react"

// interface InputProps {
//     value: string,
//     type: string,
//     onChange: any,
//     placeholder: string,
//     defaultChecked: boolean
// }
const Input: FC<any> = (props) => {
    return <input
        {...props}
    />

}

export default Input