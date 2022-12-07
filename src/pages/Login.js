import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';
import logo from '../images/logo.gif';

function Login() {
  const history = useHistory();
  const { setEmail, setPassword, disabled, email } = useContext(Context);

  return (
    <section className="section-form-login">
      <form>
        <h1 className="title-login">Receitas da Vovó Moderna</h1>
        <section className="section-inputs-login">
          <img src={ logo } alt="Logo do site" className="logo" />
          <input
            placeholder="Email"
            type="email"
            value={ email }
            data-testid="email-input"
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <input
            placeholder="Password"
            type="password"
            data-testid="password-input"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </section>
        <section className="section-btn-login">
          <button
            type="button"
            className="btn-login"
            data-testid="login-submit-btn"
            disabled={ disabled }
            onClick={ () => {
              localStorage.setItem('mealsToken', 1);
              localStorage.setItem('cocktailsToken', 1);
              const user = {
                email,
              };
              localStorage.setItem('user', JSON.stringify(user));
              history.push('/foods');
            } }
          >
            Enter
          </button>
        </section>
      </form>
    </section>
  );
}

export default Login;
