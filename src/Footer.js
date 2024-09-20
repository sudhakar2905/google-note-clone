import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();
  return (
    <>
      <footer className='footer'>
        <p> copyright © 2024 {year} </p>
      </footer>
    </>
  );
}

export default Footer