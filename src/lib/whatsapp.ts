export function createWhatsAppLink(phone: string, message: string) {
  const digitsOnly = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message.trim());

  return `https://wa.me/${digitsOnly}?text=${encodedMessage}`;
}
