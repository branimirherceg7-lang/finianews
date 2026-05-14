export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a2e1a 0%, #0a0f0a 60%)' }}>

      {/* Nav */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #1b5e20, #0a2e1a)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 800, color: '#00c853'
          }}>F</div>
          <span style={{ fontWeight: 700, fontSize: 20, color: '#fff' }}>Finia<span style={{ color: '#00c853' }}>News</span></span>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          <a href="#features" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>Features</a>
          <a href="#app" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>Download</a>
          <a href="/privacy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14 }}>Privacy</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '100px 20px 80px' }}>
        <div style={{
          display: 'inline-block', background: 'rgba(0,200,83,0.12)',
          border: '1px solid rgba(0,200,83,0.3)', borderRadius: 20,
          padding: '6px 16px', fontSize: 13, color: '#00c853',
          marginBottom: 24, fontWeight: 500
        }}>
          📱 Now available on Android
        </div>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, margin: '0 0 20px',
          lineHeight: 1.1, letterSpacing: -1
        }}>
          Take control of<br />
          <span style={{ color: '#00c853' }}>your money</span>
        </h1>
        <p style={{
          fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 520,
          margin: '0 auto 40px', lineHeight: 1.6
        }}>
          Track expenses, manage budgets, scan receipts with AI, and stay on top of your financial goals — all in one place.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#app" style={{
            background: '#00c853', color: '#000', padding: '14px 32px',
            borderRadius: 12, fontWeight: 700, fontSize: 16, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8
          }}>
            ↓ Download Free
          </a>
          <a href="#features" style={{
            background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '14px 32px',
            borderRadius: 12, fontWeight: 600, fontSize: 16, textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.12)'
          }}>
            See Features
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        display: 'flex', justifyContent: 'center', gap: 40,
        padding: '0 20px 80px', flexWrap: 'wrap'
      }}>
        {[
          { n: 'Free', label: 'Core features' },
          { n: 'AI', label: 'Receipt scanning' },
          { n: '100%', label: 'Private & secure' },
        ].map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: '#00c853' }}>{s.n}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 20px', maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 36, fontWeight: 800, marginBottom: 60 }}>
          Everything you need to manage money
        </h2>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20
        }}>
          {[
            { icon: '⚡', title: 'Quick Add', desc: 'Add any expense in 3 taps. No forms, no friction.' },
            { icon: '📸', title: 'AI Receipt Scan', desc: 'Photograph a receipt and AI extracts the amount, merchant and category automatically.' },
            { icon: '🎯', title: 'Smart Budgets', desc: 'Set monthly limits per category. Get alerted before you overspend.' },
            { icon: '📈', title: 'Visual Reports', desc: 'Beautiful charts showing where your money goes. Trend analysis and period comparison.' },
            { icon: '🏆', title: 'Savings Goals', desc: 'Set goals like "Trip to Japan" with a photo and progress bar. Track every euro saved.' },
            { icon: '💳', title: 'Loan Tracker', desc: 'Track loans with full amortization schedule. Calculate early repayment savings.' },
            { icon: '🔁', title: 'Recurring Bills', desc: 'Never miss a payment. Track subscriptions and bills with custom due dates.' },
            { icon: '⚡', title: 'Savings Challenges', desc: '52-week challenge, no-coffee week — visual challenges that make saving fun.' },
          ].map(f => (
            <div key={f.title} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: '28px 24px'
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{f.title}</div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '80px 20px', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>Simple pricing</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 48 }}>Start free, upgrade when you need more</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20, padding: 32, textAlign: 'left'
          }}>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Free</div>
            <div style={{ fontSize: 40, fontWeight: 800, color: '#00c853', marginBottom: 24 }}>€0</div>
            {['Unlimited transactions', 'Basic budgets (3)', '1 savings goal', '3 AI receipt scans', 'Charts & reports'].map(f => (
              <div key={f} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 10, display: 'flex', gap: 8 }}>
                <span style={{ color: '#00c853' }}>✓</span> {f}
              </div>
            ))}
          </div>
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,200,83,0.15), rgba(27,94,32,0.2))',
            border: '1px solid rgba(0,200,83,0.3)',
            borderRadius: 20, padding: 32, textAlign: 'left', position: 'relative'
          }}>
            <div style={{
              position: 'absolute', top: -12, right: 20,
              background: '#00c853', color: '#000', fontSize: 11, fontWeight: 700,
              padding: '4px 12px', borderRadius: 20
            }}>POPULAR</div>
            <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Pro</div>
            <div style={{ fontSize: 40, fontWeight: 800, color: '#00c853', marginBottom: 4 }}>€2.99<span style={{ fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.5)' }}>/mo</span></div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>or €19.99/year</div>
            {['Everything in Free', 'Unlimited budgets & goals', 'Unlimited AI receipt scans', 'CSV & PDF export', 'No ads'].map(f => (
              <div key={f} style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, marginBottom: 10, display: 'flex', gap: 8 }}>
                <span style={{ color: '#00c853' }}>✓</span> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="app" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <div style={{
          maxWidth: 600, margin: '0 auto',
          background: 'rgba(0,200,83,0.08)', border: '1px solid rgba(0,200,83,0.2)',
          borderRadius: 24, padding: '60px 40px'
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>📱</div>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Download Finia</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>
            Available on Android. iOS coming soon.
          </p>
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: '#000', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 12, padding: '14px 28px', textDecoration: 'none', color: '#fff'
          }}>
            <span style={{ fontSize: 28 }}>▶</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>GET IT ON</div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>Google Play</div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 40px', textAlign: 'center',
        color: 'rgba(255,255,255,0.35)', fontSize: 13
      }}>
        <div style={{ marginBottom: 12 }}>
          <a href="/privacy" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginRight: 24 }}>Privacy Policy</a>
          <a href="mailto:contact@finianews.com" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Contact</a>
        </div>
        © {new Date().getFullYear()} Finia. All rights reserved.
      </footer>

    </main>
  )
}
