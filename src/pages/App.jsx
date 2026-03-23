import Auth from './Auth.jsx'
import OtpVerification from './OtpVerification.jsx'
import '../design/index.css'

function App() {
  const params = new URLSearchParams(window.location.search)
  const page = params.get('page')

  if (page === 'otp') return <OtpVerification />

  return <Auth />
}

export default App

