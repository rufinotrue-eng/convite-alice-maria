document.addEventListener('DOMContentLoaded', function () {
  const links = {
    confirmacao: 'https://forms.gle/zh4NJUcTA7MqsUpT8',
    whatsapp: 'https://wa.me/5511961901263?text=Ol%C3%A1%21%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20anivers%C3%A1rio%20da%20Alice%20Maria'
  };

  const confirmacao = document.getElementById('link-confirmacao');
  const whatsapp = document.getElementById('link-whatsapp');

  if (confirmacao) {
    confirmacao.href = links.confirmacao;
    confirmacao.target = '_blank';
    confirmacao.rel = 'noopener noreferrer';
  }

  if (whatsapp) {
    whatsapp.href = links.whatsapp;
    whatsapp.target = '_blank';
    whatsapp.rel = 'noopener noreferrer';
  }
});
