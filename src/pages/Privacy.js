import React from 'react'
import Navbar from '../core/Layout/Navbar'

const Privacy = () => {
  return (
    <main>
      <div
        className="relative w-full h-[60vh] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(/background/privacy.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        

        <div className="absolute inset-0  text-white px-4" >
          <div className='z-50 backdrop-blur-md' style={{zIndex: 999}}>
            <Navbar/>
          </div>


          <div className='flex flex-col items-center justify-center text-center'>
            <div className='text-center max-w-[70%] pt-20'>
              <h1 className='text-white text-4xl font-bold'>Privacy Policy</h1>
              <p>Ryider (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you access and use our platform, services, and website.</p>
            </div>
          </div>
          
        </div>
      </div>



      <div className='container mx-auto px-4 flex flex-col space-y-7 py-7'>
        <div>
          <h6><span>1.</span> Information We Collect </h6>
          <p>We collect the following types of information to provide and improve our services:</p>
          <ul>
            <li>
              <h6><span>1.1.</span> Personal Information</h6>
              <p>Name, email address, phone number, and other contact details.</p>
              <p>Payment details (e.g., bank account, card details) for transactions.</p>
              <p>Government-issued IDs or verification documents (if required).</p>
            </li>
            <li>
              <h6><span>1.2.</span> Usage Data</h6>
              <p>Information about your activities on the platform, such as tasks completed, purchases made, and referral activity.</p>
              <p>Device information, IP addresses, browser type, and operating system.</p>
            </li>
            <li>
              <h6><span>1.3. </span> Cookies and Tracking Technologies</h6>
              <p> We use cookies and similar technologies to enhance your experience and gather analytics.</p>
            </li>
          </ul>
        </div>


        <div>
          <h6><span>2.</span> How We Use Your Information </h6>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>To provide and manage your account.</li>
            <li>To process transactions, including deposits, withdrawals, and purchases.</li>
            <li>To improve our platform, services, and user experience.</li>
            <li>To send important notifications, including updates and promotional offers.</li>
            <li>To detect, prevent, and address security and fraud-related issues.</li>
            <li>To comply with legal obligations.</li>

          </ul>
        </div>


        <div>
          <h6><span>3.</span>Sharing Your Information </h6>
          <p>We do not sell or rent your personal information to third parties. However, we may share your data in the following cases:</p>
          <ul>
            <li><span>.</span>With service providers: To facilitate payment processing, hosting, or customer support.</li>
            <li><span>.</span>With legal authorities: When required by law or to enforce our Terms of Service.</li>
            <li><span>.</span>With advertisers: Aggregated and anonymized data may be shared for marketing purposes.</li>
          </ul>
        </div>

        <div>
          <h6><span>4.</span> Security of Your Information </h6>
          <p>We implement industry-standard security measures to protect your personal information. While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet is 100% secure</p>
        </div>


        <div>
          <h6><span>5.</span>Your Rights </h6>
          <p>You have rights to:</p>
          <ul>
            <li><span>.</span>Access the personal information we hold about you.</li>
            <li><span>.</span>Update or correct your personal information.</li>
            <li><span>.</span>Request the deletion of your account and associated data (subject to legal and operational obligations).</li>
            <li><span>.</span>Opt out of promotional communications.</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@ryider.com.</p>
        </div>

        <div>
          <h6><span>6.</span>Retention of Information </h6>
          <p>We retain your personal information only as long as necessary for the purposes stated in this policy or as required by law.</p>
        </div>

        <div>
          <h6><span>7.</span>Third-Party Links </h6>
          <p>Our platform may contain links to third-party websites or services. We are not responsible for their privacy practices. Please review the privacy policies of third-party sites before providing any personal information.</p>
        </div>

        <div>
          <h6><span>8.</span> Changes to This Policy </h6>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Effective Date.” We encourage you to review this policy periodically.</p>
        </div>

        <div>
          <h6><span>9.</span> Contact Us</h6>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us: </p>
          <p>Email: privacy@ryider.com</p>
        </div>

        <div>
          <h6><span>10.</span>Children’s Privacy</h6>
          <p>We do not knowingly collect personal information from children under the age of 13. If we become aware that a child has provided us with personal information, we will take steps to delete it. If you are a parent or guardian and believe your child has shared personal information with us, please contact us immediately.</p>
        </div>

        <div>
          <h6><span>11.</span> International Data Transfers</h6>
          <p>Your information, including personal data, may be transferred to and maintained on servers located outside your country, where data protection laws may differ. By using our platform, you consent to such transfers, provided they meet applicable legal requirements.</p>
        </div>


        
        <div>
          <h6><span>12.</span>  Consent to Terms</h6>
          <p>By using Ryider, you agree to the terms of this Privacy Policy and our Terms of Service. If you do not agree, please refrain from using our platform</p>
        </div>


        <div>
          <h6><span>13.</span>Data Breach Policy</h6>
          <p>In the unlikely event of a data breach, we will notify affected users and the relevant authorities as required by applicable law. Our team will also take immediate steps to secure the platform and mitigate risks.</p>
        </div>


        <div>
          <h6><span>14.</span>  Cookie Policy</h6>
          <p>We use cookies to enhance your experience and gather analytics to improve our services. You can manage your cookie preferences through your browser settings.</p>
        </div>


        <div>
          <h6><span>15.</span> Third-Party Advertising and Analytics</h6>
          <p>We may work with third-party service providers to deliver personalized advertisements or analyze user behavior on our platform. These providers may use cookies or similar technologies to collect information about your activities on our site.</p>
        </div>

        <div>
          <h6><span>16.</span> Data Processing Partners</h6>
          <p>
          We may share your information with trusted third-party partners, such as payment processors, hosting providers, or analytics services, to provide and improve our services. All partners are required to adhere to strict data protection standards.</p>
        </div>


        <div>
          <h6><span>17.</span>How to Withdraw Consent.</h6>
          <p>If you wish to withdraw your consent to data processing or marketing communications, you can do so at any time by contacting us at privacy@ryider.com.</p>
        </div>


        



       




       







      





       


        





      </div>


    </main>
  )
}

export default Privacy