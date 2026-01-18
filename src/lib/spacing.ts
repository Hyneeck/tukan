/**
 * Fluid spacing utility classes for consistent vertical rhythm
 * All spacing uses clamp() for fluid scaling
 */

export const spacing = {
  // Section vertical spacing (handled by Section component, but available for custom use)
  sectionDefault: 'py-[clamp(72px,10vw,160px)]',
  sectionTight: 'py-[clamp(56px,8vw,120px)]',
  sectionLoose: 'py-[clamp(88px,12vw,200px)]',

  // Within-section vertical rhythm
  subSectionGap: 'mt-[clamp(32px,5vw,80px)]',
  blockGap: 'mt-[clamp(16px,2.5vw,40px)]',
  microGap: 'mt-[clamp(10px,1.5vw,24px)]',
} as const
