'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation?.classList.contains('open')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});
document.querySelector('[data-year]').textContent = new Date().getFullYear();
const form = document.querySelector('#enquiry-form');
if (form) {
  const date = form.elements.namedItem('date');
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Colombo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  date.min = today;
  const service = new URLSearchParams(location.search).get('service');
  const serviceField = form.elements.namedItem('service');
  if ([...serviceField.options].some(option => option.value === service)) serviceField.value = service;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name')).trim();
    if (!name) { form.elements.namedItem('name').setCustomValidity('Please enter your name.'); form.reportValidity(); return; }
    const message = [ 'Ayubowan Ceylon Safari Tours!', '', `My name: ${name}`, `Interested in: ${data.get('service')}`, `Preferred date: ${data.get('date')}`, `Guests / riders: ${data.get('guests')}`, `Details: ${String(data.get('message')).trim() || 'Please share the available options and a quote.'}`, '', 'Please confirm availability, prices, and booking details.' ].join('\n');
    window.location.assign(`https://wa.me/94769789949?text=${encodeURIComponent(message)}`);
  });
  form.elements.namedItem('name').addEventListener('input', event => event.target.setCustomValidity(''));
}
