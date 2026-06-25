import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isReady = email.trim() !== '' && password.trim() !== ''

  function handleLogin() {
    if (!isReady) return
    navigate('/account')
  }

  return (
    <div className="page auth-page">
      <h1 className="auth-title">
        Signin to your<br />PopX account
      </h1>
      <p className="auth-subtitle">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          className="form-input"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="login-btn-wrapper">
        <button
          className={`btn ${isReady ? 'btn-primary' : 'btn-gray'}`}
          onClick={handleLogin}
          disabled={!isReady}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
