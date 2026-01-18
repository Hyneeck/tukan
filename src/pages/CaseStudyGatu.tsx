import { Helmet } from 'react-helmet-async'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { getSEO } from '@/lib/seo'
import { spacing } from '@/lib/spacing'

const seo = getSEO({
  title: 'Case Study: Gatu - Studio Tuka',
  description: 'Případová studie projektu Gatu: vytvoření moderní webové aplikace s důrazem na výkon a uživatelský zážitek.',
  path: '/case-study/gatu',
})

export function CaseStudyGatu() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.og.title} />
        <meta property="og:description" content={seo.og.description} />
        <meta property="og:url" content={seo.og.url} />
      </Helmet>

      <Section>
        <Container>
          <div className="max-w-[64ch]">
            <h1 className="t-h1 mb-[clamp(24px,4vw,48px)]">Case Study: Gatu</h1>
            <p className="t-body opacity-72 mb-[clamp(48px,8vw,96px)]">
              Komplexní redesign a vývoj nové webové aplikace pro platformu Gatu, 
              zaměřené na zlepšení uživatelského zážitku a výkonu.
            </p>
          </div>

          <div className={spacing.subSectionGap}>
            <h2 className="t-h2 mb-[clamp(24px,4vw,40px)]">Výzva</h2>
            <p className="t-body opacity-72 mb-[clamp(16px,2.5vw,32px)]">
              Klient potřeboval kompletní přepracování stávající platformy s cílem zlepšit 
              rychlost načítání, responzivitu a celkovou uživatelskou zkušenost.
            </p>
          </div>

          <div className={spacing.subSectionGap}>
            <h2 className="t-h2 mb-[clamp(24px,4vw,40px)]">Řešení</h2>
            <p className="t-body opacity-72 mb-[clamp(16px,2.5vw,32px)]">
              Vytvořili jsme novou aplikaci využívající moderní tech stack (React, TypeScript, Vite) 
              s plně fluidním responzivním designem. Implementovali jsme optimalizace výkonu 
              a důkladné testování napříč zařízeními.
            </p>
          </div>

          <div className={spacing.subSectionGap}>
            <h2 className="t-h2 mb-[clamp(24px,4vw,40px)]">Výsledek</h2>
            <p className="t-body opacity-72">
              Nová aplikace přinesla výrazné zlepšení v rychlosti načítání (o 60%), 
              lepší responzivitu na všech zařízeních a pozitivní zpětnou vazbu od uživatelů.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
