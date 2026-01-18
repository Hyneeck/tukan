import { Helmet } from 'react-helmet-async'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Grid } from '@/components/Grid'
import { getSEO } from '@/lib/seo'

const seo = getSEO({
  title: 'Kontakt - Studio Tuka',
  description: 'Kontaktujte Studio Tuka pro diskuzi o vašem projektu.',
  path: '/contact',
})

export function Contact() {
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
          <div className="max-w-[64ch] mb-[clamp(64px,10vw,120px)]">
            <h1 className="t-h1 mb-[clamp(24px,4vw,48px)]">Kontakt</h1>
            <p className="t-body opacity-72">
              Máte projekt, na kterém chcete spolupracovat? Rádi bychom o něm slyšeli víc. 
              Kontaktujte nás a probereme, jak vám můžeme pomoci.
            </p>
          </div>

          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-6">
              <h2 className="t-h2 mb-[clamp(24px,4vw,40px)]">Email</h2>
              <a 
                href="mailto:info@studiotuka.com" 
                className="t-body opacity-72 hover:opacity-100 hover:underline transition-all duration-200"
              >
                info@studiotuka.com
              </a>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-6">
              <h2 className="t-h2 mb-[clamp(24px,4vw,40px)]">Telefon</h2>
              <a 
                href="tel:+420123456789" 
                className="t-body opacity-72 hover:opacity-100 hover:underline transition-all duration-200"
              >
                +420 123 456 789
              </a>
            </div>
          </Grid>
        </Container>
      </Section>
    </>
  )
}
