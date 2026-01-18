import { Helmet } from 'react-helmet-async'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Grid } from '@/components/Grid'
import { CTA } from '@/components/CTA'
import { getSEO } from '@/lib/seo'

const seo = getSEO({
  title: 'Služby - Studio Tuka',
  description: 'Nabízíme komplexní digitální služby od designu po vývoj webových aplikací.',
  path: '/services',
})

export function Services() {
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
          <div className="max-w-[64ch] mb-[clamp(48px,8vw,96px)]">
            <h1 className="t-h1 mb-[clamp(24px,4vw,48px)]">Naše služby</h1>
            <p className="t-body opacity-72">
              Poskytujeme komplexní digitální řešení od koncepce až po implementaci. 
              Naše služby pokrývají celý proces vytváření moderních webových aplikací.
            </p>
          </div>

          <Grid>
            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <div className={`${spacing.blockGap} border-t border-[rgba(244,244,245,.12)] pt-[clamp(32px,5vw,64px)]`}>
                <h2 className="t-h2 mb-[clamp(24px,4vw,40px)]">Design</h2>
              </div>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-6">
              <h3 className="t-h3 mb-[clamp(16px,2.5vw,24px)]">UI/UX Design</h3>
              <p className="t-body opacity-72">
                Navrhujeme intuitivní a esteticky přívětivá rozhraní založená na uživatelském výzkumu 
                a best practices v designu.
              </p>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-6">
              <h3 className="t-h3 mb-[clamp(16px,2.5vw,24px)]">Brand Identity</h3>
              <p className="t-body opacity-72">
                Vytváříme konzistentní vizuální identitu, která reflektuje hodnoty vaší značky 
                a komunikuje s vaším publikem.
              </p>
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-12">
              <div className={spacing.subSectionGap}>
                <div className="border-t border-[rgba(244,244,245,.12)] pt-[clamp(32px,5vw,64px)]">
                  <h2 className="t-h2 mb-[clamp(24px,4vw,40px)]">Vývoj</h2>
                </div>
              </div>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-6">
              <h3 className="t-h3 mb-[clamp(16px,2.5vw,24px)]">Webové aplikace</h3>
              <p className="t-body opacity-72">
                Vyvíjíme responsivní a výkonné webové aplikace s využitím moderních technologií 
                jako React, TypeScript a Vite.
              </p>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-6">
              <h3 className="t-h3 mb-[clamp(16px,2.5vw,24px)]">E-commerce</h3>
              <p className="t-body opacity-72">
                Vytváříme kompletní e-commerce řešení s důrazem na konverzi a uživatelský zážitek.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section variant="tight">
        <CTA 
          title="Chcete vědět víc?"
          description="Kontaktujte nás a probereme, jak vám můžeme pomoci s vaším projektem."
          buttonText="Kontaktovat"
          buttonLink="/contact"
        />
      </Section>
    </>
  )
}
