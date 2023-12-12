import React, { useState } from 'react';
import * as Styles from './ApplyFormStyles';

export const ApplyForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    amount: '',
    gender: '',
    email: '',
    phoneNumber: '',
  });

  const { firstName, lastName, amount, email, phoneNumber } = data;

  const onChangeValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      firstName: '',
      lastName: '',
      amount: '',
      gender: '',
      email: '',
      phoneNumber: '',
    });
  };
  return (
    <Styles.ApplyFormContainer onSubmit={onFormSubmit}>
      <Styles.ApplyFormWrapper>
        <Styles.SelectWrapper>
          <label htmlFor='amount'>Loan amount:</label>
          <select name='amount' value={amount} onChange={onChangeValue}>
            <option value=''>Select amount</option>
            <option value='500,000'>500,000</option>
            <option value='1 Million'>1 Million</option>
            <option value='1.5 Million'>1.5 Million</option>
            <option value='2 Million'>2 Million</option>
            <option value='2.5 Million'>2.5 Million</option>
            <option value='3 Million'>3 Million</option>
            <option value='3.5 Million'>3.5 Million</option>
            <option value='4 Million'>4 Million</option>
            <option value='4.5 Million'>4.5 Million</option>
            <option value='5 Million'>5 Million</option>
          </select>
        </Styles.SelectWrapper>
        <Styles.GenderWrapper>
          <h4>Gender:</h4>
          <Styles.GenderBox>
            <label htmlFor=''>Male</label>
            <input
              type='radio'
              name='gender'
              value='male'
              onChange={onChangeValue}
            />
          </Styles.GenderBox>
          <Styles.GenderBox>
            <label htmlFor=''>Female</label>
            <input
              type='radio'
              name='gender'
              value='female'
              onChange={onChangeValue}
            />
          </Styles.GenderBox>
        </Styles.GenderWrapper>
        <Styles.InboxWrapper>
          <div>
            <input
              type='text'
              // placeholder='Your First Name'
              name='firstName'
              value={firstName}
              onChange={onChangeValue}
            />
            <label htmlFor='firstName'>First Name</label>
          </div>
          <div>
            <input
              type='text'
              // placeholder='Your Last Name'
              name='lastName'
              value={lastName}
              onChange={onChangeValue}
            />
            <label htmlFor='lastName'>Last Name</label>
          </div>
        </Styles.InboxWrapper>
        <Styles.InboxWrapper>
          <div>
            <input
              type='email'
              // placeholder='Your Email'
              name='email'
              value={email}
              onChange={onChangeValue}
            />
            <label htmlFor='Email'>Email</label>
          </div>
          <div>
            <input
              type='text'
              // placeholder='Your Phone Number'
              name='phoneNumber'
              value={phoneNumber}
              onChange={onChangeValue}
            />
            <label htmlFor='phoneNumber'>Phone Number</label>
          </div>
        </Styles.InboxWrapper>
        <Styles.ButtonWrapper>
          <button>Apply now</button>
        </Styles.ButtonWrapper>
      </Styles.ApplyFormWrapper>
    </Styles.ApplyFormContainer>
  );
};
