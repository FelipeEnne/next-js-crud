import { useState } from "react";
import Client from "../core/Client";
import FormInput from "./FormInput";
import Button from "./Button";

interface FormProps {
    client: Client;
    selectClient?: (client: Client) => void;
    cancel?: () => void;
}

export default function Form(props: FormProps) {
    const id = props.client?.id;
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <FormInput 
                    readOnly
                    text='ID' 
                    value={id}
                    className="mb-4"
                />
            ) : false}
            <FormInput
                text='Name'
                value={name}
                setValue={setName}
                className="mb-4"
            />
            <FormInput 
                text='Idade' 
                value={age} 
                type="number"
                setValue={setAge}
            />

            <div className="flex jutify-end mt-7">
                <Button className={`
                    mr-2
                    bg-gradient-to-r from-blue-400 to-blue-700
                    `}
                    onClick={() => props.selectClient?.(new Client(name, age, id))}
                >
                    {id ? 'Alter' : 'Save'}
                </Button>
                <Button className={`
                    bg-gradient-to-r from-gray-400 to-gray-700
                    `}
                    onClick={() => props.cancel()}
                >
                    Cancel
                </Button>
                
            </div>
        </div>
    )
}