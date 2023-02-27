import React, { useState } from 'react';

function EmailSender() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleSendEmail = () => {
    const data = {
      to: 'lorem ipsum',
      subject: 'lorem ipsum',
      email: inputValue,
    };
    fetch('http://localhost:4000/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        alert('Email sent successfully!');
        setInputValue('');
      } else {
        alert('Failed to send email. Please try again later.');
      }
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <input
          style={{
            border: '1px solid #99a0a3',
            borderRadius: '4px',
            height: '50px',
            width: '350px',
            fontSize: '20px',
            padding: '3.5px',
          }}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <button
          style={{ height: '50px' }}
          className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
          onClick={handleSendEmail}
        >
          Request a Demo!
        </button>
      </div>
    </div>
  );
}

export default EmailSender;
