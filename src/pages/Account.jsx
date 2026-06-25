import { useEffect, useState } from 'react'

const CAMERA_ICON = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4zm7-11.2h-1.78l-1.45-1.55A1 1 0 0 0 15 2H9a1 1 0 0 0-.73.32L6.82 4H5A3 3 0 0 0 2 7v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-7 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
  </svg>
)

function Account() {
  const [user, setUser] = useState({ fullName: '', email: '' })

  useEffect(() => {
    try {
      const stored = localStorage.getItem('popx_user')
      if (stored) {
        const parsed = JSON.parse(stored)
        setUser({
          fullName: parsed.fullName || 'Marry Doe',
          email: parsed.email || 'Marry@Gmail.Com',
        })
      } else {
        setUser({ fullName: 'Marry Doe', email: 'Marry@Gmail.Com' })
      }
    } catch {
      setUser({ fullName: 'Marry Doe', email: 'Marry@Gmail.Com' })
    }
  }, [])

  const initials = user.fullName
    ? user.fullName.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : 'MD'

  return (
    <div className="page account-page">
      <div className="account-header">
        <h2 className="account-header-title">Account Settings</h2>
      </div>

      <div className="account-profile-section">
        <div className="profile-row">
          <div className="avatar-wrapper">
            <div className="avatar-placeholder">{initials}</div>
            <div className="avatar-camera">{CAMERA_ICON}</div>
          </div>
          <div className="profile-info">
            <p className="profile-name">{user.fullName}</p>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        <p className="account-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="account-body" />
    </div>
  )
}

export default Account
