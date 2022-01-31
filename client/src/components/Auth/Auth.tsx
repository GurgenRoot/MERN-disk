import { useEffect, useState } from 'react';
import { authUser, createUserAccount, loginUserAccount } from '../../features/actions/UserAction';
import { useAppDispatch } from '../../app/hooks';
import Input from '../UI/Input';
import styles from './auth.module.css';

const Auth = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authUser())
  }, [])

return (
    <div className={styles.auth__container}>
        <div className={styles.auth__content}>
          <Input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={() => dispatch(loginUserAccount(email, password)) }>Sign In</button>
          <button onClick={() => dispatch(createUserAccount(email, password)) }>Sign Up</button>
        </div>
    </div>
)
};

export default Auth;
