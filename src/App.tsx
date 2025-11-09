import { Route, Routes } from 'react-router-dom'
import './assets/css/global.css'
import LoginPage from './pages/loginPage'
import SignUpPage from './pages/signUpPage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
    </>
  )
}
export default App
