import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '.././../styles/header.css';

function ReferralProgram() {
  const data = {
    labels: ['Tier 1', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5', 'Tier 6'],
    datasets: [
      {
        label: 'Commission Rate',
        data: [5, 10, 20, 30, 35, 40],
        borderColor: 'rgba(72, 144, 226, 0.7)', 
        pointBackgroundColor: [
          '#bfbfbf', '#31d2a0', '#3cb4d9', '#f9a54f', '#ab47bc', '#e78b2d'
        ],
        pointBorderColor: 'rgba(255, 255, 255, 0.5)',
        pointRadius: 8,
        pointHoverRadius: 12,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.dataIndex === 0) return `F0 (Rebate): ${context.raw}%`;
            if (context.dataIndex === 1) return `F1 (Commission): ${context.raw}%`;
            if (context.dataIndex === 2) return `F2 (Commission): ${context.raw}%`;
            return `${context.raw}%`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#ccc' },
      },
      y: {
        min: 0,
        max: 50,
        ticks: { color: '#ccc' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
      },
    },
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Unlock Rewards with the Copin Referral Program</h1>
        <p>
          Earn rebates and commissions by inviting friends.<br />
          Grow your network and benefit from our 6-tier reward system.
        </p>
        <a href="#">View referral Ranking →</a>
      </div>

      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <Line data={data} options={options} />
        <div className="tier-labels">
          {data.labels.map((label, index) => (
            <div key={index} className={`tier-label tier${index + 1}`}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReferralProgram;
