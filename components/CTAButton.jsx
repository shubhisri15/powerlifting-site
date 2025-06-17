import { clsx } from "clsx"

export default function CTAButton() {
    const ctaButtonClass = clsx('bg-red-700', 'p-4')
    return (
        <a 
            href='https://docs.google.com/forms/d/e/1FAIpQLSd4GBpvaZr5-p9nc2vh5K6pzz6iPxM2SvVhOuOTA6JETM8lSg/viewform?fbclid=PAZXh0bgNhZW0CMTEAAadyu6kghHEgMhqhb2MNJe8uHv4rV9u2oUJAGpAEu7coelSiH7bUjNxTKU65FA_aem_Vg7j_5Aah5kgSZQ5jtJ5OQ'
            target='_blank'
            rel='noopener'
            className={ctaButtonClass}
        >
            Apply Now
        </a>
    )
}