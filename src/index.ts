import 'chart.js/auto'; // Assurez-vous d'importer le contrôleur de beignet

import { Chart } from 'chart.js';

// eslint-disable-next-line no-console
console.log('Script loaded'); // Ajouté au début de votre script

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('DOM fully loaded and parsed');

  window.Webflow ||= [];
  window.Webflow.push(() => {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const ctx1 = document.querySelector('[data-element="chart-1"]');
    // eslint-disable-next-line no-console
    console.log('Canvas element: ', ctx1); // Doit imprimer l'élément canvas ou null s'il n'est pas trouvé

    if (!ctx1 || !(ctx1 instanceof HTMLCanvasElement)) return;

    new Chart(ctx1.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map((row) => row.count),
          },
        ],
      },©
    });
  });
});
