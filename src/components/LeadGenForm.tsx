"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LeadGenFormProps {
  hideHeader?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function LeadGenForm({ 
  hideHeader = false, 
  className = "", 
  title = "Start Transforming Your Logistics Landscape",
  subtitle,
  buttonText = "Submit"
}: LeadGenFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    city: "",
    message: "",
    agreed: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real app, you would send this to your backend or GHL endpoint
    alert("Thank you! Your request has been sent.");
  };

  return (
    <div className={`w-full mx-auto ${className}`}>
      {!hideHeader && (
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0fa1db] mb-2 leading-tight tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-gray-600 mb-4 px-4">{subtitle}</p>
          )}
          <div className="h-[2px] bg-black w-24 mx-auto rounded-full opacity-20"></div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-[#f8fbfe] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0fa1db] transition-all"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-[#f8fbfe] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0fa1db] transition-all"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#f8fbfe] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0fa1db] transition-all"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#f8fbfe] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0fa1db] transition-all"
            />
          </div>
        </div>

        {/* Row 3: Business Name & City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full bg-[#f8fbfe] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0fa1db] transition-all"
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-[#f8fbfe] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0fa1db] transition-all"
            />
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <textarea
            name="message"
            placeholder="Please describe your needs"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#f8fbfe] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#0fa1db] transition-all resize-none"
          ></textarea>
        </div>

        {/* Row 5: Terms */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agreed"
            id="agreed"
            required
            checked={formData.agreed}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-[#0fa1db] border-gray-300 rounded focus:ring-[#0fa1db]"
          />
          <label htmlFor="agreed" className="text-[10px] text-gray-500 leading-tight">
            I agree to <Link href="/terms" className="text-[#0fa1db] underline">terms & conditions</Link> provided by the company. By providing my phone number, I agree to receive text messages from the business.
          </label>
        </div>

        {/* Row 6: Submit */}
        <button
          type="submit"
          className="w-full bg-[#0fa1db] hover:bg-[#0284c7] text-white font-bold py-3 rounded-lg shadow-lg transition-all text-sm uppercase tracking-wider"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default LeadGenForm;
