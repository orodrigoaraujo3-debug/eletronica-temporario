import { Header } from "./components/Header/Header";
import { HeroSequence } from "./components/Hero/HeroSequence";
import { Manifesto } from "./components/Manifesto/Manifesto";
import { EventSnapshot } from "./components/EventSnapshot/EventSnapshot";
import { Experience } from "./components/Experience/Experience";
import { Lineup } from "./components/Lineup/Lineup";
import { FullLineup } from "./components/FullLineup/FullLineup";
import { Stages } from "./components/Stages/Stages";
import { Timetable } from "./components/Timetable/Timetable";
import { TimeMoment } from "./components/TimeMoment/TimeMoment";
import { Installations } from "./components/Installations/Installations";
import { Gallery } from "./components/Gallery/Gallery";
import { FilmSection } from "./components/FilmSection/FilmSection";
import { Venue } from "./components/Venue/Venue";
import { GoogleMap } from "./components/GoogleMap/GoogleMap";
import { EventMap } from "./components/EventMap/EventMap";
import { Tickets } from "./components/Tickets/Tickets";
import { Countdown } from "./components/Countdown/Countdown";
import { Community } from "./components/Community/Community";
import { Partners } from "./components/Partners/Partners";
import { FAQ } from "./components/FAQ/FAQ";
import { Newsletter } from "./components/Newsletter/Newsletter";
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
        {/* CHAPTER 01 — ARRIVAL */}
        <HeroSequence />

        {/* CHAPTER 02 — THE IDEA */}
        <Manifesto />
        <EventSnapshot />
        <Experience />

        {/* CHAPTER 03 — THE SOUND */}
        <Lineup />
        <FullLineup />

        {/* CHAPTER 04 — THE WORLDS */}
        <Stages />
        <Timetable />
        <TimeMoment />

        {/* CHAPTER 05 — THE EXPERIENCE */}
        <Installations />
        <Gallery />
        <FilmSection />

        {/* CHAPTER 06 — THE PLACE */}
        <Venue />
        <GoogleMap />
        <EventMap />

        {/* CHAPTER 07 — YOUR ACCESS */}
        <Tickets />

        {/* CHAPTER 08 — THE COUNTDOWN */}
        <Countdown />
        <Community />
        <Partners />

        {/* CHAPTER 09 — THE END / THE BEGINNING */}
        <FAQ />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
