import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import ContactRFQ from '../components/ContactRFQ';
import Button from '../components/Button';
import MetaTags from '../components/MetaTags';
import { SEO_DATA } from '../constants';
import { useToast } from '../ToastContext';

const ContactPage: React.FC = () => {
  const { addToast } = useToast();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    productOfInterest: '',
  });

  useEffect(() => {
    if (location.state?.productName) {
      setFormData(prev => ({
        ...prev,
        productOfInterest: location.state.productName,
        message: `I'm interested in getting a quote for the product: ${location.state.productName} (Code: ${location.state.productCode}).`
      }));
    }
  }, [location.state]);

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
      addToast('Thank you! Your quote request has been submitted successfully.', 'success');
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
  
  const inputBaseClasses = `w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-offset-1 transition-colors duration-200 bg-[var(--color-background)] text-[var(--color-primary)] placeholder-[var(--color-text-secondary)]`;
  const inputBorderClasses = `border-[var(--color-border)] focus:ring-[var(--color-accent)]/80 focus:border-[var(--color-accent)]`;
  const inputErrorBorderClasses = `border-red-500 focus:ring-red-400`;

  const categoryOptions = [
    "GRP Electrical & Utility Enclosures",
    "GRP Modular & Portable Structures",
    "GRP Utility & Infrastructure Products",
    "GRP Industrial Components & Custom Fabrication",
    "GRP Marine, Offshore & Energy Solutions",
    "GRP Sustainable & Smart Solutions",
    "GRP Transport & Automotive Components",
    "Other / Custom Project"
  ];

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
          <div className="max-w-3xl mx-auto p-8 lg:p-10 bg-[var(--color-surface)] rounded-lg shadow-lg border border-[var(--color-border)]">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">Request a Quote</h2>
            <p className="text-center text-[var(--color-text-secondary)] mb-10">
              Tell us about your project, and our engineering team will get back to you with a tailored solution.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-primary)] mb-1">Your Name <span className="text-red-500">*</span></label>
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
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-primary)] mb-1">Email <span className="text-red-500">*</span></label>
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
                <label htmlFor="company" className="block text-sm font-medium text-[var(--color-primary)] mb-1">Company</label>
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
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-primary)] mb-1">Phone Number</label>
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
                <label htmlFor="productOfInterest" className="block text-sm font-medium text-[var(--color-primary)] mb-1">Product/Category of Interest</label>
                <select
                  id="productOfInterest"
                  name="productOfInterest"
                  value={formData.productOfInterest}
                  onChange={handleChange}
                  className={`${inputBaseClasses} ${inputBorderClasses}`}
                >
                  <option value="">Select a product or category</option>
                  {/* If a product was passed via state and isn't a standard category, add it as an option */}
                  {formData.productOfInterest && !categoryOptions.includes(formData.productOfInterest) && (
                    <option value={formData.productOfInterest}>
                      {formData.productOfInterest}
                    </option>
                  )}
                  {categoryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-primary)] mb-1">Project Details / Message <span className="text-red-500">*</span></label>
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
                Submit Quote Request
              </Button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;