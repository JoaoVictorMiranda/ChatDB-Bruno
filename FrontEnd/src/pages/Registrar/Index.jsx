import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Index.scss';
import api from '../../api.js'; // ajuste o caminho se necessário

const Registrar = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/usuario', { // '/usuarios' é só exemplo
                nome: nome,
                email: email,
                senha: senha
            });

            console.log('Cadastro realizado com sucesso:', response.data);
            // Aqui você pode redirecionar o usuário ou mostrar mensagem
        } catch (error) {
            console.error('Erro ao cadastrar:', error.response?.data || error.message);
        }
    };

    return (
        <div className='container_registro'>
            <h1>Crie Sua Conta:</h1>
            <div className="registro">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome: </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Seu Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Pedro@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="senha">Senha: </label>
                    <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="SenhaForte1234"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit">Registrar</button>
                </form>
                <p>Já tem login? <Link to="/">Entrar</Link></p>
            </div>
        </div>
    );
};

export default Registrar;
