'use client';

import { motion } from 'framer-motion';
import { Leaf, Coins, Heart, Clock, Users, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'Poctivé suroviny',
    description: 'Používame len kvalitné a čerstvé ingrediencie. Paradajkový základ varíme z talianskych paradajok, syr je vždy čerstvý a zelenina sezónna.',
  },
  {
    icon: Coins,
    title: 'Férové ceny',
    description: 'Veríme, že výborná pizza nemusí stáť veľa. U nás dostanete kvalitu za rozumnú cenu – bez skrytých poplatkov a prekvapení.',
  },
  {
    icon: Heart,
    title: 'Rodinná atmosféra',
    description: 'Sme malý rodinný podnik, kde sa každý zákazník cíti ako doma. Poznáme našich stálych hostí a vždy sa tešíme na nové tváre.',
  },
  {
    icon: Clock,
    title: 'Rýchla príprava',
    description: 'Vieme, že čas je vzácny. Preto sa snažíme pripraviť vašu pizzu čo najrýchlejšie – bez kompromisov na kvalite.',
  },
  {
    icon: Users,
    title: 'Pre celú rodinu',
    description: 'Či už prídete sami, s partnerom alebo s celou rodinou – máme pizzu pre každého. Aj pre najmenších náročných gurmánov.',
  },
  {
    icon: ThumbsUp,
    title: 'Spokojní zákazníci',
    description: 'Naši zákazníci sa k nám radi vracajú. Ich spokojnosť je pre nás najväčšou odmenou a motiváciou robiť to, čo robíme.',
  },
];

export default function About() {
  return (
    <section id="o-nas" className="py-20 md:py-28 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
            O nás
          </h2>
          <p className="text-lg md:text-xl text-[#1a1a1a]/80 max-w-3xl mx-auto">
            Monster Pizza je miesto, kde sa stretáva tradícia s láskou k jedlu. 
            Každá pizza, ktorú pripravíme, je vyrobená s vášňou a starostlivosťou.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6 text-center">
            Náš príbeh
          </h3>
          <div className="prose prose-lg max-w-none text-[#1a1a1a]/80 space-y-4">
            <p>
              V Shopping Palace máme novú hviezdu – <strong>Monster Pizza</strong>. Sme malý rodinný podnik, 
              ktorý nerobí žiadnu vedu, len poctivú pizzu za férové ceny, úsmev a ochotu. 
              Presne tak, ako to má byť.
            </p>
            <p>
              Či prídete po rýchly obed, pizzu pre celú rodinu alebo len tak na jeden 
              „kúsok pokoja po ceste domov", Monster Pizza je miesto, kde sa vždy cítite vítaní.
            </p>
            <p>
              Úprimní ľudia, jednoduché menu, žiadne pózy – len kvalitné suroviny a chuť, ktorá nezradí.
              Naše cesto pripravujeme každý deň čerstvé, paradajkový základ varíme podľa tradičného 
              talianskeho receptu a syr používame vždy ten najkvalitnejší.
            </p>
            <p>
              Veríme, že jedlo spája ľudí. Preto sa snažíme vytvoriť miesto, kde sa môžete zastaviť, 
              oddýchnuť si a vychutnať si chvíľu pokoja s výbornou pizzou. Či už ste tu prvýkrát 
              alebo ste náš stály hosť – vždy sa na vás tešíme.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#e63946] to-[#f4a261] rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#1a1a1a]/70 text-base md:text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
