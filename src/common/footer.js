import React from 'react';

const Footer = () => {
  const emailAddress = 'chokka333@example.com'; 

  return (
    <div className='d-flex justify-content-center'>
          <footer>
      <p>&copy; 2023 Your Company</p>
      <h4> Any queries</h4>
      <h5>Email to: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></h5>
    </footer>
    </div>
  
  );
};

export default Footer;