// eslint-disable-next-line no-unused-vars
import React from 'react'
import Form from '../contact-component/Form'
import Contact_Head_Section from '../contact-component/Contact_Head_Section'
import Contact_Content_Section from '../contact-component/Contact_Content_Section'

const Contact = () => {
  return (
    <div className='bg-black text-white'>
      <Contact_Head_Section></Contact_Head_Section>
      <Contact_Content_Section></Contact_Content_Section>
      <Form></Form>
    </div>
  )
}

export default Contact
