import { useState, useEffect } from 'react'

function WeatherCalendar() {
  const [weather, setWeather] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=37.4138&longitude=-79.1422&daily=weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max&temperature_unit=fahrenheit&windspeed_unit=mph&forecast_days=7&timezone=America%2FNew_York'
        )
        const data = await res.json()
        const days = data.daily.time.map((date, i) => ({
          date,
          code: data.daily.weathercode[i],
          high: Math.round(data.daily.temperature_2m_max[i]),
          low: Math.round(data.daily.temperature_2m_min[i]),
          wind: Math.round(data.daily.windspeed_10m_max[i]),
        }))
        setWeather(days)
      } catch {
        setWeather([])
      } finally {
        setLoading(false)
      }
    }
    fetchWeather()
  }, [])

  function getCondition(code, wind) {
    if (wind > 20) return { label: 'High winds', icon: '⚠', color: '#e24b4a', warn: true }
    if (code === 0) return { label: 'Clear skies', icon: '☀', color: '#c8a96e', warn: false }
    if (code <= 2) return { label: 'Partly cloudy', icon: '⛅', color: '#c8a96e', warn: false }
    if (code <= 48) return { label: 'Cloudy / fog', icon: '☁', color: 'rgba(240,236,228,0.4)', warn: false }
    if (code <= 67) return { label: 'Rain likely', icon: '🌧', color: 'rgba(240,236,228,0.35)', warn: true }
    if (code <= 77) return { label: 'Snow', icon: '❄', color: 'rgba(240,236,228,0.35)', warn: true }
    if (code <= 82) return { label: 'Rain showers', icon: '🌦', color: 'rgba(240,236,228,0.35)', warn: true }
    return { label: 'Stormy', icon: '⛈', color: '#e24b4a', warn: true }
  }

  function formatDay(dateStr) {
    const d = new Date(dateStr + 'T00:00:00')
    return { day: d.toLocaleDateString('en-US', { weekday: 'short' }), date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) }
  }

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '40px', color: 'rgba(240,236,228,0.35)', fontSize: '13px' }}>
      Loading Lynchburg forecast...
    </div>
  )

  if (!weather.length) return (
    <div style={{ textAlign: 'center', padding: '40px', color: 'rgba(240,236,228,0.35)', fontSize: '13px' }}>
      Forecast unavailable — check back shortly.
    </div>
  )

  return (
    <div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '16px' }}>
        {weather.map((day, i) => {
          const cond = getCondition(day.code, day.wind)
          const { day: dayLabel, date } = formatDay(day.date)
          const isSelected = selected === i
          const isGood = !cond.warn
          return (
            <div
              key={day.date}
              onClick={() => !cond.warn && setSelected(i)}
              style={{
                width: '86px', borderRadius: '10px', padding: '14px 10px',
                textAlign: 'center', cursor: cond.warn ? 'not-allowed' : 'pointer',
                background: isSelected ? 'rgba(200,169,110,0.15)' : cond.warn ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                border: isSelected ? '1px solid rgba(200,169,110,0.5)' : cond.warn ? '0.5px solid rgba(240,236,228,0.06)' : '0.5px solid rgba(240,236,228,0.1)',
                opacity: cond.warn ? 0.5 : 1,
                transition: 'all 0.15s'
              }}
            >
              <p style={{ fontSize: '10px', fontWeight: 500, color: 'rgba(240,236,228,0.4)', letterSpacing: '0.06em', margin: '0 0 4px' }}>{dayLabel.toUpperCase()}</p>
              <p style={{ fontSize: '10px', color: 'rgba(240,236,228,0.3)', margin: '0 0 8px' }}>{date}</p>
              <div style={{ fontSize: '20px', marginBottom: '6px' }}>{cond.icon}</div>
              <p style={{ fontSize: '10px', color: cond.color, margin: '0 0 6px', lineHeight: 1.3 }}>{cond.label}</p>
              <p style={{ fontSize: '11px', color: 'var(--linen)', margin: '0 0 2px', fontWeight: 500 }}>{day.high}°</p>
              <p style={{ fontSize: '10px', color: 'rgba(240,236,228,0.3)', margin: '0 0 4px' }}>{day.low}°</p>
              <p style={{ fontSize: '9px', color: day.wind > 20 ? '#e24b4a' : 'rgba(240,236,228,0.25)', margin: 0 }}>{day.wind} mph</p>
              {isGood && !isSelected && (
                <div style={{ marginTop: '6px', fontSize: '9px', color: 'var(--gilt)', letterSpacing: '0.04em' }}>AVAILABLE</div>
              )}
              {isSelected && (
                <div style={{ marginTop: '6px', fontSize: '9px', color: 'var(--gilt)', fontWeight: 600, letterSpacing: '0.04em' }}>SELECTED</div>
              )}
            </div>
          )
        })}
      </div>
      {selected !== null && weather[selected] && (
        <div style={{ background: 'rgba(200,169,110,0.06)', border: '0.5px solid rgba(200,169,110,0.2)', borderRadius: '10px', padding: '16px 20px', textAlign: 'center', marginTop: '8px' }}>
          <p style={{ fontSize: '13px', color: 'var(--gilt)', margin: '0 0 4px', letterSpacing: '0.06em' }}>
            {formatDay(weather[selected].date).day} {formatDay(weather[selected].date).date} looks great for your shoot.
          </p>
          <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.4)', margin: 0 }}>
            Mention this date when you book below and Matt will lock it in.
          </p>
        </div>
      )}
      <p style={{ fontSize: '11px', color: 'rgba(240,236,228,0.2)', textAlign: 'center', marginTop: '12px', letterSpacing: '0.04em' }}>
        Grayed dates have high winds ({'>'}20 mph) or rain — not ideal for drone flight. Matt monitors 72 hrs out and will confirm your date.
      </p>
    </div>
  )
}

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', pkg: 'Soar', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = true
    if (!form.email.includes('@')) e.email = true
    if (!form.address.trim()) e.address = true
    return e
  }

  function handleSubmit() {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSubmitted(true)
  }

  const inputStyle = (field) => ({
    width: '100%', background: 'rgba(255,255,255,0.05)',
    border: `0.5px solid ${errors[field] ? 'rgba(224,75,75,0.6)' : 'rgba(240,236,228,0.12)'}`,
    borderRadius: '7px', padding: '12px 16px',
    fontFamily: "'DM Sans', sans-serif", fontSize: '14px',
    color: 'var(--linen)', outline: 'none', boxSizing: 'border-box'
  })

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--midnight)' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 40px', borderBottom: '0.5px solid var(--gilt-faint)' }}>
        <a href="/" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: '18px', color: 'var(--linen)', letterSpacing: '0.02em', fontWeight: 400, textDecoration: 'none' }}>Flying Squirrel</a>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a href="/about" style={{ fontSize: '12px', color: 'rgba(240,236,228,0.45)', letterSpacing: '0.08em', textDecoration: 'none' }}>About</a>
          <a href="/packages" style={{ fontSize: '12px', color: 'rgba(240,236,228,0.45)', letterSpacing: '0.08em', textDecoration: 'none' }}>Packages</a>
          <a href="/booking" style={{ fontSize: '12px', color: 'var(--gilt)', letterSpacing: '0.08em', textDecoration: 'none' }}>Book</a>
          <a href="/booking" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--gilt)', border: '0.5px solid var(--gilt-dim)', padding: '6px 16px', borderRadius: '99px', letterSpacing: '0.06em', textDecoration: 'none' }}>Book a shoot</a>
        </div>
      </nav>

      {/* Header */}
      <section style={{ padding: '72px 24px 48px', textAlign: 'center' }}>
        <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '14px' }}>BOOK YOUR SHOOT</p>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.15, color: 'var(--linen)', maxWidth: '520px', margin: '0 auto 16px' }}>
          Let's get you in the air.
        </h1>
        <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--linen-dim)', lineHeight: 1.7, maxWidth: '420px', margin: '0 auto' }}>
          Fill out the form below and Matt will confirm your booking within the hour.
        </p>
      </section>

      {/* Weather calendar */}
      <section style={{ padding: '0 24px 56px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '20px', textAlign: 'center' }}>7-DAY LYNCHBURG FORECAST</p>
          <WeatherCalendar />
        </div>
      </section>

      {/* Booking form */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '28px' }}>YOUR DETAILS</p>

          {!submitted ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: 'rgba(240,236,228,0.4)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>NAME *</label>
                  <input value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Your full name" style={inputStyle('name')} />
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: 'rgba(240,236,228,0.4)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>EMAIL *</label>
                  <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="your@email.com" style={inputStyle('email')} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: 'rgba(240,236,228,0.4)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>PHONE</label>
                  <input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="Optional" style={inputStyle('phone')} />
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: 'rgba(240,236,228,0.4)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>PACKAGE</label>
                  <select value={form.pkg} onChange={e => setForm(p => ({ ...p, pkg: e.target.value }))}
                    style={{ ...inputStyle('pkg'), cursor: 'pointer' }}>
                    <option value="Scout">Scout — $249</option>
                    <option value="Soar">Soar — $449</option>
                    <option value="Nest Builder">Nest Builder — $699</option>
                    <option value="Territory">Territory — Contact for pricing</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '11px', color: 'rgba(240,236,228,0.4)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>PROPERTY ADDRESS *</label>
                <input value={form.address} onChange={e => setForm(p => ({ ...p, address: e.target.value }))} placeholder="Full property address" style={inputStyle('address')} />
              </div>

              <div>
                <label style={{ fontSize: '11px', color: 'rgba(240,236,228,0.4)', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>NOTES</label>
                <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} placeholder="Preferred shoot date, add-ons, special requests..." rows={4}
                  style={{ ...inputStyle('notes'), resize: 'vertical', fontFamily: "'DM Sans', sans-serif" }} />
              </div>

              <button onClick={handleSubmit} style={{ background: 'var(--gilt)', color: 'var(--midnight)', border: 'none', borderRadius: '8px', padding: '16px', fontSize: '15px', fontWeight: 500, cursor: 'pointer', letterSpacing: '0.02em', marginTop: '8px' }}>
                Submit booking request
              </button>

              <p style={{ fontSize: '12px', color: 'rgba(240,236,228,0.25)', textAlign: 'center', letterSpacing: '0.03em' }}>
                Matt confirms within the hour · No payment required to book
              </p>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 24px', background: 'rgba(200,169,110,0.06)', border: '0.5px solid rgba(200,169,110,0.2)', borderRadius: '14px' }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '28px', color: 'var(--linen)', marginBottom: '12px' }}>You're booked in.</p>
              <p style={{ fontSize: '15px', color: 'var(--linen-dim)', lineHeight: 1.7, maxWidth: '360px', margin: '0 auto 8px' }}>
                Matt will confirm your shoot details within the hour. Check your inbox at <span style={{ color: 'var(--gilt)' }}>{form.email}</span>.
              </p>
              <p style={{ fontSize: '13px', color: 'rgba(240,236,228,0.3)' }}>Questions? Reply to the confirmation email directly.</p>
            </div>
          )}
        </div>
      </section>

      {/* What happens next */}
      <section style={{ padding: '72px 24px', background: 'var(--charcoal)' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontSize: '10px', fontWeight: 500, color: 'var(--gilt)', letterSpacing: '0.2em', marginBottom: '36px', textAlign: 'center' }}>WHAT HAPPENS NEXT</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { step: '01', title: 'Matt confirms within the hour', body: 'You will receive a confirmation email with shoot details, what to expect, and any questions Matt has about the property.' },
              { step: '02', title: 'Weather monitored 72 hours out', body: 'Matt checks the forecast before your shoot date and proactively reaches out if conditions are marginal. No surprises on the day.' },
              { step: '03', title: 'Shoot day', body: 'Matt arrives on time, flies the property, and captures everything needed for your package. Typical residential shoot takes 45–60 minutes.' },
              { step: '04', title: 'Edited and delivered in 24 hours', body: 'Photos, video, social cuts, and branded versions delivered to your private portal. Download everything or share the link with your sellers.' },
            ].map((item, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: '24px', padding: '24px 0', borderBottom: i < arr.length - 1 ? '0.5px solid rgba(240,236,228,0.07)' : 'none' }}>
                <div style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '50%', border: '0.5px solid var(--gilt-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--gilt)' }}>{item.step}</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: 'var(--linen)', marginBottom: '6px' }}>{item.title}</p>
                  <p style={{ fontSize: '14px', color: 'var(--linen-dim)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
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
