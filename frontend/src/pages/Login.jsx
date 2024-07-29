import '../styles/login.css'
import Form from "../components/Form";
import { NavLink } from 'react-bootstrap';

function Login(){
   


    return <>
     
    <div><Form route='/home/token/' method='login'/>
    <div className='link-register'>
     <NavLink href='/register'>Register here</NavLink>
     </div>
    </div>
    </>

}
export default Login;