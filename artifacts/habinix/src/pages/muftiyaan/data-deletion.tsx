import React from "react";

export default function DataDeletion() {
  return (
    <div className="w-full py-16 bg-background">
      <div className="container px-4 mx-auto max-w-3xl prose prose-slate dark:prose-invert">
        <h1>Data Deletion Instructions</h1>
        <p className="lead">How to request the complete removal of your data from Muftiyaan systems.</p>

        <div className="bg-muted p-6 border-l-4 border-primary my-8 not-prose">
          <h3 className="text-lg font-bold mb-2">Automated In-App Deletion</h3>
          <p className="text-sm text-muted-foreground mb-4">The fastest way to delete your data is directly through the Muftiyaan app.</p>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-foreground font-medium">
            <li>Open the Muftiyaan application and log in to your account.</li>
            <li>Navigate to <strong>Settings</strong> from the main menu.</li>
            <li>Select <strong>Account Management</strong>.</li>
            <li>Tap <strong>Delete Account & Data</strong>.</li>
            <li>Confirm your decision when prompted.</li>
          </ol>
        </div>

        <h2>Manual Deletion Request</h2>
        <p>If you no longer have access to the application, you can submit a manual data deletion request to Habinix LLC.</p>
        
        <p>Please send an email to <strong>support@habinix.com</strong> from the email address associated with your account, containing the following:</p>
        <ul>
          <li><strong>Subject Line:</strong> Data Deletion Request - Muftiyaan</li>
          <li><strong>Body:</strong> Your registered name and a clear statement requesting the deletion of your account and all associated data.</li>
        </ul>

        <h2>What Happens Next</h2>
        <p>Upon verification of your request, we will initiate a hard delete of your profile, authentication credentials, and personal settings from our production databases within 72 hours. Note that some anonymized telemetry data or records required by law may be retained in compliance with our Privacy Policy.</p>
      </div>
    </div>
  );
}