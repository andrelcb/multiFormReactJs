import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { SelectOption } from '../../components/SelectOption';
import { Theme } from '../../components/Theme'
import { FormAction, useForm } from '../../contexts/FormContext';
import * as C from './styles'


export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        }

        dispatch({
            type: FormAction.setCurrentStep,
            payload: 2
        })
    }, [])

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3');
        } else {
            alert('Preencha os dados');
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormAction.setLevel,
            payload: level,
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3 - {state.name}</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a melhor opção que condiz com você.</p>
                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou programador"
                    description="Já program há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link className='backButton' to={'/'}>Voltar</Link>
                <button onClick={handleNextStep}>Proximo</button>
            </C.Container>
        </Theme>
    )
}