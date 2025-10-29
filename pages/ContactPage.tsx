
import React, { useState } from 'react';
import ContactRFQ from '../components/ContactRFQ';
import Button from '../components/Button';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    productOfInterest: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const validateField = (name: keyof typeof formErrors, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Your Name is required.';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required.';
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          error = 'Email address is invalid.';
        }
        break;
      case 'message':
        if (!value.trim()) error = 'Project Details / Message is required.';
        break;
      case 'phone':
        if (value.trim() && !/^\+?(\d[\s-]?){7,15}\d$/.test(value)) {
          error = 'Please enter a valid phone number.';
        }
        break;
      default:
        break;
    }
    setFormErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name in formErrors) {
      validateField(name as keyof typeof formErrors, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name in formErrors) {
      validateField(name as keyof typeof formErrors, value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMessageValid = validateField('message', formData.message);
    const isPhoneValid = validateField('phone', formData.phone);

    if (isNameValid && isEmailValid && isMessageValid && isPhoneValid) {
      console.log('RFQ Form Submitted:', formData);
      alert('Thank you for your request! We will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        productOfInterest: '',
      });
      setFormErrors({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }
  };

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '' &&
    Object.values(formErrors).every(error => error === '');
  
  const inputBaseClasses = `w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-offset-1 transition-colors duration-200 bg-white dark:bg-zinc-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500`;
  const inputBorderClasses = `border-gray-300 dark:border-zinc-600 focus:ring-teal-500/80 focus:border-teal-500`;
  const inputErrorBorderClasses = `border-red-500 focus:ring-red-400`;

  return (
    <>
      <MetaTags
        title={SEO_DATA.contact.title}
        description={SEO_DATA.contact.description}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContactRFQ />

        {/* RFQ Form Section */}
        <section id="rfq-form" className="py-16">
          <div className="max-w-3xl mx-auto p-8 lg:p-10 bg-white dark:bg-zinc-800 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">Request a Project Quote</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
              Tell us about your project, and our engineering team will get back to you with a tailored solution.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Your Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`${inputBaseClasses} ${formErrors.name ? inputErrorBorderClasses : inputBorderClasses}`}
                  aria-invalid={!!formErrors.name}
                  aria-describedby="name-error"
                />
                {formErrors.name && <p id="name-error" className="text-red-600 text-xs mt-1">{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`${inputBaseClasses} ${formErrors.email ? inputErrorBorderClasses : inputBorderClasses}`}
                  aria-invalid={!!formErrors.email}
                  aria-describedby="email-error"
                />
                {formErrors.email && <p id="email-error" className="text-red-600 text-xs mt-1">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`${inputBaseClasses} ${inputBorderClasses}`}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputBaseClasses} ${formErrors.phone ? inputErrorBorderClasses : inputBorderClasses}`}
                  aria-invalid={!!formErrors.phone}
                  aria-describedby="phone-error"
                />
                {formErrors.phone && <p id="phone-error" className="text-red-600 text-xs mt-1">{formErrors.phone}</p>}
              </div>
              <div>
                <label htmlFor="productOfInterest" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Product/Category of Interest</label>
                <select
                  id="productOfInterest"
                  name="productOfInterest"
                  value={formData.productOfInterest}
                  onChange={handleChange}
                  className={`${inputBaseClasses} ${inputBorderClasses}`}
                >
                  <option value="">Select a product or category</option>
                  <option value="GRP Electrical & Utility Enclosures">GRP Electrical & Utility Enclosures</option>
                  <option value="GRP Modular & Portable Structures">GRP Modular & Portable Structures</option>
                  <option value="GRP Utility & Infrastructure Products">GRP Utility & Infrastructure Products</option>
                  <option value="GRP Industrial Components & Custom Fabrication">GRP Industrial Components & Custom Fabrication</option>
                  <option value="GRP Marine, Offshore & Energy Solutions">GRP Marine, Offshore & Energy Solutions</option>
                  <option value="GRP Sustainable & Smart Solutions">GRP Sustainable & Smart Solutions</option>
                  <option value="Other / Custom Project">Other / Custom Project</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Project Details / Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`${inputBaseClasses} ${formErrors.message ? inputErrorBorderClasses : inputBorderClasses}`}
                  aria-invalid={!!formErrors.message}
                  aria-describedby="message-error"
                ></textarea>
                {formErrors.message && <p id="message-error" className="text-red-600 text-xs mt-1">{formErrors.message}</p>}
              </div>
              <Button
                type="submit"
                variant="secondary"
                className="w-full text-lg"
                disabled={!isFormValid}
              >
                Submit Request
              </Button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
