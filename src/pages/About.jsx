export default function About() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--midnight)' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 40px', borderBottom: '0.5px solid var(--gilt-faint)' }}>
        <a href="/" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '18px', color: 'var(--linen)', letterSpacing: '0.02em', fontWeight: 400, textDecoration: 'none' }}>Flying Squirrel</a>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a href="/about" style={{ fontSize: '12px', color: 'var(--gilt)', letterSpacing: '0.08em', textDecoration: 'none' }}>About</a>
          <a href="/packages" style={{ fontSize: '12px', color: 'rgba(240,236,228,0.45)', letterSpacing: '0.08em', textDecoration: 'none' }}>Packages</a>
          <a href="/booking" style={{ fontSize: '12px', color: 'rgba(240,236,228,0.45)', letterSpacing: '0.08em', textDecoration: 'none' }}>Book</a>
          <a href="/booking" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--gilt)', border: '0.5px solid var(--gilt-dim)', padding: '6px 16px', borderRadius: '99px', letterSpacing: '0.06em', textDecoration: 'none' }}>Book a shoot</a>
        </div>
      </nav>

      {/* Hero statement */}
      <section style={{ padding: '96px 24px 72px', textAlign: 'center', borderBottom: '0.5px solid rgba(240,236,228,0.06)' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '20px' }}>THE PILOT</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.15, color: 'var(--linen)', maxWidth: '680px', margin: '0 auto 28px' }}>
          Most drone pilots are pilots<br />who learned Lightroom.<br />
          <em style={{ color: 'var(--gilt)', fontStyle: 'italic' }}>Matt learned to fly.</em>
        </h1>
        <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--linen-dim)', lineHeight: 1.75, maxWidth: '520px', margin: '0 auto' }}>
          Fifteen years designing for brands, agencies, and real estate clients. Then a Part 107 certification and a drone. The combination that nobody else in this market has.
        </p>
      </section>

      {/* The story */}
      <section style={{ padding: '72px 24px', maxWidth: '680px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '32px' }}>THE STORY</p>

        <p style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: 'var(--linen)', lineHeight: 1.5, marginBottom: '28px', fontWeight: 400 }}>
          "I watched agents wait three days for raw photos they still had to edit, brand, and resize themselves. I knew I could solve that in one package."
        </p>

        <p style={{ fontSize: '16px', color: 'var(--linen-dim)', lineHeight: 1.8, marginBottom: '20px' }}>
          Matt McClay has spent over fifteen years as a professional graphic designer — book covers, brand identities, marketing materials, real estate collateral. He knows what a finished, print-ready, post-ready deliverable looks like because he has been producing them his entire career.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--linen-dim)', lineHeight: 1.8, marginBottom: '20px' }}>
          When he earned his FAA Part 107 Remote Pilot Certificate, he did not become a drone pilot who does design on the side. He became a designer who can now deliver an entirely different category of product — one that goes from wheels-up to branded, formatted, and ready-to-post in under 24 hours.
        </p>
        <p style={{ fontSize: '16px', color: 'var(--linen-dim)', lineHeight: 1.8 }}>
          Flying Squirrel is the business that closes the gap between what drone operators deliver and what real estate agents actually need.
        </p>
      </section>

      {/* Gilt rule */}
      <div style={{ width: '40px', height: '0.5px', background: 'var(--gilt)', opacity: 0.3, margin: '0 auto' }} />

      {/* Credentials */}
      <section style={{ padding: '72px 24px', maxWidth: '680px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '36px' }}>CREDENTIALS & EQUIPMENT</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {[
            { label: 'Certification', value: 'FAA Part 107 Remote Pilot Certificate', sub: 'Commercially licensed and insured' },
            { label: 'Experience', value: '15+ years graphic design', sub: 'Brand, real estate, editorial, print' },
            { label: 'Coverage area', value: 'Lynchburg, VA', sub: 'And all surrounding counties' },
            { label: 'Turnaround', value: '24 hours guaranteed', sub: 'Soar and above packages' },
          ].map(item => (
            <div key={item.label} style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(240,236,228,0.08)', borderRadius: '10px' }}>
              <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.1em', marginBottom: '8px' }}>{item.label.toUpperCase()}</p>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: 'var(--linen)', marginBottom: '4px' }}>{item.value}</p>
              <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.35)' }}>{item.sub}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '20px' }}>WHAT MATT USES</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[
            { item: 'DJI drone', detail: 'High-resolution aerial photography and 4K video' },
            { item: 'Adobe Creative Suite', detail: 'Lightroom, Photoshop, Premiere — professional post-production' },
            { item: 'DaVinci Resolve', detail: 'Cinematic colour grading and video editing' },
            { item: 'CapCut', detail: 'Social media cuts optimised per platform' },
            { item: 'Private delivery portal', detail: 'Organised downloads, shoot status, shareable links' },
          ].map((row, i, arr) => (
            <div key={row.item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < arr.length - 1 ? '0.5px solid rgba(240,236,228,0.07)' : 'none', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--linen)' }}>{row.item}</span>
              <span style={{ fontSize: '13px', color: 'rgba(240,236,228,0.4)' }}>{row.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gilt rule */}
      <div style={{ width: '40px', height: '0.5px', background: 'var(--gilt)', opacity: 0.3, margin: '0 auto' }} />

      {/* What this means for agents */}
      <section style={{ padding: '72px 24px', maxWidth: '680px', margin: '0 auto', width: '100%' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '36px' }}>WHAT THIS MEANS FOR YOU</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { title: 'One vendor. Complete deliverable.', body: 'No hiring a drone pilot, then a designer, then a social media editor. Matt handles all of it. One booking, one invoice, one 24-hour window.' },
            { title: 'Files that are actually ready to use.', body: 'Every photo is edited, colour-corrected, and exported at MLS resolution, web resolution, and print resolution. Every video comes with platform-specific cuts. Nothing needs to be resized or renamed.' },
            { title: 'Your brand on every asset.', body: 'Agent headshot, brokerage logo, and contact information composited into every photo and video. Post straight from the download link — no Canva required.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '24px', background: 'rgba(200,169,110,0.04)', border: '0.5px solid rgba(200,169,110,0.12)', borderRadius: '10px' }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '17px', color: 'var(--linen)', marginBottom: '10px' }}>{item.title}</p>
              <p style={{ fontSize: '14px', color: 'var(--linen-dim)', lineHeight: 1.7 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--charcoal)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--linen)', marginBottom: '16px', fontWeight: 400, lineHeight: 1.2 }}>
          Ready to work with Matt?
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--linen-dim)', maxWidth: '380px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          Book a shoot in under two minutes. He confirms within the hour.
        </p>
        <a href="/booking" style={{ display: 'inline-block', background: 'var(--gilt)', color: 'var(--midnight)', border: 'none', borderRadius: '8px', padding: '16px 36px', fontSize: '15px', fontWeight: 500, letterSpacing: '0.02em', textDecoration: 'none' }}>Book a shoot</a>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '0.5px solid rgba(200,169,110,0.1)', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: 'rgba(240,236,228,0.5)' }}>flyingsquirrelaerial.com &nbsp;·&nbsp; Lynchburg, VA</span>
        <span style={{ fontSize: '12px', color: 'rgba(200,169,110,0.7)', letterSpacing: '0.06em' }}>Real estate · Architecture · Construction</span>
      </footer>

    </div>
  )
}
