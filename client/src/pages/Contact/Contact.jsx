import React, { useState } from 'react';
import styled from 'styled-components';

    const WholeContainer = styled.div`
    padding:60px;
    `;

    const FormWrapper = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #f5f5f5;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  `;
  
  const Title = styled.h2`
    text-align: center;
    font-size:2rem;
    font-weight:800;
    margin-bottom: 1.5rem;
  `;
  
  const Label = styled.label`
    display: block;
    margin: 0.5rem 0 0.2rem;
    font-weight: bold;
  `;
  
  const Input = styled.input`
    width: 100%;
    padding: 0.6rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
  `;
  
  const Textarea = styled.textarea`
    width: 100%;
    padding: 0.6rem;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    resize: vertical;
    margin-bottom: 1rem;
  `;
  
  const Button = styled.button`
    width: 100%;
    background-color:gray;
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
  
    &:hover {
      background-color:rgba(96, 170, 145, 0.801)
    }
  `;
  
  const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Send data:', form);
      alert('Message sent！');
      setForm({ name: '', email: '', message: '' });
    };
  
    return (
         
      <WholeContainer> 
        <FormWrapper>
            <Title>Contact</Title>
            <form onSubmit={handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
            />
    
            <Label htmlFor="email">Email address</Label>
            <Input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
            />
    
            <Label htmlFor="message">Message</Label>
            <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
            />

            <Button type="submit">Send</Button>
            </form>
        </FormWrapper>
      </WholeContainer>
    );
  };
  
 
export default Contact;