// Inputs form
const title = document.querySelector('#title');
const quantity = document.querySelector('#quantity');
const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const destine = document.querySelector('#destine');
const message = document.querySelector('#message');

// Outputs llape
const llapeTitle = document.querySelector('.llape-title');
const llapeQuantity = document.querySelector('.llape-quantity');
const llapeName = document.querySelector('.llape-name');
const llapeDate = document.querySelector('.llape-date');
const llapeTime = document.querySelector('.llape-time');
const llapeCodeSecurity = document.querySelector('.llape-code-security');
const llapePhone = document.querySelector('.llape-phone');
const llapeDestine = document.querySelector('.llape-destine');
const llapeOperation = document.querySelector('.llape-operation');
const boxMessage = document.querySelector('#box-message');
const boxMessageText = document.querySelector('#box-message p');

message.addEventListener('input', () => {
  const currentValue = message.value.trim();

  if (currentValue.length > 0) {
    boxMessage.classList.remove('hidden');
    boxMessage.classList.add('flex');
    boxMessageText.textContent = currentValue;
  } else {
    boxMessage.classList.add('hidden');
    boxMessage.classList.remove('flex');
    boxMessageText.textContent = '';
  }
});

updateLlape(title, llapeTitle);
updateLlape(quantity, llapeQuantity);
updateLlape(name, llapeName);
updateLlape(phone, llapePhone);
updateLlape(destine, llapeDestine);

function updateLlape(input, llapeText) {
  const defaultValue = input.value.trim();

  if (defaultValue !== '') {
    llapeText.textContent = input.value;
  }

  input.addEventListener('input', () => {
    const currentValue = input.value.trim();

    if (currentValue !== '') {
      llapeText.textContent = currentValue;
    } else {
      llapeText.textContent = '---';
    }
  });
}

// Get date and time
function updateDateTime() {
  const now = new Date();
  const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();
  const textMonths = [
    'ene.',
    'feb.',
    'mar.',
    'abr.',
    'may.',
    'jun.',
    'jul.',
    'ago.',
    'sep.',
    'oct.',
    'nov.',
    'dic.',
  ];
  const month = textMonths[monthIndex];
  const hour = now.getHours() % 12 ? now.getHours() % 12 : 12;
  const formatHour = hour < 10 ? '0' + hour : hour;
  const getAmPm = now.getHours() >= 12 ? 'p. m.' : 'a. m.';
  const minute =
    now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();

  llapeDate.textContent = `${day} ${month} ${year}`;
  llapeTime.textContent = `${formatHour}:${minute} ${getAmPm}`;
}

updateDateTime();

// Calculate the time until the next minute
const now = new Date();
const msUntilNextMinute = (60 - now.getSeconds()) * 1000;

// Wait for the next minute exactly for the update
setTimeout(() => {
  updateDateTime();
  setInterval(updateDateTime, 60000); // Update every minute
}, msUntilNextMinute);
