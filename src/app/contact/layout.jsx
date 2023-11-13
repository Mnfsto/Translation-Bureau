
import "@/styles/component.form.scss"

export const metadata = {
    title: 'Contact',
    description: 'Contanct Translation Bureau',
  }

export default function ContactLayout(
    { children }
  ) {
    return (
      <section>
        
        {children}
      </section>
    )
  }