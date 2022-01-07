interface FormInputProps {
    type?: 'text' | 'number';
    text: string;
    value: any;
    readOnly?: boolean;
    className?: string;
    setValue?: (value: any) => void;
}

export default function FormInput(props: FormInputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2" htmlFor="">
                {props.text}
            </label>
            <input 
                type={props.type ?? 'text'} 
                value={props.value}
                readOnly={props.readOnly}
                onChange={e => props.setValue?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-50
                    px-4 py-2
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}