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
