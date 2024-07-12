// src/components/pages/ContactPage.tsx
import React from 'react';
const ContactPage: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
