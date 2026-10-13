import { useEffect } from 'react'

const whatsappMessage = 'Hello Mukesh Yadav, I want to discuss a website, mobile app, or custom software development project.'
const whatsappUrl = `https://wa.me/918052344204?text=${encodeURIComponent(whatsappMessage)}`

const services = [
  ['⌘', 'Website Development', 'Business websites, company websites, portfolio websites, landing pages, and custom websites.'],
  ['▦', 'Web Application Development', 'Dynamic web applications, admin dashboards, management systems, and custom business applications.'],
  ['▣', 'Mobile App Development', 'Customized mobile application development according to project requirements.'],
  ['✚', 'Hospital Management Software', 'Hospital panels, patient registration, billing systems, staff management, and other healthcare management modules.'],
  ['▤', 'School & Coaching Websites', 'Professional educational websites with admission enquiries, course details, contact forms, and other required features.'],
  ['◈', 'Custom Software Development', "Tailor-made software based on the client's business workflow and requirements."],
  ['↻', 'Website Redesign & Maintenance', 'Website improvements, bug fixes, performance optimization, and ongoing maintenance.'],
  ['⌁', 'API & Database Integration', 'Secure backend development, API integration, database connectivity, and third-party service integration.'],
]

const benefits = [
  'Fast and timely project delivery.',
  'Fully customized solutions according to client requirements.',
  'Modern, responsive, mobile-friendly designs.',
  'User-friendly interfaces and smooth navigation.',
  'Scalable frontend and backend architecture.',
  'Database integration and reliable data management.',
  'Performance optimization and bug fixing.',
  'Clear communication and project requirement discussions.',
  'Post-delivery support and maintenance options.',
  "Solutions designed around the client's budget and business goals.",
]

function ActionLink({ href, children, light = false, external = false }) {
  return <a className={`button ${light ? 'button-light' : ''}`} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}<span>↗</span></a>
}

export default function DeveloperProfile() {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content')
    document.title = 'Developed By Mr. Mukesh Yadav | Software, App & Website Developer'
    description?.setAttribute('content', 'Meet Mr. Mukesh Yadav, a software, app, and website developer creating modern, responsive digital solutions for businesses and organizations.')
    return () => {
      document.title = previousTitle
      if (description && previousDescription) description.setAttribute('content', previousDescription)
    }
  }, [])

  return <div className="page developer-page">
    <section className="developer-hero">
      <div className="developer-hero-copy">
        <p className="eyebrow">DEVELOPER PROFILE · 01</p>
        <h1>Digital solutions<br /><em>built around you.</em></h1>
        <p className="hero-text">Software, apps, and websites designed to help businesses work smarter, look professional, and grow with confidence.</p>
        <div className="hero-actions">
          <ActionLink href={whatsappUrl} external light>Contact on WhatsApp</ActionLink>
          <a className="text-button" href="mailto:my8052344204@gmail.com?subject=Project%20Development%20Enquiry">Send an email <span>↗</span></a>
        </div>
      </div>
      <div className="developer-identity">
        <span className="developer-monogram" aria-hidden="true">MY</span>
        <p className="eyebrow">MR. MUKESH YADAV</p>
        <h2>Software Developer<br /><em>for ambitious ideas.</em></h2>
        <a href="tel:+918052344204">+91 8052344204</a>
      </div>
    </section>

    <section className="section-pad developer-about">
      <div><p className="eyebrow">ABOUT ME</p><h2>Technology that<br /><em>serves people.</em></h2></div>
      <div className="developer-about-copy">
        <p className="large-copy">I am a Software Developer, App Developer, and Website Developer focused on creating modern, professional, responsive, and user-friendly digital solutions.</p>
        <p>I develop customized software and websites according to each client's business requirements, helping businesses improve their online presence, streamline their workflows, and manage their operations efficiently.</p>
        <div className="developer-contact-line"><a href="mailto:my8052344204@gmail.com">my8052344204@gmail.com ↗</a><a href="tel:+918052344204">+91 8052344204 ↗</a></div>
      </div>
    </section>

    <section className="developer-services section-pad">
      <div className="section-heading"><div><p className="eyebrow">SERVICES OFFERED</p><h2>From first idea<br /><em>to working product.</em></h2></div><span className="developer-section-note">02 / SERVICES</span></div>
      <div className="developer-service-grid">{services.map(([icon, title, description], index) => <article className="developer-service-card" key={title}><span className="developer-service-number">{String(index + 1).padStart(2, '0')}</span><span className="developer-service-icon" aria-hidden="true">{icon}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>

    <section className="developer-benefits section-pad">
      <div><p className="eyebrow">WHY CHOOSE ME?</p><h2>A practical partner<br /><em>for your next step.</em></h2><p className="large-copy">Every project starts with understanding your requirements, goals, and budget before choosing the right solution.</p></div>
      <div className="developer-benefit-list">{benefits.map((benefit, index) => <div key={benefit}><span>{String(index + 1).padStart(2, '0')}</span><p>{benefit}</p></div>)}</div>
    </section>

    <section className="developer-cta">
      <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
      <h2>Let's build something<br /><em>useful together.</em></h2>
      <p>Looking for a professional website, mobile application, or customized software for your business? Let's discuss your requirements and build a solution that fits your needs.</p>
      <div className="developer-cta-actions">
        <ActionLink href="mailto:my8052344204@gmail.com?subject=Project%20Development%20Enquiry" light>Discuss Your Project</ActionLink>
        <ActionLink href={whatsappUrl} external>Contact on WhatsApp</ActionLink>
        <ActionLink href="mailto:my8052344204@gmail.com?subject=Project%20Development%20Enquiry">Send an Email</ActionLink>
      </div>
    </section>
  </div>
}
