// Central asset manifest — every image reference in the app goes through this object.
// Files live in /public/assets/** (served as-is) except the Hero frame sequence,
// which is glob-imported below so the frame count is never hardcoded.
const base = "/assets";

export const assets = {
  logos: {
    timefestOlive: `${base}/logos/logo-timefest-olive.png`,
    timefestDarkGlow: `${base}/logos/logo-timefest-dark-glow.png`,
    tfMonogram: `${base}/logos/logo-tf-monogram-olive.png`,
    focusSymbol: `${base}/logos/icon-focus-symbol.png`,
  },

  objects3d: {
    ringFront: `${base}/objects/ring-01-front.png`,
    ringTiltA: `${base}/objects/ring-02-tilt-a.png`,
    ringTiltB: `${base}/objects/ring-03-tilt-b.png`,
    ringsConcentric: `${base}/objects/rings-concentric-symbol.png`,
    ringsStacked: `${base}/objects/rings-stacked.png`,
    glassCube: `${base}/objects/glass-cube.png`,
    glassSlab: `${base}/objects/glass-slab.png`,
    glassOrb: `${base}/objects/glass-orb.png`,
    liquidChrome: `${base}/objects/liquid-chrome-blob.png`,
  },

  installations: {
    timeRingArch: `${base}/installations/time-ring-grand-arch.png`,
    timeRingHanging: `${base}/installations/time-ring-hanging-crowd.png`,
    lightGateEmpty: `${base}/installations/light-gate-empty.png`,
    lightGateCrowd: `${base}/installations/light-gate-crowd.png`,
    lightGateCorridor: `${base}/installations/light-gate-corridor.png`,
    mirrorRoom: `${base}/installations/mirror-room.png`,
    chromeTunnel: `${base}/installations/chrome-tunnel.png`,
    pulseWall: `${base}/installations/pulse-wall.png`,
    prismRoom: `${base}/installations/prism-room.png`,
  },

  stages: {
    void: `${base}/stages/void-stage.png`,
    chromeA: `${base}/stages/chrome-stage-a.png`,
    chromeB: `${base}/stages/chrome-stage-b.png`,
    pulse: `${base}/stages/pulse-stage.png`,
    radianceA: `${base}/stages/radiance-stage-a.png`,
    radianceB: `${base}/stages/radiance-stage-b.png`,
  },

  artists: {
    artist01: `${base}/artists/artist-01-man-solo.png`,
    artist02: `${base}/artists/artist-02-woman-solo.png`,
    artist03: `${base}/artists/artist-03-duo-men.png`,
    artist04: `${base}/artists/artist-04-woman-profile.png`,
    artist05: `${base}/artists/artist-05-man-profile.png`,
    artist06: `${base}/artists/artist-06-man-wavy.png`,
  },

  gallery: {
    hairMotion: `${base}/gallery/gallery-hair-motion.png`,
    profileClosedEyes: `${base}/gallery/gallery-profile-closed-eyes.png`,
    eyeCloseup: `${base}/gallery/gallery-eye-closeup.png`,
    crowdBack: `${base}/gallery/gallery-crowd-back.png`,
    duoCouple: `${base}/gallery/gallery-duo-couple.png`,
    handsMotionBlur: `${base}/gallery/gallery-hands-motion-blur.png`,
    crowdHandsWide: `${base}/gallery/gallery-crowd-hands-wide.png`,
    crowdTunnelWalk: `${base}/gallery/gallery-crowd-tunnel-walk.png`,
    crowdSunriseHands: `${base}/gallery/gallery-crowd-sunrise-hands.png`,
  },

  venue: {
    exteriorA: `${base}/venue/expominas-exterior-a.png`,
    exteriorB: `${base}/venue/expominas-exterior-b.png`,
    portalA: `${base}/venue/expominas-portal-a.png`,
    portalB: `${base}/venue/expominas-portal-b.png`,
    interiorA: `${base}/venue/expominas-interior-a.png`,
    interiorB: `${base}/venue/expominas-interior-b.png`,
  },

  brand: {
    ticket: `${base}/brand/ticket-mockup.png`,
    wristband: `${base}/brand/wristband-mockup.png`,
  },

  textures: {
    gradientIridescentSoft: `${base}/textures/gradient-iridescent-soft.png`,
    raysDiagonalPastel: `${base}/textures/rays-diagonal-pastel.png`,
    raysCrossingPurple: `${base}/textures/rays-crossing-purple.png`,
    raysDiffuseSoft: `${base}/textures/rays-diffuse-soft.png`,
    darkStreaksA: `${base}/textures/texture-dark-streaks-a.png`,
    darkStreaksB: `${base}/textures/texture-dark-streaks-b.png`,
  },

  mobile: {
    crowdRing: `${base}/mobile/mobile-crowd-ring.png`,
    crowdHex: `${base}/mobile/mobile-crowd-hex.png`,
  },
};

// ---------------------------------------------------------------------------
// Hero frame sequence — auto-discovered, numerically sorted (never hardcoded).
// ---------------------------------------------------------------------------
const frameModules = import.meta.glob("./hero-sequence/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

function trailingNumber(path) {
  const match = path.match(/(\d+)(?=\.\w+$)/);
  return match ? parseInt(match[0], 10) : 0;
}

export const heroFrames = Object.keys(frameModules)
  .sort((a, b) => trailingNumber(a) - trailingNumber(b))
  .map((key) => frameModules[key]);
