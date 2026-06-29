import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="w-full py-16 bg-background">
      <div className="container px-4 mx-auto max-w-3xl prose prose-slate dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="lead">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <h2>1. Introduction</h2>
        <p>
          Habinix LLC ("we", "our", or "us") operates the Muftiyaan application. We are committed to protecting your privacy and ensuring that your personal data is handled in a secure and responsible manner. This policy outlines how we collect, use, and safeguard your information.
        </p>

        <h2>2. Data Collection</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Account Information:</strong> Email address, username, and authentication credentials.</li>
          <li><strong>Usage Data:</strong> Application interactions, crash logs, and performance metrics to ensure enterprise-grade reliability.</li>
          <li><strong>Content Data:</strong> Questions, inquiries, or notes submitted through the app for scholarly review.</li>
        </ul>

        <h2>3. Data Usage</h2>
        <p>The information we collect is strictly used to:</p>
        <ul>
          <li>Operate and maintain the Muftiyaan application securely.</li>
          <li>Facilitate communication between users and the scholarly board.</li>
          <li>Improve application performance and resolve technical issues.</li>
        </ul>

        <h2>4. Data Sharing and Security</h2>
        <p>
          We do not sell your personal data. Data is stored on secure, enterprise-grade infrastructure managed by Habinix LLC. We may share necessary technical data with trusted service providers strictly for operational maintenance, subject to strict confidentiality agreements.
        </p>

        <h2>5. Your Rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of your personal data. For detailed instructions on removing your data from our systems, please refer to our <a href="/muftiyaan/data-deletion">Data Deletion Instructions</a> page.
        </p>

        <h2>6. Contact</h2>
        <p>
          For privacy-related inquiries, please contact Habinix Corporate Support at: <br/>
          <strong>support@habinix.com</strong>
        </p>
      </div>
    </div>
  );
}