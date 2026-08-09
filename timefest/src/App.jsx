import { Header } from "./components/Header/Header";
import { HeroSequence } from "./components/Hero/HeroSequence";
import { Manifesto } from "./components/Manifesto/Manifesto";
import { Experience } from "./components/Experience/Experience";
import { Lineup } from "./components/Lineup/Lineup";
import { Stages } from "./components/Stages/Stages";
import { Timetable } from "./components/Timetable/Timetable";
import { TimeMoment } from "./components/TimeMoment/TimeMoment";
import { Installations } from "./components/Installations/Installations";
import { Gallery } from "./components/Gallery/Gallery";
import { FilmSection } from "./components/FilmSection/FilmSection";
import { Venue } from "./components/Venue/Venue";
import { Tickets } from "./components/Tickets/Tickets";
import { Countdown } from "./components/Countdown/Countdown";
import { FAQ } from "./components/FAQ/FAQ";
import { FinalCTA } from "./components/FinalCTA/FinalCTA";
import { Footer } from "./components/Footer/Footer";
import { useReducedMotion } from "./hooks/useReducedMotion";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  const reducedMotion = useReducedMotion();
  useLenis(reducedMotion);

  return (
    <>
      <Header />
      <main id="main">
        {/* CAPÍTULO 01 — CHEGADA */}
        <HeroSequence />

        {/* CAPÍTULO 02 — A IDEIA (Manifesto inclui o Event Snapshot) */}
        <Manifesto />
        <Experience />

        {/* CAPÍTULO 03 — O SOM (Lineup inclui o Full Lineup) */}
        <Lineup />

        {/* CAPÍTULO 04 — OS MUNDOS */}
        <Stages />
        <Timetable />
        <TimeMoment />

        {/* CAPÍTULO 05 — A EXPERIÊNCIA */}
        <Installations />
        <Gallery />
        <FilmSection />

        {/* CAPÍTULO 06 — O LUGAR (Venue inclui Google Maps + mapa do evento) */}
        <Venue />

        {/* CAPÍTULO 07 — SEU ACESSO */}
        <Tickets />

        {/* CAPÍTULO 08 — A CONTAGEM (Countdown inclui Community) */}
        <Countdown />

        {/* CAPÍTULO 09 — O FIM / O COMEÇO (FinalCTA inclui Newsletter) */}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
