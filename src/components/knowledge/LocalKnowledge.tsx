import GettingAround from "./GettingAround";
import EtiquetteCode from "./EtiquetteCode";
import SurvivalJapanese from "./SurvivalJapanese";

export default function LocalKnowledge() {
  return (
    <section className="bg-[#1A1A1A] text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[10px] font-bold tracking-[3px] text-[#4DD0E1]">
            LOCAL KNOWLEDGE
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <GettingAround />
          <EtiquetteCode />
          <SurvivalJapanese />
        </div>

        {/* Connectivity bar */}
        <div className="mt-12 bg-white/[0.04] p-5 flex flex-col sm:flex-row gap-4 sm:items-center">
          <span className="font-mono text-[10px] font-bold tracking-[2px] text-[#4DD0E1] shrink-0">
            CONNECTIVITY
          </span>
          <p className="text-sm text-white/60 leading-relaxed">
            Get an <strong className="text-white">eSIM</strong> before you
            land. Ubigi, Airalo, or Mobal all work in Japan. Pocket Wi-Fi is
            fading out {"\u2014"} eSIM is cheaper, simpler, and you can
            {"\u2019"}t leave it in the hotel. Budget {"\u00a5"}2,000
            {"\u2013"}4,000 for 7 days of data.
          </p>
        </div>
      </div>
    </section>
  );
}
