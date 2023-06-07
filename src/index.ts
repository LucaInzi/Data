import 'chart.js/auto';

import { Chart } from 'chart.js';
// eslint-disable-next-line no-console
console.log('Script loaded');

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('DOM fully loaded and parsed');

  window.Webflow ||= [];
  window.Webflow.push(() => {
    const doughnutData = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const barData = [
      { label: 'Rouge', count: 12 },
      { label: 'Bleu', count: 19 },
      { label: 'Jaune', count: 3 },
      { label: 'Vert', count: 5 },
      { label: 'Violet', count: 2 },
      { label: 'Orange', count: 3 },
    ];

    const lineData = [
      { month: 'Janvier', sales: 250 },
      { month: 'Février', sales: 200 },
      { month: 'Mars', sales: 150 },
      { month: 'Avril', sales: 300 },
      { month: 'Mai', sales: 350 },
      { month: 'Juin', sales: 400 },
    ];

    const ctx1 = document.querySelector('[data-element="chart-1"]');
    const ctx2 = document.querySelector('[data-element="chart-2"]');
    const ctx3 = document.querySelector('[data-element="chart-3"]');
    // eslint-disable-next-line no-console
    console.log('Canvas elements: ', ctx1, ctx2, ctx3);

    if (ctx1 instanceof HTMLCanvasElement) {
      new Chart(ctx1.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: doughnutData.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: doughnutData.map((row) => row.count),
            },
          ],
        },
      });
    }

    if (ctx2 instanceof HTMLCanvasElement) {
      new Chart(ctx2.getContext('2d'), {
        type: 'bar',
        data: {
          labels: barData.map((row) => row.label),
          datasets: [
            {
              label: 'Favorite Colors',
              data: barData.map((row) => row.count),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
      });
    }

    if (ctx3 instanceof HTMLCanvasElement) {
      new Chart(ctx3.getContext('2d'), {
        type: 'line',
        data: {
          labels: lineData.map((row) => row.month),
          datasets: [
            {
              label: 'Sales by Month',
              data: lineData.map((row) => row.sales),
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        },
      });
    }
  });
});
