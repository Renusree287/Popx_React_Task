import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    const userData = {
      fullName: form.fullName,
      email: form.email,
      phone: form.phone,
      company: form.company,
      isAgency: form.isAgency,
    }
    localStorage.setItem('popx_user', JSON.stringify(userData))
    navigate('/account')
  }

  const isReady = form.fullName.trim() && form.phone.trim() && form.email.trim() && form.password.trim()

  return (
    <div className="page register-page">
      <h1 className="register-title">
        Create your<br />PopX account
      </h1>

      <div className="form-group">
        <label className="form-label">Full Name<span style={{ color: '#ef4444' }}>*</span></label>
        <input
          type="text"
          name="fullName"
          className="form-input"
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Phone number<span style={{ color: '#ef4444' }}>*</span></label>
        <input
          type="tel"
          name="phone"
          className="form-input"
          placeholder="+1 234 567 890"
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email address<span style={{ color: '#ef4444' }}>*</span></label>
        <input
          type="email"
          name="email"
          className="form-input"
          placeholder="marry@gmail.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Password<span style={{ color: '#ef4444' }}> *</span></label>
        <input
          type="password"
          name="password"
          className="form-input"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Company name</label>
        <input
          type="text"
          name="company"
          className="form-input"
          placeholder="Acme Inc."
          value={form.company}
          onChange={handleChange}
        />
      </div>

      <div>
        <span className="radio-group-label">
          Are you an Agency?<span className="radio-required">*</span>
        </span>
        <div className="radio-options">
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === 'yes'}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === 'no'}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <button
        className={`btn ${isReady ? 'btn-primary' : 'btn-gray'}`}
        onClick={handleSubmit}
        disabled={!isReady}
      >
        Create Account
      </button>
    </div>
  )
}

export default Register
