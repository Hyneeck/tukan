import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Grid } from '@/components/Grid'
import { Button } from '@/components/Button'
import { FAQ } from '@/components/FAQ'
import { Link } from 'react-router-dom'
import { getSEO } from '@/lib/seo'
import { spacing } from '@/lib/spacing'

const seo = getSEO({
  title: 'Studio Tuka - Digitální studio',
  description: 'Vytváříme moderní digitální řešení s důrazem na kvalitu a uživatelský zážitek.',
  path: '/',
})

export function Home() {
  const faqItems = [
    {
      question: 'Kolik web stojí?',
      answer: 'Cena závisí na rozsahu. Po krátkém úvodním callu navrhnu řešení\n\na řeknu orientační cenu.',
    },
    {
      question: 'Děláte i předělání starých webů?',
      answer: 'Ano. Často pracuji právě s weby, které jsou zastaralé\n\nnebo nefungují správně na mobilu.',
    },
    {
      question: 'Je údržba povinná?',
      answer: 'Ne. Je volitelná, ale dává smysl, pokud nechcete web řešit průběžně sami.',
    },
    {
      question: 'Pomůžete i s viditelností ve vyhledávačích?',
      answer: 'Ano. Základní technické nastavení a měření jsou součástí řešení.\n\nDlouhodobý růst je vždy postupný proces.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.og.title} />
        <meta property="og:description" content={seo.og.description} />
        <meta property="og:url" content={seo.og.url} />
        <meta property="og:image" content={seo.og.image} />
        <meta property="og:type" content={seo.og.type} />
      </Helmet>

      {/* 1) HERO */}
      <Section variant="loose">
        <Container>
          <Grid>
            <div className="col-span-4 md:col-span-8 lg:col-span-6">
              <div className="text-center lg:text-left">
                <h1 className="t-h1 mb-[clamp(16px,2.5vw,24px)] text-text">
                  Studio Tuka
                </h1>
                <p className="t-small mb-[clamp(24px,4vw,48px)] text-text/70 max-w-[64ch] mx-auto lg:mx-0">
                  Design a vývoj webů pro malé a střední firmy.
                </p>
                <div className="flex flex-col sm:flex-row gap-[clamp(12px,2vw,16px)] justify-center lg:justify-start">
                  <Link to="/start-project">
                    <Button variant="default">Začít projekt</Button>
                  </Link>
                  <a href="#work" className="px-4 py-3 text-text hover:underline hover:decoration-accent transition-all duration-200">
                    Prohlédnout práci
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-4 md:col-span-8 lg:col-span-6 hidden lg:block">
              {/* Empty whitespace column */}
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 2) PROBLEM */}
      <Section>
        <Container>
          <div className="max-w-[64ch]">
            <h2 className="t-h2 mb-[clamp(24px,4vw,40px)] text-text">
              Když web nefunguje tak, jak by měl.
            </h2>
            <p className="t-body text-text/70 whitespace-pre-line">
              Spousta firem má web, který nefunguje na mobilu, je složitý na úpravy  
              a neposkytuje žádný přehled o tom, co skutečně dělá.

              Web pak existuje jen proto, že „nějaký web mít musíme".  
              Cílem je systém, který dává smysl dlouhodobě.
            </p>
          </div>
        </Container>
      </Section>

      {/* 3) SOLUTION */}
      <Section>
        <Container>
          <h2 className="t-h2 mb-[clamp(32px,5vw,64px)] text-text">Co dělám</h2>
          <Grid>
            <div className="col-span-4 md:col-span-4 lg:col-span-3 pb-[clamp(24px,4vw,40px)] border-b border-text/12 md:border-b-0 md:border-r border-text/12 md:pr-[clamp(24px,4vw,40px)]">
              <h3 className="t-h3 mb-[clamp(12px,2vw,16px)] text-text">Web design & development</h3>
              <p className="t-body text-text/70 whitespace-pre-line">
                Navrhuju a stavím přehledné weby, které fungují na mobilu  
                a jsou postavené s důrazem na jednoduchost a použitelnost.
              </p>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-3 pb-[clamp(24px,4vw,40px)] border-b border-text/12 md:border-b-0 md:border-r border-text/12 md:pr-[clamp(24px,4vw,40px)]">
              <h3 className="t-h3 mb-[clamp(12px,2vw,16px)] text-text">Technická struktura & výkon</h3>
              <p className="t-body text-text/70 whitespace-pre-line">
                Web je postavený technicky správně, rychle se načítá  
                a je připravený na dlouhodobý provoz bez slepých míst.
              </p>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-3 pb-[clamp(24px,4vw,40px)] border-b border-text/12 md:border-b-0 md:border-r border-text/12 md:pr-[clamp(24px,4vw,40px)]">
              <h3 className="t-h3 mb-[clamp(12px,2vw,16px)] text-text">Viditelnost & měření</h3>
              <p className="t-body text-text/70 whitespace-pre-line">
                Základní nastavení pro vyhledávače a měření,  
                aby bylo jasné, co web dělá a kam se posouvá.
              </p>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-3">
              <h3 className="t-h3 mb-[clamp(12px,2vw,16px)] text-text">Dlouhodobá péče</h3>
              <p className="t-body text-text/70 whitespace-pre-line">
                Volitelná měsíční péče zahrnující přehled o stavu webu  
                a 1 hodinu drobných úprav v ceně.
              </p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 4) CASE STUDY TEASER (GATU) */}
      <Section id="work">
        <Container>
          <div className="border border-text/12 bg-bg rounded-lg p-[clamp(32px,5vw,64px)]">
            <h2 className="t-h2 mb-[clamp(24px,4vw,40px)] text-text">Vybraná práce</h2>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[clamp(24px,4vw,40px)]">
              <div className="flex-1">
                <h3 className="t-h3 mb-[clamp(12px,2vw,16px)] text-text">GATU</h3>
                <p className="t-body mb-[clamp(16px,2.5vw,24px)] text-text/70 whitespace-pre-line">
                  Kompletní předělání starého webu, technické vyčištění  
                  a napojení na měření.
                </p>
                <div className="t-h3 text-accent">
                  0 → 351 zobrazení ve vyhledávání za 10 dní
                </div>
              </div>
              <Link to="/case-study/gatu">
                <Button variant="default">Zobrazit case study</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5) PROCESS */}
      <Section>
        <Container>
          <h2 className="t-h2 mb-[clamp(32px,5vw,64px)] text-text">Průběh spolupráce</h2>
          <Grid>
            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <div className="t-h3 text-text/30 mb-[clamp(12px,2vw,16px)]">01</div>
              <p className="t-body text-text/70">Krátký úvodní call, kde projdeme váš web nebo záměr.</p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <div className="t-h3 text-text/30 mb-[clamp(12px,2vw,16px)]">02</div>
              <p className="t-body text-text/70">Návrh řešení a orientační rozsah práce.</p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <div className="t-h3 text-text/30 mb-[clamp(12px,2vw,16px)]">03</div>
              <p className="t-body text-text/70">Realizace webu v domluveném rozsahu.</p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <div className="t-h3 text-text/30 mb-[clamp(12px,2vw,16px)]">04</div>
              <p className="t-body text-text/70">Spuštění a domluva dalších kroků, pokud dávají smysl.</p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* 6) CTA */}
      <Section variant="tight">
        <Container>
          <div className="max-w-[64ch] mx-auto text-center border-t border-text/12 pt-[clamp(32px,5vw,64px)]">
            <p className="t-body mb-[clamp(24px,4vw,48px)] text-text/70">
              Máte web, který potřebuje fungovat lépe?
            </p>
            <Link to="/start-project">
              <Button variant="default">Začít projekt</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* 7) FAQ */}
      <Section>
        <Container>
          <h2 className="t-h2 mb-[clamp(32px,5vw,64px)] text-text">Časté dotazy</h2>
          <FAQ items={faqItems} />
        </Container>
      </Section>
    </>
  )
}
