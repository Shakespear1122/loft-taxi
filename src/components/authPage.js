import React, { useState } from 'react';
import TextInput from './common/textInput';
import Button from './common/button';

function LoginPage({ handleLogin, handleRegistr }) {
    const [isNotRegistred, setIsNotRegistred] = useState(false)

        if (!isNotRegistred)  {
            return  <div className='form-container'>
                <h1>Войти</h1>
                <p>Новый пользователь? <a href='#' onClick={() => setIsNotRegistred(true)}>Зарегистрируйтесь</a></p>
                <form className='login-form' onSubmit={handleLogin}>
                    <TextInput 
                        labeltext=''
                        inputType='text'
                        placeholder='Имя пользователя'
                        inputText=''
                        isLabel={false}
                        required='required'
                    />
                    <TextInput 
                        labeltext=''
                        inputType='text'
                        placeholder='Пароль'
                        inputText=''
                        isLabel={false}
                        required='required'
                    />
                    <Button type='submit'>Войти</Button>
                </form>
            </div>
        } 
        return (
        <div className='form-container'>
            <h1>Регистрация</h1>
            <p>Уже есть аккаунт? <a href='#' onClick={() => setIsNotRegistred(false)}>Войти</a></p>
            <form className='reg-form' onSubmit={handleRegistr}>
                <TextInput 
                    labeltext=''
                    inputType='text'
                    placeholder='Адрес электронной почты'
                    inputText=''
                    isLabel={false}
                    required='required'
                />
                <TextInput 
                    labeltext=''
                    inputType='text'
                    placeholder='Имя'
                    inputText=''
                    isLabel={false}
                    required='required'
                />
                <TextInput 
                    labeltext=''
                    inputType='text'
                    placeholder='Фамилия'
                    inputText=''
                    isLabel={false}
                    required='required'
                />
                <TextInput 
                    labeltext=''
                    inputType='text'
                    placeholder='Пароль'
                    inputText=''
                    isLabel={false}
                    required='required'
                />
                <Button type='submit'>Зарегистрироваться</Button>
            </form>
        </div> )
};

export default LoginPage;