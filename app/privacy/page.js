export const metadata = {
  title: 'Privacy Policy — Finia',
}

export default function Privacy() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '60px 24px', color: '#fff', fontFamily: "'Inter', sans-serif" }}>
      <a href="/" style={{ color: '#00c853', textDecoration: 'none', fontSize: 14 }}>← Back to Finia</a>
      <h1 style={{ fontSize: 36, fontWeight: 800, margin: '32px 0 8px' }}>Privacy Policy</h1>
      <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 48 }}>Last updated: May 14, 2025</p>

      {[
        {
          title: '1. Information We Collect',
          text: `Finia is designed with your privacy in mind. All financial data you enter (transactions, budgets, goals, loans) is stored locally on your device using encrypted local storage. We do not collect, transmit, or store your personal financial data on our servers.

When you use AI-powered features (receipt scanning, financial insights), the relevant data is sent to Anthropic's API to process your request. We do not store this data after processing.`
        },
        {
          title: '2. How We Use Your Information',
          text: `- Financial data: Stored only on your device. Never transmitted to us.
- AI features: Processed by Anthropic (api.anthropic.com) and returned to your device.
- Analytics: We may collect anonymized, aggregated usage statistics (e.g., number of app opens) to improve the app. This data cannot be linked to you personally.`
        },
        {
          title: '3. Third-Party Services',
          text: `The app uses the following third-party services:
- Anthropic API: For AI receipt scanning and financial insights. Anthropic's privacy policy applies to data processed by their API.
- Google AdMob (Free version): For displaying advertisements. Google may collect device identifiers for ad personalization. You can opt out in your device settings.
- Google Play: For app distribution and in-app purchases.`
        },
        {
          title: '4. Data Storage & Security',
          text: `All your financial data is stored locally on your device. We use industry-standard encryption for local data storage. We do not have access to your financial data. If you uninstall the app, all local data is deleted.`
        },
        {
          title: '5. Children\'s Privacy',
          text: `Finia is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.`
        },
        {
          title: '6. Your Rights',
          text: `You have the right to:
- Access your data: All your data is on your device, accessible at any time.
- Delete your data: Uninstall the app or use Settings → Reset Data within the app.
- Opt out of personalized ads: Use your device's advertising settings.`
        },
        {
          title: '7. Changes to This Policy',
          text: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.`
        },
        {
          title: '8. Contact Us',
          text: `If you have questions about this Privacy Policy, please contact us at: contact@finianews.com`
        },
      ].map(section => (
        <div key={section.title} style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#00c853' }}>{section.title}</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, whiteSpace: 'pre-line', fontSize: 15 }}>{section.text}</p>
        </div>
      ))}
    </main>
  )
}
