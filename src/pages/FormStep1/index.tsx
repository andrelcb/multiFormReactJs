import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { FormAction, useForm } from '../../contexts/FormContext';
import * as C from './styles'


export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormAction.setCurrentStep,
            payload: 1
        })
    }, [])

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step2');
        } else {
            alert('Preencha os dados');
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormAction.setName,
            payload: e.target.value,
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3 - {state.name}</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preenchao campo abaixo com o seu nome completo.</p>

                <hr />
                <label htmlFor="">
                    Seu nome Completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Proximo</button>
            </C.Container>
        </Theme>
    )
}