import JustValidate from 'just-validate';
import * as htmlToImage from 'html-to-image';
import { toPng } from 'html-to-image';

const validator = new JustValidate('#form');

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
        errorMessage: 'Este campo debe ser mayor a 0',
      },
      {
        rule: 'maxNumber',
        value: 500,
        errorMessage: 'Este campo acepta un máximo de 500',
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
  )
  .onSuccess(() => {
    const llape = document.querySelector('.llape');
    const downloadLink = document.querySelector('#download-llape');

    htmlToImage
      .toPng(llape)
      .then((dataUrl) => {
        downloadLink.href = dataUrl;
        downloadLink.click();
      })
      .catch((err) => {
        console.error('Algo salió mal', err);
      });
  });
