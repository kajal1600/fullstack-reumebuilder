import React from 'react';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

function PrivacyPolicy() {
  return (
    

    <div className="container mx-auto p-6">
        <div>
    <Header/>
</div>


      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website.
      </p>
      
      <h2 className="text-2xl font-semibold mt-4">1. Information We Collect</h2>
      <p className="mb-4">We may collect personal information such as your name, email address, and phone number when you interact with our website.</p>
      
      <h2 className="text-2xl font-semibold mt-4">2. How We Use Your Information</h2>
      <p className="mb-4">We use your information to provide and improve our services, communicate with you, and ensure a secure experience.</p>
      
      <h2 className="text-2xl font-semibold mt-4">3. Data Security</h2>
      <p className="mb-4">We implement security measures to protect your data, but no method of transmission over the Internet is 100% secure.</p>
      
      <h2 className="text-2xl font-semibold mt-4">4. Third-Party Services</h2>
      <p className="mb-4">We may use third-party services for analytics or payments, which have their own privacy policies.</p>
      
      <h2 className="text-2xl font-semibold mt-4">5. Your Rights</h2>
      <p className="mb-4">You have the right to access, update, or delete your personal data. Contact us for any privacy-related inquiries.</p>
      
      <h2 className="text-2xl font-semibold mt-4">6. Changes to This Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>
      
      <h2 className="text-2xl font-semibold mt-4">7. Contact Us</h2>
      <p className="mb-4">If you have any questions, feel free to contact us at support@example.com.</p>
      <div>
        <Footer/>
      </div>
    </div>

  );
}

export default PrivacyPolicy;
