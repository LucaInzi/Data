import 'chart.js/auto';

import { Chart } from 'chart.js';

// eslint-disable-next-line no-console
console.log('Script loaded');

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('DOM fully loaded and parsed');

  const ctx3 = document.querySelector('[data-element="chart-3"]');
  if (ctx3 instanceof HTMLCanvasElement) {
    fetch('http://localhost:5000/data') // Modifier l'URL en '/data'
      .then((response) => response.json())
      .then((data) => {
        const lineData = data.map((item) => ({
          year: item.Annee_RefT,
          sales: item.CA,
        }));

        const chart = new Chart(ctx3.getContext('2d'), {
          type: 'line',
          data: {
            labels: lineData.map((row) => String(row.year)),
            datasets: [
              {
                label: 'Sales by Year',
                data: lineData.map((row) => row.sales),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
              },
            ],
          },
        });

        chart.update();
      });
  }
});
