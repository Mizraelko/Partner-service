import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import './AuthPage.scss';

const AuthPage = () => {
    const [form, setForm] = useState({
        email:'',
        password:''
    });
    const changeHandler = (e) => {
        setForm({...form,
            [e.target.name]:e.target.value
        });
        console.log(form)
    }
    return (
        <BrowserRouter>
            <Switch>
                <>
                    <div className="container">
                        <div className="auth-page" onChange={changeHandler}>
                            <Route path='/login'>
                                <h3>Авторизация</h3>
                                <form className="col s12 form card-panel hoverable">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">email</i>
                                            <input id="email" type="text" className="validate" name="email"/>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">edit</i>
                                            <input id="password" type="password" className="validate" name="password"/>
                                            <label htmlFor="password">Пароль</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="btn waves-effect waves-light">Войти</button><Link to="/registration" className="btn-outline btn-reg">Нет аккаунта?</Link>
                                    </div>

                                </form>

                            </Route>
                            <Route path='/registration'>
                                <h3>Регистрация</h3>
                                <form className="col s12 form card-panel hoverable">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">email</i>
                                            <input id="email" type="text" className="validate" name="email"/>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">edit</i>
                                            <input id="password" type="password" className="validate" name="password"/>
                                            <label htmlFor="password">Пароль</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="btn waves-effect waves-light">Регистрация</button><Link to="/login" className="btn-outline btn-reg">Уже есть аккаунт?</Link>
                                    </div>

                                </form>
                            </Route>
                        </div>


                    </div>
                </>
            </Switch>
        </BrowserRouter>

    );
};

export default AuthPage;