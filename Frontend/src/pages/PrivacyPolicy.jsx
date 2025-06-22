// src/pages/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-16 font-playfair mt-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">
        At Our Website, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We want to assure you that our website does not automatically collect data about you when you visit. Specifically:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li><strong>No Automatic Data Collection:</strong> Our website does not automatically gather data such as IP addresses, browser information, or any other data about your visit.</li>
        <li><strong>Personal Data:</strong> When you fill out a Google Form, we collect personal information such as your name, email address, and any other details you provide in the form.</li>
        <li><strong>Payment Data:</strong> For payment verification, we collect the transaction ID and a screenshot of the transaction. This helps us confirm that the payment has been successfully processed.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use of Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use the information we collect to:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Process and verify your payment transactions.</li>
        <li>Manage your forms and applications, and communicate with you regarding your submissions.</li>
        <li>Improve our services based on user feedback and transaction details.</li>
        <li>Send you updates and information related to your application or transaction if necessary.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">3. Disclosure of Your Information</h2>
      <p className="text-gray-700 mb-4">
        We may disclose your information in the following situations:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li><strong>By Law or to Protect Rights:</strong> If required by law or to protect the rights, property, and safety of others.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or any similar business transfer.</li>
        <li><strong>Service Providers:</strong> With third-party service providers who assist us in processing payments and managing data.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Security of Your Information</h2>
      <p className="text-gray-700 mb-4">
        We use reasonable measures to protect your personal information. However, no security system is impenetrable, and we cannot guarantee the complete security of our systems or your data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Changes to This Privacy Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">6. Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p className="text-gray-700">
        Email: <a href="mailto:contact.fusiotech@gmail.com" className="text-amber-600 hover:underline">contact.fusiotech@gmail.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
