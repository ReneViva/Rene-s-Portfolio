import React, { useEffect, useRef, useState } from 'react';
import { useLocation , Link } from 'react-router-dom';
import '../assets/Footer.css'


const Footer = () => {
  const location = useLocation()
  const ref = useRef(null)
  const [style, setStyle] = useState({})
  useEffect(()=>{

  const styles = {
    footer: {
  
      backgroundColor: '#09232e',
      color: '#fff',
      padding: '40px 20px',
      textAlign: 'center',
      marginTop: location.pathname =="/"?"0":innerHeight-ref.current.clientHeight // Adjust this value to leave space above footer
    },
    inner: {
      display: 'flex',
      justifyContent: 'space-around'
    },
    section: {
      display:"flex",
      flexDirection:"column",
      maxWidth: '300px',
  
      textAlign:'center',
    },
    ul: {
      listStyleType: 'none',
      padding: 0
    }
  };
  setStyle(styles)
},[location])

  return (
    <footer ref={ref} style={style.footer}>
      <div style={style.inner}>
        <div style={style.section}>
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div style={style.section}>
          <h3>Contact</h3>
          <p>Email: vartanianrene5@gmail.com</p>
          <p>Phone: +37441300138</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
