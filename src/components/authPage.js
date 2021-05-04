import React, { useState } from 'react';
import TextInput from './common/textInput';
import Button from './common/button';
import PropTypes from 'prop-types';

function AuthPage({ goToPage }) {
    const [isNotRegistred, setIsNotRegistred] = useState(false)
    const handlePage = (page) => {
        goToPage(page)
    }
        if (!isNotRegistred)  {
            return  <div className='form-container'>
                <h1>Войти</h1>
                <p>Новый пользователь? <a href='#' onClick={() => setIsNotRegistred(true)}>Зарегистрируйтесь</a></p>
                <form  className='login-form' onSubmit={() => handlePage('map')}>
                    <TextInput 
                        labeltext=''
                        inputType='text'
                        placeholder='Имя пользователя'
                        inputText=''
                        isLabel={false}
                        required={true}
                    />
                    <TextInput 
                        labeltext=''
                        inputType='text'
                        placeholder='Пароль'
                        inputText=''
                        isLabel={false}
                        required={true}
                    />
                    <Button type='submit'>Войти</Button>
                </form>
            </div>
        } 
        return (
        <div className='form-container'>
            <h1>Регистрация</h1>
            <p>Уже есть аккаунт? <a href='#' onClick={() => setIsNotRegistred(false)}>Войти</a></p>
            <form  className='reg-form' onSubmit={() => handlePage('map')}>
                <TextInput 
                    labeltext=''
                    inputType='text'
                    placeholder='Адрес электронной почты'
                    inputText=''
                    isLabel={false}
                    required={true}
                />
                <TextInput 
                    labeltext=''
                    inputType='text'
                    placeholder='Имя'
                    inputText=''
                    isLabel={false}
                    required={true}
                />
                <TextInput 
                    labeltext=''
                    inputType='text'
                    placeholder='Фамилия'
                    inputText=''
                    isLabel={false}
                    required={true}
                />
                <TextInput 
                    labeltext=''
                    inputType='text'
                    placeholder='Пароль'
                    inputText=''
                    isLabel={false}
                    required={true}
                />
                <Button type='submit'>Зарегистрироваться</Button>
            </form>
        </div> )
};

AuthPage.protoTypes = {
    goToPage: PropTypes.func,
};

export default AuthPage;