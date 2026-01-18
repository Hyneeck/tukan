import { Helmet } from 'react-helmet-async'
import { useState, FormEvent } from 'react'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Grid } from '@/components/Grid'
import { Button } from '@/components/Button'
import { getSEO } from '@/lib/seo'

const seo = getSEO({
  title: 'Začít projekt - Studio Tuka',
  description: 'Zahajte svůj projekt s Studio Tuka. Vyplňte formulář a probereme vaše požadavky.',
  path: '/start-project',
})

export function StartProject() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            <h1 className="t-h1 mb-[clamp(24px,4vw,48px)]">Začít projekt</h1>
            <p className="t-body opacity-72">
              Vyplňte formulář níže a my vás kontaktujeme pro diskuzi o vašem projektu. 
              Rádi si vyslechneme vaše představy a požadavky.
            </p>
          </div>

          <Grid>
            <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-3">
              <form onSubmit={handleSubmit} className="space-y-[clamp(24px,4vw,40px)]">
                <div>
                  <label htmlFor="name" className="block t-h3 mb-[clamp(12px,1.5vw,16px)]">
                    Jméno
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111113] border border-[rgba(244,244,245,.12)] rounded-lg 
                             text-[clamp(16px,1.1vw,18px)] leading-[1.65] 
                             focus:outline-none focus:border-[rgba(244,244,245,.24)] 
                             transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block t-h3 mb-[clamp(12px,1.5vw,16px)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#111113] border border-[rgba(244,244,245,.12)] rounded-lg 
                             text-[clamp(16px,1.1vw,18px)] leading-[1.65] 
                             focus:outline-none focus:border-[rgba(244,244,245,.24)] 
                             transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block t-h3 mb-[clamp(12px,1.5vw,16px)]">
                    Společnost
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111113] border border-[rgba(244,244,245,.12)] rounded-lg 
                             text-[clamp(16px,1.1vw,18px)] leading-[1.65] 
                             focus:outline-none focus:border-[rgba(244,244,245,.24)] 
                             transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block t-h3 mb-[clamp(12px,1.5vw,16px)]">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#111113] border border-[rgba(244,244,245,.12)] rounded-lg 
                             text-[clamp(16px,1.1vw,18px)] leading-[1.65] 
                             focus:outline-none focus:border-[rgba(244,244,245,.24)] 
                             transition-all duration-200 resize-none"
                  />
                </div>

                <Button type="submit">Odeslat</Button>
              </form>
            </div>
          </Grid>
        </Container>
      </Section>
    </>
  )
}
