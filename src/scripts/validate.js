import JustValidate from 'just-validate';

const validator = new JustValidate('#form');

const message = document.querySelector('#message');
const boxMessage = document.querySelector('#box-message');
const boxMessageText = document.querySelector('#box-message p');

message.addEventListener('input', () => {
  const value = message.value;

  if (value.length > 0) {
    boxMessage.classList.remove('hidden');
    boxMessage.classList.add('flex');
    boxMessageText.textContent = value;
  } else {
    boxMessage.classList.add('hidden');
    boxMessage.classList.remove('flex');
    boxMessageText.textContent = '';
  }
});

validator
  .addField(
    '#title',
    [
      {
        rule: 'required',
        errorMessage: 'Este campo es requerido',
      },
    ],
    {
      errorLabelCssClass: ['label-error'],
      errorFieldCssClass: ['input-error'],
    }
  )
  .addField(
    '#quantity',
    [
      {
        rule: 'required',
        errorMessage: 'Este campo es requerido',
      },
      {
        rule: 'number',
        errorMessage: 'Este campo acepta solo números',
      },
      {
        rule: 'minNumber',
        value: 1,
        errorMessage: 'Este campo debe ser mayor a 1',
      },
    ],
    {
      errorLabelCssClass: ['label-error'],
      errorFieldCssClass: ['input-error'],
    }
  )
  .addField(
    '#name',
    [
      {
        rule: 'required',
        errorMessage: 'Este campo es requerido',
      },
    ],
    {
      errorLabelCssClass: ['label-error'],
      errorFieldCssClass: ['input-error'],
    }
  )
  .addField(
    '#phone',
    [
      {
        rule: 'required',
        errorMessage: 'Este campo es requerido',
      },
      {
        rule: 'number',
        errorMessage: 'Este campo acepta solo números',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Este campo debe tener 3 dígitos',
      },
      {
        rule: 'maxLength',
        value: 3,
        errorMessage: 'Este campo debe tener 3 dígitos',
      },
    ],
    {
      errorLabelCssClass: ['label-error'],
      errorFieldCssClass: ['input-error'],
    }
  )
  .addField(
    '#destine',
    [
      {
        rule: 'required',
        errorMessage: 'Este campo es requerido',
      },
    ],
    {
      errorLabelCssClass: ['label-error'],
      errorFieldCssClass: ['input-error'],
    }
  );
