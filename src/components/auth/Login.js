import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import './Login.scss';

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: false
    };

    handleChange = ({target}) => {
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    };

    handleSubmit = () => {
        const usersData = JSON.parse(localStorage.getItem('usersData'));
        const {email, password} = this.state;
        const isExistPassword = usersData && usersData.some((item) => (item.eMail === email && item.password === password));

        if (isExistPassword) {
            document.location.href = 'http://localhost:3000/posts';
        } else {
            this.setState({
                error: true
            });
        }
    };

    isDisabled = () => {
        const {email, password} = this.state;
        return !(email && password);
    };

    render() {
        const {email, password, error} = this.state;

        return (
          <div className="login-form">
            <div className="logo">
              <i className="fa fa-camera" />
            </div>
            <h1>InstaClone</h1>
            <div>
              <input type="email"
                     placeholder="Email"
                     value={email}
                     name="email"
                     onChange={this.handleChange} />
              <input type="password"
                     placeholder="Password"
                     value={password}
                     name="password"
                     onChange={this.handleChange} />
            </div>
            { error ? (<div className="error">Неверный логин или пароль</div>) : null}
            <button className="btn btn-primary btn-left"
                    onClick={this.handleSubmit}
                    disabled={this.isDisabled()}>
                Login
            </button>
            <div className="to-registration">
              First time on InstaClone?
              {' '}
              <Link to="/register">Registration</Link>
            </div>
          </div>
        );
    }
}
