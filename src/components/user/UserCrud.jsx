import React from 'react'
import Main from '../template/Main'
import UserForm from './Userform'
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'

const initialState = {
    user: {
        name: '',
        email: ''
    },
    list: []
}

export default class UserCrud extends React.Component {

    constructor() {
        super()

        this.state = { ...initialState }

        this.clear = this.clear.bind(this)
        this.save = this.save.bind(this)
        this.getUpdatedList = this.getUpdatedList.bind(this)
        this.updateField = this.updateField.bind(this)
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
            .then(response => {
                const list = this.getUpdatedList(response.data)
                this.setState({ user: initialState.user, list })
            })

    }

    getUpdatedList(user) {
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    render() {
        return (
            <Main {...headerProps}>
                <UserForm name={this.state.user.name}
                    email={this.state.user.email}
                    clear={this.clear}
                    save={this.save}
                    updateField={this.updateField}
                />
            </Main>
        )
    }
}