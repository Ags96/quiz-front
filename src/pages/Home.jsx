import { useRef, useState } from 'react';
import { setUsernameGlobal } from '../store/slices/userName.slice'
import './styles/home.css';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [showModalRegister, setShowModalRegister] = useState(false)

    const usernameRef = useRef();

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setUsernameGlobal(usernameRef.current.value.trim()))
        navigate('/quiz')
    }

  return (
    <div>
      <div className="Presentation">
        <div className="ready">ready for a</div>
        <h1 className="quiz">Quiz!?</h1>
        <p>To start, please insert your username</p>
        <form onSubmit={handleSubmit}>
        <input className="input__start" ref={usernameRef} type="text" placeholder="Enter name"/>
        <button type="submit" className="start__quiz">
          Start!
        </button>
        </form>
        <h3 className='register__text'><Link onClick={() => setShowModalRegister(true)} className='register__link'>Registrate</Link> gratis para guardar tu puntuación!</h3>
      </div>    
    </div>
  );
};

export default Home;
