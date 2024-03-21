import axios from 'axios';
import React, { useState } from 'react';
import Toast from './Toast';

const CandidatesForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phoneNumber: '',
    linkedinUrl: '',
    workExperience: '',
    reactExperience: 1,
    nodeExperience: 1,
    email: '',
    expectedSalary: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/candidates`, formData);
      console.log(response.data);
      setToastMessage('Candidate added successfully!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); 
    } catch (error) {
      console.error('There was an error!', error);
      setToastMessage('An error occurred!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); 
    }
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      phoneNumber: '',
      linkedinUrl: '',
      workExperience: '',
      reactExperience: '',
      nodeExperience: '',
      email: '',
      expectedSalary: '',
    });
  };

  return (
    <>
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">First name</label>
          <input type="text" name="firstName"
            value={formData.firstName}
            onChange={handleChange} id="first_name" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ramiz" required />
        </div>
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Last name</label>
          <input type="text" name="lastName"
            value={formData.lastName}
            onChange={handleChange} id="last_name" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mollah" required />
        </div>
        <div>
          <label for="company" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Company</label>
          <input type="text" name="company"
            value={formData.company}
            onChange={handleChange} id="company" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="profile" required />
        </div>
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Phone number</label>
          <input type="tel" name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange} id="phone" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91" required />
        </div>
        <div>
          <label for="linkedinUrl" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">LinkedIn URL</label>
          <input id="linkedinUrl" name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange} class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="linkedin.com" required />
        </div>
        <div>
          <label for="workExperience" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Work Experience (In years)</label>
          <input type="number" name="workExperience"
            value={formData.workExperience}
            onChange={handleChange} id="visitors" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
        <div>
          <label for="reactExperience" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Work Experience in years (ReactJs)</label>
          <select name="reactExperience"
            value={formData.reactExperience}
            onChange={handleChange} id="reactExperience" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="1">Less than 1 year</option>
            <option value="2">1-2 years</option>
            <option value="3">Over 2 years</option>
          </select>
        </div>
        <div>
          <label for="nodeExperience" class="block mb-2 text-sm font-medium text-white-900 dark:text-black">Work Experience in years (ReactJs)</label>
          <select name="nodeExperience"
            value={formData.nodeExperience}
            onChange={handleChange} id="nodeExperience" class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="1">Less than 1 year</option>
            <option value="2">1-2 years</option>
            <option value="3">Over 2 years</option>
          </select>
        </div>

        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-white-900 dark:text-black minValue-1 maxValue-3">Email Address</label>
          <input type="email" name="email"
            value={formData.email}
            onChange={handleChange} class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@gmail.com" required />
        </div>
        <div>
          <label class="block mb-2 text-sm font-medium text-white-900 dark:text-black minValue-1 maxValue-3">Expected Salary</label>
          <input type="number" name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange} class="bg-white-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="In rupees " required />
        </div>
      </div>

      <button type="submit" onClick={handleSubmit} class="inline-block px-6 py-3 float-right font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-blue-500 to-gray-900 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">Register New Candidate</button>
    </form>
    <Toast message={toastMessage} show={showToast} onClose={() => setShowToast(false)} />
    </>
  );
};

export default CandidatesForm;
