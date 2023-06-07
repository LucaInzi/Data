import 'chart.js/auto';

import { Chart } from 'chart.js';
// eslint-disable-next-line no-console
console.log('Script loaded');

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('DOM fully loaded and parsed');

  window.Webflow ||= [];
  window.Webflow.push(() => {
    fetch('http://localhost:5000/data')
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);

        // Ici, vous pouvez utiliser les données reçues pour créer vos graphiques.
        // Par exemple, vous pourriez remplacer les tableaux doughnutData, barData, et lineData par les données reçues.
        // Je vais laisser ces tableaux tels quels pour l'instant, mais vous devrez les modifier en fonction de la structure de vos données.

        // ...

        const ctx1 = document.querySelector('[data-element="chart-1"]');
        const ctx2 = document.querySelector('[data-element="chart-2"]');
        const ctx3 = document.querySelector('[data-element="chart-3"]');
        // eslint-disable-next-line no-console
        console.log('Canvas elements: ', ctx1, ctx2, ctx3);

        // ...

        // Puis vous créez vos graphiques comme avant.
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});
