import React from "react";

export default function Terms() {
  return (
    <div className="w-full py-16 bg-background">
      <div className="container px-4 mx-auto max-w-3xl prose prose-slate dark:prose-invert">
        <h1>Terms & Conditions</h1>
        <p className="lead">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using the Muftiyaan application, you agree to be bound by these Terms & Conditions. The application is operated and maintained by Habinix LLC, a Wyoming-registered entity.
        </p>

        <h2>2. Service Description</h2>
        <p>
          Muftiyaan is a platform providing access to Islamic scholarly content and communication channels. Habinix LLC provides the technical infrastructure and takes no responsibility for the religious or academic content provided by the independent scholarly board.
        </p>

        <h2>3. User Conduct</h2>
        <p>You agree to use the application strictly for lawful, educational, and respectful purposes. Any abuse of the platform, including but not limited to spamming, reverse-engineering, or harassing the scholarly board, will result in immediate termination of access without notice.</p>

        <h2>4. Intellectual Property</h2>
        <p>
          The application architecture, design, and branding are the intellectual property of Habinix LLC. The scholarly content remains the property of the respective authors or the scholarly board.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          Habinix LLC provides this service on an "as is" and "as available" basis. We disclaim all warranties, express or implied, regarding the application's uptime or fitness for a particular purpose. In no event shall Habinix LLC be liable for any indirect, incidental, or consequential damages arising from the use of the app.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, USA, without regard to its conflict of law provisions.
        </p>
      </div>
    </div>
  );
}