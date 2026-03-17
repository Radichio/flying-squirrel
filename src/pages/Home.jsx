import { useState, useRef, useCallback } from 'react'

function HeroBackground() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <iframe
          src="https://www.youtube.com/embed/Q33t6phnQaI?autoplay=1&mute=1&loop=1&playlist=Q33t6phnQaI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1"
          allow="autoplay; encrypted-media"
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '177.78vh', height: '56.25vw', minWidth: '100%', minHeight: '100%', border: 'none', opacity: 0.85 }}
        />
      </div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,13,13,0.25) 0%, rgba(13,13,13,0.05) 40%, rgba(13,13,13,0.55) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 50%, rgba(13,13,13,0.45) 100%)' }} />
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <g opacity="0.35" fill="none" stroke="#c8a96e" strokeWidth="0.8">
          <path d="M24,24 L24,52 L52,52"/><path d="M24,24 L52,24"/>
          <path d="M24,676 L24,648 L52,648"/><path d="M24,676 L52,676"/>
        </g>
        <text x="32" y="692" fontSize="9" fill="#c8a96e" opacity="0.4" fontFamily="monospace">ALT 120m · LYNCHBURG VA</text>
        <text x="32" y="36" fontSize="9" fill="#c8a96e" opacity="0.4" fontFamily="monospace">PART 107 · 4K RAW</text>
      </svg>
    </div>
  )
}

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef(null)
  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setPosition(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)))
  }, [])
  const onMouseDown = () => setDragging(true)
  const onMouseUp = () => setDragging(false)
  const onMouseMove = (e) => { if (dragging) updatePosition(e.clientX) }
  const onTouchMove = (e) => updatePosition(e.touches[0].clientX)
  return (
    <div ref={containerRef} onClick={e => updatePosition(e.clientX)} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove} onMouseLeave={onMouseUp} onTouchMove={onTouchMove}
      style={{ position: 'relative', width: '100%', maxWidth: '700px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', cursor: 'ew-resize', userSelect: 'none', aspectRatio: '16/9' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <svg viewBox="0 0 700 394" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <rect width="700" height="394" fill="#c8d8e8"/>
          <rect y="240" width="700" height="154" fill="#5a8a3a"/>
          <rect x="280" y="240" width="140" height="154" fill="#888"/>
          <rect x="200" y="145" width="300" height="125" fill="#e8d5b0"/>
          <polygon points="175,150 350,65 525,150" fill="#8b4a2a"/>
          <rect x="315" y="220" width="70" height="65" fill="#7a5030"/>
          <rect x="218" y="168" width="70" height="52" fill="#a8c8e0" rx="2"/>
          <rect x="412" y="168" width="70" height="52" fill="#a8c8e0" rx="2"/>
          <ellipse cx="135" cy="175" rx="45" ry="58" fill="#2d6a20"/>
          <ellipse cx="565" cy="182" rx="38" ry="50" fill="#3a7a28"/>
          <text x="350" y="375" textAnchor="middle" fontSize="14" fill="#555" fontFamily="sans-serif">Street level</text>
        </svg>
      </div>
      <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <svg viewBox="0 0 700 394" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
          <rect width="700" height="394" fill="#4a8c3a"/>
          <rect x="0" y="172" width="700" height="36" fill="#777"/>
          <rect x="322" y="0" width="56" height="394" fill="#777"/>
          <rect x="55" y="20" width="240" height="140" fill="#6aaa4a" rx="4"/>
          <rect x="405" y="20" width="240" height="140" fill="#6aaa4a" rx="4"/>
          <rect x="55" y="238" width="240" height="136" fill="#6aaa4a" rx="4"/>
          <rect x="405" y="238" width="240" height="136" fill="#6aaa4a" rx="4"/>
          <rect x="88" y="42" width="174" height="96" fill="#8b4a2a" rx="3" opacity=".8"/>
          <rect x="438" y="42" width="174" height="96" fill="#6a3a22" rx="3" opacity=".8"/>
          <rect x="88" y="258" width="174" height="96" fill="#7a4020" rx="3" opacity=".75"/>
          <rect x="438" y="258" width="174" height="96" fill="#8b4a2a" rx="3" opacity=".8"/>
          <circle cx="350" cy="190" r="22" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="4 3" opacity=".6"/>
          <circle cx="350" cy="190" r="5" fill="#fff" opacity=".85"/>
          <text x="350" y="378" textAnchor="middle" fontSize="14" fill="#fff" fontFamily="sans-serif">Aerial view</text>
        </svg>
      </div>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${position}%`, transform: 'translateX(-50%)', width: '3px', background: '#fff', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
          <span style={{ fontSize: '13px', color: '#333', letterSpacing: '-2px' }}>◀▶</span>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '14px', left: '14px', fontSize: '11px', fontWeight: 500, color: '#fff', background: 'rgba(0,0,0,0.45)', padding: '3px 10px', borderRadius: '99px' }}>AERIAL</div>
      <div style={{ position: 'absolute', bottom: '14px', right: '14px', fontSize: '11px', fontWeight: 500, color: '#fff', background: 'rgba(0,0,0,0.45)', padding: '3px 10px', borderRadius: '99px' }}>STREET</div>
    </div>
  )
}

function SocialPreview() {
  const [active, setActive] = useState('reels')
  const formats = [
    { id: 'feed', label: 'Instagram Feed', ratio: '1 / 1', w: 200, desc: '1080 × 1080px square' },
    { id: 'reels', label: 'Reels / Stories', ratio: '9 / 16', w: 130, desc: '1080 × 1920px vertical' },
    { id: 'youtube', label: 'YouTube / MLS', ratio: '16 / 9', w: 260, desc: '1920 × 1080px landscape' },
  ]
  const current = formats.find(f => f.id === active)
  const AerialPhoto = ({ ratio }) => (
    <div style={{ width: '100%', aspectRatio: ratio, background: '#2a4a1a', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
      <svg viewBox="0 0 300 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="300" fill="#4a8c3a"/>
        <rect x="0" y="90" width="300" height="20" fill="#666"/>
        <rect x="140" y="0" width="20" height="300" fill="#666"/>
        <rect x="20" y="10" width="105" height="72" fill="#6aaa4a" rx="3"/><rect x="175" y="10" width="105" height="72" fill="#6aaa4a" rx="3"/>
        <rect x="20" y="120" width="105" height="72" fill="#6aaa4a" rx="3"/><rect x="175" y="120" width="105" height="72" fill="#6aaa4a" rx="3"/>
        <rect x="35" y="20" width="75" height="52" fill="#8b4a2a" rx="2" opacity=".8"/>
        <rect x="190" y="20" width="75" height="52" fill="#6a3a22" rx="2" opacity=".8"/>
        <rect x="35" y="130" width="75" height="52" fill="#7a4020" rx="2" opacity=".75"/>
        <rect x="190" y="130" width="75" height="52" fill="#8b4a2a" rx="2" opacity=".8"/>
        <circle cx="150" cy="100" r="12" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3 2" opacity=".5"/>
        <circle cx="150" cy="100" r="3" fill="#fff" opacity=".7"/>
      </svg>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.75))', padding: '20px 10px 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#c8a96e', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '9px', fontWeight: 700, color: '#0d0d0d' }}>MC</span>
        </div>
        <div>
          <p style={{ fontSize: '8px', color: '#fff', fontWeight: 600, lineHeight: 1, margin: 0 }}>Matt McClay</p>
          <p style={{ fontSize: '7px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Flying Squirrel Aerial</p>
        </div>
      </div>
    </div>
  )
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'inline-flex', gap: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '4px', marginBottom: '36px' }}>
        {formats.map(f => (
          <button key={f.id} onClick={() => setActive(f.id)} style={{ padding: '8px 18px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 500, background: active === f.id ? 'var(--gilt)' : 'transparent', color: active === f.id ? 'var(--midnight)' : 'rgba(240,236,228,0.6)', transition: 'all 0.15s' }}>{f.label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: `${current.w}px`, background: '#1a1a1a', borderRadius: active === 'youtube' ? '8px' : '24px', padding: active === 'youtube' ? '8px' : '10px 8px 14px', border: '2px solid #333' }}>
            {active !== 'youtube' && <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}><div style={{ width: '40px', height: '4px', borderRadius: '2px', background: '#333' }} /></div>}
            <AerialPhoto ratio={current.ratio} />
            {active !== 'youtube' && <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}><div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1.5px solid #444' }} /></div>}
          </div>
          <p style={{ fontSize: '11px', color: 'rgba(240,236,228,0.5)', letterSpacing: '0.04em' }}>{current.desc}</p>
        </div>
        <div style={{ textAlign: 'left', maxWidth: '220px' }}>
          <p style={{ fontSize: '11px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.1em', marginBottom: '14px' }}>INCLUDED IN EVERY SOAR+</p>
          {[
            { fmt: 'Instagram feed', spec: '1080×1080 · square' },
            { fmt: 'Reels + Stories', spec: '1080×1920 · vertical' },
            { fmt: 'YouTube / MLS', spec: '1920×1080 · landscape' },
            { fmt: 'Client-branded', spec: 'Logo + contact composited' },
          ].map(item => (
            <div key={item.fmt} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gilt)', opacity: 0.7, flexShrink: 0, marginTop: '5px' }} />
              <div>
                <p style={{ fontSize: '14px', color: 'var(--linen)', margin: 0, fontWeight: 500 }}>{item.fmt}</p>
                <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.5)', margin: 0 }}>{item.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatusTracker() {
  const [active, setActive] = useState(2)
  const stages = [
    { id: 0, label: 'Booked', desc: 'Shoot confirmed and on the calendar' },
    { id: 1, label: 'Confirmed', desc: 'Weather checked, details locked in' },
    { id: 2, label: 'Shoot day', desc: 'In the air right now' },
    { id: 3, label: 'Editing', desc: 'Photos and video in post-production' },
    { id: 4, label: 'Ready', desc: 'Your files are ready to download' },
  ]
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        {stages.map((s, i) => (
          <div key={s.id} style={{ display: 'flex', alignItems: 'center', flex: i < stages.length - 1 ? 1 : 0 }}>
            <div onClick={() => setActive(s.id)} style={{ width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', background: s.id <= active ? 'var(--gilt)' : 'rgba(255,255,255,0.07)', border: s.id === active ? '2px solid var(--gilt)' : s.id < active ? 'none' : '0.5px solid rgba(240,236,228,0.2)', boxShadow: s.id === active ? '0 0 0 4px rgba(200,169,110,0.15)' : 'none', transition: 'all 0.2s' }}>
              {s.id < active ? <span style={{ fontSize: '13px', color: 'var(--midnight)', fontWeight: 700 }}>✓</span> : <span style={{ fontSize: '11px', fontWeight: 600, color: s.id === active ? 'var(--midnight)' : 'rgba(240,236,228,0.35)' }}>{s.id + 1}</span>}
            </div>
            {i < stages.length - 1 && <div style={{ flex: 1, height: '1px', background: s.id < active ? 'var(--gilt)' : 'rgba(240,236,228,0.15)', transition: 'background 0.3s' }} />}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginBottom: '36px' }}>
        {stages.map(s => (
          <div key={s.id} style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.08em', color: s.id === active ? 'var(--gilt)' : s.id < active ? 'rgba(200,169,110,0.6)' : 'rgba(240,236,228,0.3)', margin: 0 }}>{s.label.toUpperCase()}</p>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(200,169,110,0.08)', border: '0.5px solid rgba(200,169,110,0.25)', borderRadius: '12px', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
        <div>
          <p style={{ fontSize: '11px', color: 'var(--gilt)', letterSpacing: '0.12em', marginBottom: '6px' }}>CURRENT STATUS</p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '24px', color: 'var(--linen)', marginBottom: '4px' }}>{stages[active].label}</p>
          <p style={{ fontSize: '14px', color: 'var(--linen-dim)' }}>{stages[active].desc}</p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0} style={{ padding: '8px 16px', borderRadius: '6px', border: '0.5px solid rgba(240,236,228,0.2)', background: 'transparent', color: active === 0 ? 'rgba(240,236,228,0.2)' : 'var(--linen)', cursor: active === 0 ? 'default' : 'pointer', fontSize: '12px' }}>← Prev</button>
          <button onClick={() => setActive(Math.min(4, active + 1))} disabled={active === 4} style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', background: active === 4 ? 'rgba(200,169,110,0.2)' : 'var(--gilt)', color: active === 4 ? 'rgba(200,169,110,0.4)' : 'var(--midnight)', cursor: active === 4 ? 'default' : 'pointer', fontSize: '12px', fontWeight: 500 }}>Next →</button>
        </div>
      </div>
      <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.35)', textAlign: 'center', marginTop: '16px' }}>Every client gets a private link — no login needed</p>
    </div>
  )
}

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [propType, setPropType] = useState('Residential')
  const [pkg, setPkg] = useState({ name: 'Soar', price: 449 })
  const [addons, setAddons] = useState({})

  const propTypes = ['Residential', 'Condo / townhouse', 'Commercial', 'Land / acreage']
  const packages = [{ name: 'Scout', price: 249 }, { name: 'Soar', price: 449 }, { name: 'Nest Builder', price: 699 }]
  const addonList = [
    { name: 'Twilight / golden hour session', price: 75 },
    { name: 'Designed property one-pager PDF', price: 50 },
    { name: 'Rush delivery (same day by 10pm)', price: 35 },
    { name: 'Floor plan overlay graphics', price: 60 },
  ]

  const addonTotal = Object.entries(addons).reduce((sum, [name, checked]) => {
    if (!checked) return sum
    const item = addonList.find(a => a.name === name)
    return sum + (item ? item.price : 0)
  }, 0)
  const total = pkg.price + addonTotal

  function toggleAddon(name) { setAddons(prev => ({ ...prev, [name]: !prev[name] })) }
  function handleSubmit() {
    if (!email || !email.includes('@')) { setError(true); return }
    setSubmitted(true); setError(false)
  }

  const btnBase = { border: 'none', borderRadius: '6px', padding: '8px 16px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.03em' }
  const btnActive = { ...btnBase, background: 'var(--gilt)', color: 'var(--midnight)' }
  const btnInactive = { ...btnBase, background: 'rgba(255,255,255,0.06)', color: 'rgba(240,236,228,0.65)', border: '0.5px solid rgba(240,236,228,0.15)' }

  const differentiators = [
    { title: 'Designer first. Pilot second.', body: 'Most drone operators hand over raw files and call it done. Matt is a professional graphic designer who also flies. Every deliverable is finished, branded, and ready to use before it leaves his hands.' },
    { title: '24-hour turnaround. Guaranteed.', body: 'Shoot in the morning, fully edited and delivered to your private portal by 9am the next day. Every Soar package and above. No exceptions.' },
    { title: 'Branded on every asset.', body: 'Logo, contact information, and headshot composited into every photo and video. Post directly from the download link. Nobody else in this market offers this as a standard inclusion.' },
    { title: 'Weather managed proactively.', body: 'Matt monitors conditions 72 hours out and contacts you before you have to ask. A reschedule is offered before the morning of — never a last-minute cancellation.' },
    { title: 'Every format, ready to use.', body: 'Social cuts, MLS resolution, print resolution, CoStar-ready sets — every package delivers the right file for the right platform, named and organised. Nothing to resize, nothing to figure out.' },
  ]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--midnight)' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 40px', borderBottom: '0.5px solid var(--gilt-faint)', position: 'relative', zIndex: 10 }}>
        <a href="/" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '18px', color: 'var(--linen)', letterSpacing: '0.02em', fontWeight: 400, textDecoration: 'none' }}>Flying Squirrel</a>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a href="/about" style={{ fontSize: '12px', color: 'rgba(240,236,228,0.6)', letterSpacing: '0.08em', textDecoration: 'none' }}>About</a>
          <a href="/packages" style={{ fontSize: '12px', color: 'rgba(240,236,228,0.6)', letterSpacing: '0.08em', textDecoration: 'none' }}>Packages</a>
          <a href="/booking" style={{ fontSize: '12px', color: 'rgba(240,236,228,0.6)', letterSpacing: '0.08em', textDecoration: 'none' }}>Book</a>
          <a href="/booking" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--gilt)', border: '0.5px solid var(--gilt-dim)', padding: '6px 16px', borderRadius: '99px', letterSpacing: '0.06em', textDecoration: 'none' }}>Book a shoot</a>
        </div>
      </nav>

      {/* Hero */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 60px', textAlign: 'center', position: 'relative', minHeight: '85vh' }}>
        <HeroBackground />
        <div style={{ position: 'relative', zIndex: 2, background: 'rgba(13,13,13,0.5)', backdropFilter: 'blur(3px)', borderRadius: '12px', padding: '28px 36px', maxWidth: '520px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.22em', marginBottom: '22px' }}>AERIAL · DESIGN · DELIVERY</p>
          <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.15, color: 'var(--linen)', marginBottom: '16px' }}>
            Aerial media for real estate,<br />development{' '}
            <em style={{ color: 'var(--gilt)', fontStyle: 'italic' }}>&amp; architecture.</em>
          </h1>
          <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--linen-dim)', lineHeight: 1.65, maxWidth: '420px', marginBottom: '28px' }}>
            Cinematic photography and video for agents, brokers, developers, and designers — branded, formatted, and delivered in 24 hours. Serving Lynchburg, VA and surrounding areas.
          </p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
            {['24-hour delivery', 'Branded included', 'Every format ready', 'Designer + pilot'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', color: 'rgba(240,236,228,0.7)' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gilt)', flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
          {!submitted ? (
            <>
              <div style={{ display: 'flex', gap: '10px', maxWidth: '440px', width: '100%', marginBottom: '14px', margin: '0 auto 14px' }}>
                <input type="email" placeholder="your@email.com" value={email} onChange={e => { setEmail(e.target.value); setError(false) }}
                  style={{ flex: 1, background: 'rgba(255,255,255,0.08)', border: `0.5px solid ${error ? 'rgba(224,75,75,0.6)' : 'rgba(200,169,110,0.3)'}`, borderRadius: '6px', padding: '13px 16px', fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: 'var(--linen)', outline: 'none' }} />
                <button onClick={handleSubmit} style={{ background: 'var(--gilt)', color: 'var(--midnight)', border: 'none', borderRadius: '6px', padding: '13px 24px', fontSize: '14px', fontWeight: 500, whiteSpace: 'nowrap', cursor: 'pointer' }}>Get in touch</button>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(240,236,228,0.45)' }}>Enter your email and Matt will reach out within 24 hours</p>
            </>
          ) : (
            <p style={{ fontSize: '15px', color: 'var(--gilt)' }}>Perfect — Matt will be in touch within 24 hours.</p>
          )}
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(transparent, var(--midnight))', zIndex: 1 }} />
      </main>

      {/* WHO WE SERVE */}
      <section style={{ padding: '56px 24px', background: 'var(--charcoal)', borderBottom: '0.5px solid rgba(200,169,110,0.1)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2px' }}>
          {[
            { label: 'Residential agents', desc: 'MLS-ready photos, cinematic video, and social cuts — all branded and delivered before your next showing.' },
            { label: 'Commercial brokers', desc: 'CoStar and LoopNet ready. Investor deck assets. Property boundary overlays. High-altitude context shots.' },
            { label: 'Construction & development', desc: 'Monthly progress documentation, before/after sets, and stakeholder-ready PDF reports. A permanent aerial record.' },
            { label: 'Architecture & design', desc: 'Portfolio-quality aerials that show site context, massing, and landscape relationship — shot by a designer.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '24px 28px', borderLeft: i > 0 ? '0.5px solid rgba(240,236,228,0.07)' : 'none' }}>
              <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--gilt)', marginBottom: '8px', letterSpacing: '0.04em' }}>{item.label}</p>
              <p style={{ fontSize: '13px', color: 'rgba(240,236,228,0.55)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={{ padding: '72px 24px', background: 'var(--midnight)', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '12px' }}>THE DIFFERENCE</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--linen)', marginBottom: '16px', lineHeight: 1.2 }}>See what you've been missing</h2>
        <p style={{ fontSize: '16px', color: 'var(--linen-dim)', maxWidth: '440px', margin: '0 auto 40px' }}>Drag the handle to compare street-level photography with what Flying Squirrel delivers.</p>
        <BeforeAfterSlider />
      </section>

      {/* COMMERCIAL SERVICES */}
      <section style={{ padding: '72px 24px', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '12px', textAlign: 'center' }}>COMMERCIAL SERVICES</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--linen)', marginBottom: '16px', lineHeight: 1.2, textAlign: 'center' }}>Beyond the listing photo.</h2>
          <p style={{ fontSize: '16px', color: 'var(--linen-dim)', maxWidth: '520px', margin: '0 auto 52px', textAlign: 'center', lineHeight: 1.7 }}>
            Flying Squirrel works with commercial brokers, developers, and architecture firms who need more than a residential drone operator can deliver.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              {
                label: 'Commercial real estate',
                price: '$1,000–$2,500',
                items: [
                  'CoStar and LoopNet ready image sets',
                  'Investor deck and offering memorandum assets',
                  'Property boundary overlays',
                  'High-altitude context shots — highway access, anchor tenants, trade area',
                  'Branded and unbranded versions',
                ]
              },
              {
                label: 'Construction documentation',
                price: '$2,500+ / month',
                items: [
                  'Monthly progress flyovers at consistent framing',
                  'Before / after comparison sets',
                  'Stakeholder-ready PDF progress reports',
                  'Permanent portal archive by date',
                  '3D photogrammetry models on request',
                ]
              },
              {
                label: 'Architecture & design',
                price: '$800–$1,500',
                items: [
                  'Editorial-quality portfolio aerials',
                  'Site context and massing documentation',
                  'Landscape and environment relationship shots',
                  'Pre-construction site surveys',
                  'Shot by a designer who understands the brief',
                ]
              },
            ].map((svc, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(240,236,228,0.1)', borderRadius: '12px', padding: '28px' }}>
                <p style={{ fontSize: '11px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.1em', marginBottom: '6px' }}>{svc.label.toUpperCase()}</p>
                <p style={{ fontFamily: 'Georgia, serif', fontSize: '18px', color: 'var(--linen)', marginBottom: '18px' }}>{svc.price}</p>
                <div style={{ borderTop: '0.5px solid rgba(240,236,228,0.08)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {svc.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gilt)', opacity: 0.6, flexShrink: 0, marginTop: '5px' }} />
                      <span style={{ fontSize: '13px', color: 'rgba(240,236,228,0.65)', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/booking" style={{ display: 'inline-block', marginTop: '20px', fontSize: '12px', fontWeight: 500, color: 'var(--gilt)', border: '0.5px solid rgba(200,169,110,0.35)', borderRadius: '6px', padding: '8px 18px', textDecoration: 'none', letterSpacing: '0.04em' }}>Request a consultation</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PREVIEW */}
      <section style={{ padding: '72px 24px', background: 'var(--midnight)', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '12px' }}>READY TO USE</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--linen)', marginBottom: '16px', lineHeight: 1.2 }}>Every format. Delivered.</h2>
        <p style={{ fontSize: '16px', color: 'var(--linen-dim)', maxWidth: '440px', margin: '0 auto 48px' }}>Every Soar and above package includes cuts pre-formatted for every platform. Branded and ready to use straight from the download link.</p>
        <SocialPreview />
      </section>

      {/* STATUS TRACKER */}
      <section style={{ padding: '72px 24px', background: 'var(--charcoal)', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '12px' }}>TRANSPARENCY</p>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--linen)', marginBottom: '16px', lineHeight: 1.2 }}>Always know where your shoot stands</h2>
        <p style={{ fontSize: '16px', color: 'var(--linen-dim)', maxWidth: '440px', margin: '0 auto 48px' }}>Every client gets a private status link. No chasing emails. No wondering.</p>
        <StatusTracker />
      </section>

      {/* WHY FLYING SQUIRREL */}
      <section style={{ padding: '72px 24px', background: 'var(--midnight)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '12px', textAlign: 'center' }}>WHY FLYING SQUIRREL</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--linen)', marginBottom: '16px', lineHeight: 1.2, textAlign: 'center' }}>Not just a drone pilot.</h2>
          <p style={{ fontSize: '17px', color: 'var(--linen-dim)', maxWidth: '480px', margin: '0 auto 52px', textAlign: 'center', lineHeight: 1.7 }}>
            Most pilots learned Lightroom after they got their Part 107. Matt is a professional graphic designer who learned to fly.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {differentiators.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: '28px', padding: '28px 0', borderBottom: i < differentiators.length - 1 ? '0.5px solid rgba(240,236,228,0.08)' : 'none', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '50%', border: '0.5px solid var(--gilt-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--gilt)' }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '19px', color: 'var(--linen)', marginBottom: '8px', lineHeight: 1.3 }}>{d.title}</p>
                  <p style={{ fontSize: '15px', color: 'var(--linen-dim)', lineHeight: 1.75, maxWidth: '560px' }}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE BUILDER */}
      <section style={{ padding: '72px 24px', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '12px', textAlign: 'center' }}>INSTANT PRICING</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--linen)', textAlign: 'center', marginBottom: '48px', lineHeight: 1.2 }}>Build your shoot</h2>
          <div style={{ marginBottom: '28px' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(240,236,228,0.55)', letterSpacing: '0.12em', marginBottom: '12px' }}>PROPERTY TYPE</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {propTypes.map(t => <button key={t} onClick={() => setPropType(t)} style={propType === t ? btnActive : btnInactive}>{t}</button>)}
            </div>
          </div>
          <div style={{ marginBottom: '28px' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(240,236,228,0.55)', letterSpacing: '0.12em', marginBottom: '12px' }}>PACKAGE</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {packages.map(p => <button key={p.name} onClick={() => setPkg(p)} style={pkg.name === p.name ? btnActive : btnInactive}>{p.name} — ${p.price}</button>)}
            </div>
          </div>
          <div style={{ marginBottom: '36px' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(240,236,228,0.55)', letterSpacing: '0.12em', marginBottom: '12px' }}>ADD-ONS</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {addonList.map(a => (
                <div key={a.name} onClick={() => toggleAddon(a.name)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 16px', borderRadius: '8px', cursor: 'pointer', background: addons[a.name] ? 'rgba(200,169,110,0.1)' : 'rgba(255,255,255,0.03)', border: `0.5px solid ${addons[a.name] ? 'rgba(200,169,110,0.4)' : 'rgba(240,236,228,0.1)'}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '4px', flexShrink: 0, background: addons[a.name] ? 'var(--gilt)' : 'transparent', border: `0.5px solid ${addons[a.name] ? 'var(--gilt)' : 'rgba(240,236,228,0.25)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {addons[a.name] && <span style={{ fontSize: '10px', color: 'var(--midnight)', fontWeight: 700, lineHeight: 1 }}>✓</span>}
                    </div>
                    <span style={{ fontSize: '14px', color: addons[a.name] ? 'var(--linen)' : 'rgba(240,236,228,0.7)' }}>{a.name}</span>
                  </div>
                  <span style={{ fontSize: '13px', color: addons[a.name] ? 'var(--gilt)' : 'rgba(240,236,228,0.45)', fontWeight: 500 }}>+${a.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'var(--midnight)', borderRadius: '12px', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', border: '0.5px solid var(--gilt-faint)' }}>
            <div>
              <p style={{ fontSize: '13px', color: 'rgba(240,236,228,0.5)', marginBottom: '4px', letterSpacing: '0.06em' }}>{pkg.name} — {propType}</p>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '42px', color: 'var(--linen)', lineHeight: 1 }}>${total}</p>
              <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.4)', marginTop: '4px' }}>24-hour delivery · Branded included</p>
            </div>
            <a href="/booking" style={{ background: 'var(--gilt)', color: 'var(--midnight)', border: 'none', borderRadius: '8px', padding: '14px 28px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', whiteSpace: 'nowrap', textDecoration: 'none', display: 'inline-block' }}>Book this shoot</a>
          </div>
        </div>
      </section>

      {/* TERRITORY — COMMERCIAL FLAGSHIP */}
      <section style={{ padding: '80px 24px', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', gap: '48px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '14px' }}>COMMERCIAL · CONSTRUCTION · ARCHITECTURE</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--linen)', lineHeight: 1.15, marginBottom: '20px', fontWeight: 400 }}>
              Territory.<br />
              <em style={{ color: 'var(--gilt)', fontStyle: 'italic' }}>For clients who need more.</em>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--linen-dim)', lineHeight: 1.75, marginBottom: '28px' }}>
              Territory is Flying Squirrel's ongoing documentation and retainer service. Monthly progress sets, stakeholder reports, and a dedicated portal that becomes a permanent record of your project.
            </p>
            <p style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: 'var(--linen)', marginBottom: '6px' }}>$1,500+</p>
            <p style={{ fontSize: '13px', color: 'rgba(240,236,228,0.4)', marginBottom: '28px' }}>per project or monthly retainer</p>
            <a href="/booking" style={{ display: 'inline-block', background: 'var(--gilt)', color: 'var(--midnight)', borderRadius: '8px', padding: '14px 28px', fontSize: '14px', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.02em' }}>Request a consultation</a>
          </div>
          <div style={{ flex: 1, minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              'Monthly progress documentation',
              'Before / after comparison sets',
              '3D photogrammetry models',
              'Stakeholder-ready PDF reports',
              'Architecture portfolio shots',
              'Construction site documentation',
              'Interior design aerial walkthroughs',
              'Custom delivery schedule',
              'Dedicated project portal',
              'Permanent archive by date',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gilt)', flexShrink: 0, marginTop: '6px' }} />
                <span style={{ fontSize: '14px', color: 'rgba(240,236,228,0.7)', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '96px 24px', background: 'var(--midnight)', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '16px' }}>READY TO START</p>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 5vw, 54px)', color: 'var(--linen)', marginBottom: '20px', lineHeight: 1.15, fontWeight: 400 }}>
          Every project deserves<br />to be <em style={{ color: 'var(--gilt)', fontStyle: 'italic' }}>seen properly.</em>
        </h2>
        <p style={{ fontSize: '17px', color: 'var(--linen-dim)', maxWidth: '420px', margin: '0 auto 36px', lineHeight: 1.7 }}>
          Whether it's a listing, a development site, or a long-term documentation contract — it starts with a conversation.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/booking" style={{ display: 'inline-block', background: 'var(--gilt)', color: 'var(--midnight)', borderRadius: '8px', padding: '16px 36px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', letterSpacing: '0.02em' }}>Book a shoot</a>
          <a href="/packages" style={{ display: 'inline-block', background: 'transparent', color: 'var(--linen)', border: '0.5px solid rgba(240,236,228,0.25)', borderRadius: '8px', padding: '16px 36px', fontSize: '15px', textDecoration: 'none', letterSpacing: '0.02em' }}>See all packages</a>
        </div>
        <p style={{ fontSize: '13px', color: 'rgba(240,236,228,0.35)', marginTop: '20px' }}>Lynchburg, VA and surrounding areas · Part 107 certified · Fully insured</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '0.5px solid rgba(200,169,110,0.15)', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontSize: '13px', color: 'rgba(240,236,228,0.55)' }}>flyingsquirrelaerial.com &nbsp;·&nbsp; Lynchburg, VA</span>
        <span style={{ fontSize: '13px', color: 'rgba(200,169,110,0.7)', letterSpacing: '0.06em' }}>Real estate · Architecture · Construction</span>
      </footer>

    </div>
  )
}
