import { motion } from "framer-motion";
import {
  RiHandHeartLine,
  RiEyeLine,
  RiMedalLine,
} from "react-icons/ri";

const VALUES = [
  {
    icon: RiHandHeartLine,
    title: "Personal Service",
    desc: "You deal directly with me — not an assistant, not an automated system. Every client gets my full attention.",
  },
  {
    icon: RiEyeLine,
    title: "Full Transparency",
    desc: "No hidden fees. No vague timelines. I keep you informed at every stage so there are never any surprises.",
  },
  {
    icon: RiMedalLine,
    title: "Uncompromising Quality",
    desc: "I've built my reputation one project at a time. I won't cut corners because your investment is on the line.",
  },
];

export default function AgentStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-brand-orange" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
                My Story
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-charcoal leading-tight mb-6">
              Why I do{" "}
              <span className="italic text-brand-orange">this work.</span>
            </h2>

            <div className="space-y-4 text-brand-stone/75 leading-relaxed text-[15px]">
              <p>
                I started in property over a decade ago after watching too many people
                get burned by untrustworthy agents, abandoned projects, and land with
                questionable documentation. I knew there had to be a better way.
              </p>
              <p>
                So I built this service around one simple idea: treat every client
                the way I'd want to be treated if I were buying land or building a home
                for my own family.
              </p>
              <p>
                Today, I handle everything from land acquisition and new builds to
                full property management — all personally supervised and transparently
                communicated. No middlemen. No runaround. Just results.
              </p>
              <p>
                Whether you're a first-time buyer, a returning investor, or a
                diaspora Nigerian looking to build back home — I'm the one person
                you need on the ground.
              </p>
            </div>
          </motion.div>

          {/* Right — Values */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-brand-orange" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-brand-orange">
                My Values
              </span>
            </div>
            {VALUES.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl border border-brand-border bg-brand-cream hover:border-brand-orange/30 hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <val.icon size={18} className="text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-charcoal mb-1 text-sm">
                    {val.title}
                  </h3>
                  <p className="text-sm text-brand-stone/70 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}