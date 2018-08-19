import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon='home' title='Início' subtitle='Segundo projeto do capítulo de React.'>
        <div className="display-4">
            Bem vindo!
        </div>
        <hr />
        <p className="mb-0">
            Sistema para exemplificar a construção de um cadastro de usuário desenvolvido em React!
        </p>
    </Main>