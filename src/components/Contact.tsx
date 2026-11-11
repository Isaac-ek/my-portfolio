import React, { useState } from 'react';
import { profile } from '../data/profile';

const initialForm = { name: '', email: '', message: '', _honey: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    try {
      const res = await fetch('https://formsubmit.co/ajax/ekezie.chiemelie@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-24 border-t border-white/10"
      id="contact"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 mb-12 gap-4">
        <div>
          <span className="font-mono text-[11px] tracking-widest text-[#71717a] uppercase block mb-2">
            [INDEX / 04] • DIRECT TRANSMISSION
          </span>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#f4f4f2] tracking-tight uppercase">
            GET IN TOUCH
          </h2>
        </div>
        <div className="font-mono text-xs text-[#8e8e93]">
          [OPEN FOR CONTRACTS &amp; POSITIONS]
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="font-serif italic text-3xl sm:text-4xl text-[#f4f4f2] font-normal leading-snug">
            &ldquo;Have an engineering build or a brand system to bring to life?&rdquo;
          </h3>
          <p className="font-space text-sm text-[#a1a1aa] leading-relaxed">
            I respond promptly to thoughtful inquiries. Whether you need full-stack web architecture,
            enterprise systems automation, or bespoke brand assets, send a transmission below.
          </p>

          <div className="border border-white/10 bg-[#0e0e11] p-6 space-y-4 font-mono text-xs">
            <div className="border-b border-white/5 pb-3">
              <span className="text-[#71717a] uppercase text-[10px] block">DIRECT EMAIL</span>
              <a
                href={`mailto:${profile.email}`}
                className="text-white hover:underline mt-0.5 inline-block text-sm font-medium"
              >
                {profile.email}
              </a>
            </div>

            <div className="border-b border-white/5 pb-3">
              <span className="text-[#71717a] uppercase text-[10px] block">TELEPHONE</span>
              <a
                href={`tel:${profile.phone}`}
                className="text-white hover:underline mt-0.5 inline-block"
              >
                {profile.phone}
              </a>
            </div>

            <div>
              <span className="text-[#71717a] uppercase text-[10px] block">LOCATION</span>
              <span className="text-[#d4d4d8] mt-0.5 inline-block">
                {profile.location} • Available Globally
              </span>
            </div>
          </div>
        </div>

        {/* Right: Clean Editorial Form */}
        <div className="lg:col-span-7 border border-white/10 bg-[#0e0e11] p-6 sm:p-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="_honey"
              style={{ display: 'none' }}
              onChange={handleChange}
              value={form._honey || ''}
            />

            <div>
              <label htmlFor="name" className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                01 // SENDER IDENTIFIER (YOUR NAME)
              </label>
              <input
                id="name"
                className="w-full border border-white/10 bg-[#08080a] p-4 font-space text-sm text-white outline-none transition focus:border-white"
                type="text"
                name="name"
                placeholder="e.g. John Doe / Acme Corp"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                02 // ELECTRONIC MAIL ADDRESS
              </label>
              <input
                id="email"
                className="w-full border border-white/10 bg-[#08080a] p-4 font-space text-sm text-white outline-none transition focus:border-white"
                type="email"
                name="email"
                placeholder="you@domain.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs text-[#a1a1aa] uppercase tracking-wider mb-2">
                03 // PROJECT SCOPE OR INQUIRY
              </label>
              <textarea
                id="message"
                className="w-full border border-white/10 bg-[#08080a] p-4 font-space text-sm text-white outline-none transition focus:border-white resize-none"
                name="message"
                placeholder="Briefly describe the product, system, or brand assets you are looking to build."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full border border-white bg-white py-4 font-mono text-xs font-bold uppercase tracking-widest text-black transition hover:bg-[#d4d4d8] disabled:opacity-50"
            >
              {loading ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE [→]'}
            </button>

            {status === 'success' && (
              <p className="font-mono text-xs text-emerald-400 text-center">
                ✓ TRANSMISSION RECEIVED. I WILL REPLY SHORTLY.
              </p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-red-400 text-center">
                FAILED TO TRANSMIT. PLEASE DISPATCH DIRECTLY TO EKEZIE.CHIEMELIE@GMAIL.COM
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
