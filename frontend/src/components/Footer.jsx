import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Footer(){
    return <>
    
<MDBFooter>
      

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Blackcoffer
        </a>
      </div>
    </MDBFooter></>
}
export default Footer