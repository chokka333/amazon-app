import React from 'react';

const Footer = () => {
  const emailAddress = 'chokka333@example.com';

  return (
    <div>
      <footer className='d-flex justify-content-between align-items-center' style={{ backgroundColor: '#FFCCBC' }}>

        <h5>follow us on : <a href={`https://twitter.com/login?lang=en`}>amazon.inc</a></h5>
        <p>&copy; 2023 Amazon Company</p>
        <div>
          <h4> Any queries</h4>
          <h5>Email to: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></h5>
        </div>


      </footer>
    </div>

  );
};

export default Footer;