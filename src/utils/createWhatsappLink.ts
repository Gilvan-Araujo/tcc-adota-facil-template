export default function createWhatsappLink(phoneNumber: string): string {
  const formattedPhoneNumber = `55${phoneNumber.replace(/[^\d]/g, '')}`
  const greetingMessage =
    'Olá, tudo bem? Vi seu pet no Adota Fácil e estou interessado em adotá-lo.'

  return `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(
    greetingMessage
  )}`
}
