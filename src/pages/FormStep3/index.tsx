import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { FormAction, useForm } from '../../contexts/FormContext';
import * as C from './styles'


export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        }

        dispatch({
            type: FormAction.setCurrentStep,
            payload: 3
        })
    }, [])

    const handleNextStep = () => {
        if (state.email !== "" && state.github !== "") {
            console.log(state);
        } else {
            alert('Preencha todos os campos');
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormAction.setEmail,
            payload: e.target.value,
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormAction.setGithub,
            payload: e.target.value,
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3 - {state.name}</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha os campos para entrar em contato.</p>

                <hr />
                <label htmlFor="">
                    Email
                    <input
                        type="text"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label htmlFor="">
                    Github
                    <input
                        type="text"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>
                <Link className='backButton' to={'/'}>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}