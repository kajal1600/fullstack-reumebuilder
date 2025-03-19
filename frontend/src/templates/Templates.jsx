import React from 'react'

import Footer from '../component/Footer'
import Header from '../component/Header'

function Templates() {
  return (
   <>
   
   <div className="container mx-auto p-6 relative">
<Header/>
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="mb-4">
        These Terms of Use govern your use of our website and services. By accessing or using our services, you agree to comply with these terms.
      </p>
      
      <h2 className="text-2xl font-semibold mt-4">1. Acceptance of Terms</h2>
      <p className="mb-4">By using our website, you accept these terms and agree to abide by them.</p>
      
      <h2 className="text-2xl font-semibold mt-4">2. User Responsibilities</h2>
      <p className="mb-4">You are responsible for ensuring that your use of our services is lawful and does not violate any applicable laws.</p>
      
      <h2 className="text-2xl font-semibold mt-4">3. Prohibited Activities</h2>
      <p className="mb-4">You agree not to engage in any illegal or unauthorized activities while using our services.</p>
      
      <h2 className="text-2xl font-semibold mt-4">4. Intellectual Property</h2>
      <p className="mb-4">All content on this website is owned by us and may not be used without permission.</p>
      
      <h2 className="text-2xl font-semibold mt-4">5. Limitation of Liability</h2>
      <p className="mb-4">We are not responsible for any damages resulting from your use of our services.</p>
      
      <h2 className="text-2xl font-semibold mt-4">6. Changes to Terms</h2>
      <p className="mb-4">We may update these terms from time to time. Any changes will be posted on this page.</p>
      
      <h2 className="text-2xl font-semibold mt-4">7. Contact Us</h2>
      <p className="mb-4">If you have any questions, feel free to contact us at support@example.com.</p>
      <Footer className="fixed bottom-0 w-full" />
    </div>
   
   
   </>
  )
}

export default Templates