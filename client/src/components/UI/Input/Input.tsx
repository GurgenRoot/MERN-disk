import {FC} from 'react';

interface IProps {
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: any) => void
}

const Input:FC<IProps> = (props) => <input {...props}/>

export default Input;
