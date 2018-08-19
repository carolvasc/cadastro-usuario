import React from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UserCrud extends React.Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuários
            </Main>
        )
    }
}