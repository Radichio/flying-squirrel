export default function Packages() {

  const packages = [
    {
      name: 'Scout',
      price: '$249',
      period: 'per listing',
      tagline: 'MLS-ready aerial photography, fast.',
      featured: false,
      features: [
        '12–18 edited aerial photos',
        'MLS, web, and print resolutions',
        'Private download portal',
        '48-hour delivery',
        'Commercial use license',
      ],
      notIncluded: [
        'Cinematic video',
        'Social media cuts',
        'Agent branding',
        'Twilight session',
      ]
    },
    {
      name: 'Soar',
      price: '$449',
      period: 'per listing',
      tagline: 'The complete listing package. Most agents start here.',
      featured: true,
      features: [
        '20+ edited aerial photos',
        '2–3 min cinematic video',
        'Social cuts: 60s, 30s, 15s',
        'Agent-branded version of all assets',
        'Instagram feed, Reels, Stories, YouTube',
        'Private download portal',
        '24-hour delivery guaranteed',
        'Commercial use license',
      ],
      notIncluded: [
        'Twilight / golden hour session',
        'Property one-pager PDF',
      ]
    },
    {
      name: 'Nest Builder',
      price: '$699',
      period: 'per listing',
      tagline: 'The premium listing experience. For properties that deserve more.',
      featured: false,
      features: [
        'Everything in Soar',
        'Twilight / golden hour session',
        'Designed property one-pager PDF',
        'Custom agent brand templates',
        'Floor plan overlay graphics',
        '24-hour delivery guaranteed',
        'Priority scheduling',
        'Commercial use license',
      ],
      notIncluded: []
    },
    {
      name: 'Territory',
      price: '$1,500+',
      period: 'per project or monthly retainer',
      tagline: 'For construction, architecture, and commercial clients.',
      featured: false,
      features: [
        'Monthly progress documentation',
        'Before / after comparison sets',
        '3D photogrammetry models',
        'Stakeholder-ready PDF reports',
        'Architecture portfolio shots',
        'Interior design aerial walkthroughs',
        'Custom delivery schedule',
        'Dedicated project portal',
      ],
      notIncluded: []
    },
  ]

  const addons = [
    { name: 'Twilight / golden hour session', price: '+$75', desc: 'Schedule a second session at golden hour or blue hour for dramatic lighting.' },
    { name: 'Designed property one-pager PDF', price: '+$50', desc: 'A professionally designed leave-behind. Hero aerial shot, key stats, neighborhood highlights.' },
    { name: 'Rush delivery', price: '+$35', desc: 'Same-day delivery by 10pm for shoots completed before 2pm.' },
    { name: 'Floor plan overlay graphics', price: '+$60', desc: 'Property floor plan composited over the aerial view for context.' },
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--midnight)' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 40px', borderBottom: '0.5px solid var(--gilt-faint)' }}>
        <a href="/" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '18px', color: 'var(--linen)', letterSpacing: '0.02em', fontWeight: 400, textDecoration: 'none' }}>Flying Squirrel</a>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a href="/about" style={{ fontSize: '12px', color: 'rgba(240,236,228,0.45)', letterSpacing: '0.08em', textDecoration: 'none' }}>About</a>
          <a href="/packages" style={{ fontSize: '12px', color: 'var(--gilt)', letterSpacing: '0.08em', textDecoration: 'none' }}>Packages</a>
          <a href="/booking" style={{ fontSize: '12px', color: 'rgba(240,236,228,0.45)', letterSpacing: '0.08em', textDecoration: 'none' }}>Book</a>
          <a href="/booking" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--gilt)', border: '0.5px solid var(--gilt-dim)', padding: '6px 16px', borderRadius: '99px', letterSpacing: '0.06em', textDecoration: 'none' }}>Book a shoot</a>
        </div>
      </nav>

      {/* Header */}
      <section style={{ padding: '80px 24px 64px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '14px' }}>WHAT WE DELIVER</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 50px)', lineHeight: 1.15, color: 'var(--linen)', maxWidth: '560px', margin: '0 auto 20px' }}>
          Every package.<br />Every detail.
        </h1>
        <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--linen-dim)', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto' }}>
          Choose your tier below. Every package includes the commercial use license and private download portal. Add-ons available on any package.
        </p>
      </section>

      {/* Package cards */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {packages.map(pkg => (
            <div key={pkg.name} style={{
              background: pkg.featured ? 'rgba(200,169,110,0.06)' : 'rgba(255,255,255,0.02)',
              border: `${pkg.featured ? '1px' : '0.5px'} solid ${pkg.featured ? 'rgba(200,169,110,0.35)' : 'rgba(240,236,228,0.08)'}`,
              borderRadius: '14px', padding: '32px 36px',
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px',
              alignItems: 'start'
            }}>

              {/* Left: name + price */}
              <div>
                {pkg.featured && (
                  <div style={{ display: 'inline-block', fontSize: '10px', fontWeight: 500, color: 'var(--midnight)', background: 'var(--gilt)', padding: '3px 12px', borderRadius: '99px', letterSpacing: '0.06em', marginBottom: '12px' }}>
                    MOST POPULAR
                  </div>
                )}
                <p style={{ fontSize: '11px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.1em', marginBottom: '8px' }}>{pkg.name.toUpperCase()}</p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '36px', color: 'var(--linen)', lineHeight: 1, marginBottom: '4px' }}>{pkg.price}</p>
                <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.35)', marginBottom: '16px' }}>{pkg.period}</p>
                <p style={{ fontSize: '14px', color: 'var(--linen-dim)', lineHeight: 1.6 }}>{pkg.tagline}</p>
                <a href="/booking" style={{ display: 'inline-block', marginTop: '20px', background: pkg.featured ? 'var(--gilt)' : 'transparent', color: pkg.featured ? 'var(--midnight)' : 'var(--gilt)', border: `0.5px solid ${pkg.featured ? 'var(--gilt)' : 'rgba(200,169,110,0.4)'}`, borderRadius: '6px', padding: '10px 22px', fontSize: '13px', fontWeight: 500, letterSpacing: '0.03em', textDecoration: 'none' }}>
                  Book this package
                </a>
              </div>

              {/* Middle: included */}
              <div>
                <p style={{ fontSize: '10px', fontWeight: 500, color: 'rgba(240,236,228,0.4)', letterSpacing: '0.1em', marginBottom: '14px' }}>INCLUDED</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {pkg.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span style={{ color: 'var(--gilt)', fontSize: '12px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                      <span style={{ fontSize: '13px', color: 'rgba(240,236,228,0.7)', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: not included */}
              <div>
                {pkg.notIncluded.length > 0 && (
                  <>
                    <p style={{ fontSize: '10px', fontWeight: 500, color: 'rgba(240,236,228,0.4)', letterSpacing: '0.1em', marginBottom: '14px' }}>NOT INCLUDED</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {pkg.notIncluded.map(f => (
                        <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <span style={{ color: 'rgba(240,236,228,0.2)', fontSize: '12px', flexShrink: 0, marginTop: '1px' }}>–</span>
                          <span style={{ fontSize: '13px', color: 'rgba(240,236,228,0.3)', lineHeight: 1.5 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {pkg.notIncluded.length === 0 && pkg.name !== 'Territory' && (
                  <div style={{ padding: '14px 18px', background: 'rgba(200,169,110,0.06)', border: '0.5px solid rgba(200,169,110,0.15)', borderRadius: '8px' }}>
                    <p style={{ fontSize: '12px', color: 'var(--gilt)', margin: 0 }}>Everything included. Nothing held back.</p>
                  </div>
                )}
                {pkg.name === 'Territory' && (
                  <div style={{ padding: '14px 18px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(240,236,228,0.08)', borderRadius: '8px' }}>
                    <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.45)', margin: '0 0 6px' }}>Custom scope available.</p>
                    <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.3)', margin: 0, lineHeight: 1.5 }}>Monthly retainers, multi-site contracts, and stakeholder reporting packages available on request.</p>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section style={{ padding: '72px 24px', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '12px' }}>ADD-ONS</p>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--linen)', marginBottom: '40px', lineHeight: 1.2 }}>Enhance any package</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
            {addons.map(a => (
              <div key={a.name} style={{ padding: '20px 22px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(240,236,228,0.08)', borderRadius: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--linen)', margin: 0, maxWidth: '200px', lineHeight: 1.4 }}>{a.name}</p>
                  <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--gilt)', margin: 0, flexShrink: 0 }}>{a.price}</p>
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.4)', lineHeight: 1.6, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 24px', maxWidth: '680px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '36px' }}>COMMON QUESTIONS</p>
        {[
          { q: 'What happens if the weather is bad?', a: 'Matt monitors conditions 72 hours before your shoot and reaches out proactively if there is a concern. A reschedule is offered before you have to ask — never a morning-of cancellation by text.' },
          { q: 'What does "agent-branded" mean exactly?', a: 'Your headshot, brokerage logo, and contact information are composited directly into every photo and video. You receive both branded and unbranded versions. Post the branded version straight from the download link.' },
          { q: 'Who owns the photos and videos?', a: 'You receive a commercial use license for all marketing purposes related to the listing — MLS, social media, print, email, and your website. The license is perpetual.' },
          { q: 'How does the private portal work?', a: 'Every shoot gets its own private page with a unique URL. Assets are organised by type — photos, video, social cuts, PDFs. You can share the link directly with your sellers so they can see the progress and download files.' },
          { q: 'Do you serve areas outside Lynchburg?', a: 'Yes — Matt covers Lynchburg and all surrounding counties. For projects further afield, contact him directly to discuss travel and scheduling.' },
        ].map((faq, i, arr) => (
          <div key={i} style={{ padding: '20px 0', borderBottom: i < arr.length - 1 ? '0.5px solid rgba(240,236,228,0.07)' : 'none' }}>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: 'var(--linen)', marginBottom: '10px', lineHeight: 1.4 }}>{faq.q}</p>
            <p style={{ fontSize: '14px', color: 'var(--linen-dim)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--charcoal)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--linen)', marginBottom: '16px', fontWeight: 400, lineHeight: 1.2 }}>
          Ready to book your shoot?
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--linen-dim)', maxWidth: '360px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          Pick your package above or use the quote builder to get an instant price.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/booking" style={{ display: 'inline-block', background: 'var(--gilt)', color: 'var(--midnight)', borderRadius: '8px', padding: '16px 36px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.02em' }}>Book a shoot</a>
          <a href="/" style={{ display: 'inline-block', background: 'transparent', color: 'var(--linen)', border: '0.5px solid rgba(240,236,228,0.2)', borderRadius: '8px', padding: '16px 36px', fontSize: '15px', textDecoration: 'none', letterSpacing: '0.02em' }}>Get instant quote</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '0.5px solid rgba(200,169,110,0.1)', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: 'rgba(240,236,228,0.5)' }}>flyingsquirrelaerial.com &nbsp;·&nbsp; Lynchburg, VA</span>
        <span style={{ fontSize: '12px', color: 'rgba(200,169,110,0.7)', letterSpacing: '0.06em' }}>Real estate · Architecture · Construction</span>
      </footer>

    </div>
  )
}
