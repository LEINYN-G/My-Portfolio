"use client";

const AskForm = () => {
  return (
    <section id="ask" className="relative py-28 flex justify-center px-4">
      <form
        action="https://formspree.io/f/mpwvndaw"
        method="POST"
        className="
          relative p-9 rounded-2xl overflow-visible
          bg-black/90 backdrop-blur-md
          shadow-xl
          space-y-5
          animate-glow-float
        "
      >
        {/* Hidden config fields */}
        <input type="hidden" name="_subject" value="New Question from Portfolio 🚀" />
        <input type="hidden" name="_template" value="table" />

        {/* Honeypot spam protection */}
        <input type="text" name="_gotcha" className="hidden" />

        {/* Neon glow ring */}
        <div
          className="
            absolute -inset-6 rounded-3xl blur-2xl opacity-70 -z-10
            bg-gradient-to-r from-teal-500/20 via-green-400/10 to-teal-500/20
          "
        />

        {/* Heading */}
        <h2
          className="
            text-3xl font-semibold mb-8 flex items-center gap-2
            animate-gradient-purple-text
          "
        >
          💬 Need a Portfolio or Stuck in Tech? Let's Talk.
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="
            w-full p-3 rounded-lg
            bg-black/60 text-white
            focus:outline-none focus:border-teal-400/60
            focus:shadow-[0_0_20px_rgba(45,212,191,0.25)]
            transition-all
          "
        />

        {/* Country/Region */}
        <input
          type="text"
          name="region"
          required
          placeholder="Your Country/Region"
          className="
            w-full p-3 rounded-lg
            bg-black/60 text-white
            focus:outline-none focus:border-purple-400/60
            focus:shadow-[0_0_20px_rgba(45,212,191,0.25)]
            transition-all
          "
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          className="
            w-full p-3 rounded-lg
            bg-black/60 text-white
            focus:outline-none focus:border-purple-400/60
            focus:shadow-[0_0_20px_rgba(33,85,240,0.25)]
            transition-all
          "
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="
            w-full p-3 rounded-lg
            bg-black/60 text-white
            focus:outline-none focus:border-purple-400/60
            focus:shadow-[0_0_20px_rgba(160,8,240,0.25)]
            transition-all
          "
        />

        {/* Company */}
        <input
          type="text"
          name="company"
          required
          placeholder="Company / College / Individual"
          className="
            w-full p-3 rounded-lg
            bg-black/60 text-white
            focus:outline-none focus:border-purple-400/60
            focus:shadow-[0_0_20px_rgba(160,8,240,0.25)]
            transition-all
          "
        />

        {/* Message */}
        <textarea
          name="message"
          required
          rows="4"
          placeholder="Want a portfolio built by me? Or need help with a tech doubt?"
          className="
            w-full p-3 rounded-lg
            bg-black/60 text-white
            focus:outline-none focus:border-blue-400/60
            focus:shadow-[0_0_20px_rgba(96,165,250,0.25)]
            transition-all
          "
        />

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full py-3 rounded-full font-semibold text-white
            bg-gradient-to-r from-teal-500 to-green-500
            shadow-lg
            hover:scale-105 hover:shadow-[0_0_35px_rgba(34,197,94,0.45)]
            transition-all duration-300
            animate-pulse-slow
          "
        >
          Let’s Connect
        </button>

        {/* Footer note */}
        <div
          className="
            mt-8 rounded-2xl px-6 py-4
            bg-white/5 backdrop-blur-md
            border border-white/10
            shadow-[0_0_30px_rgba(140,90,255,0.15)]
            text-center
          "
        >
          <p className="text-sm sm:text-base text-white/80">
            I personally read every message.
            <span className="text-purple-400"> No spam, no pressure.</span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default AskForm;
