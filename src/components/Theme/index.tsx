import { ReactNode } from 'react'
import { useForm } from '../../contexts/FormContext'
import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem'
import * as  C from './styles'

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {
    const {state} = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />
                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem active={state.currentStep === 1} title="Pessoal" description="Se indetifique" icon="profile" path="/"/>
                        <SidebarItem active={state.currentStep === 2} title="Profissional" description="Seu nivel" icon="book" path="/step2"/>
                        <SidebarItem active={state.currentStep === 3} title="Contatos" description="Como te achar" icon="mail" path="/step3"/>
                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}