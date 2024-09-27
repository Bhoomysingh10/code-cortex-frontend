import React, { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    privacyPolicy: false,
    marketingConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg  w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-md font-md mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-0 border-b-2 border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-600"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-md font-md mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 px-0 border-b-2 border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-600"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-md font-md mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 px-0 border-b-2 border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-600"
              required
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
                required
              />
              <span className="ml-2 text-gray-700 text-sm">
                By creating an account, I agree to this website's{' '}
                <a href="#" className="text-indigo-600 hover:underline">
                  privacy policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-indigo-600 hover:underline">
                  terms of service
                </a>.
              </span>
            </label>
          </div>

          <div className="mb-6">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={formData.marketingConsent}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-indigo-600"
              />
              <span className="ml-2 text-gray-700 text-sm">
                I consent to receive marketing emails.
              </span>
            </label>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-indigo-700 w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{' '}
          <a href="#" className="text-indigo-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
