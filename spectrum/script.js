import { spectrumData } from './data.js';

const container = document.getElementById('spectrums');

spectrumData.forEach(band => {
  const section = document.createElement('section');
  section.id = `band${band.id}`;
  section.innerHTML = `<h2>${band.title}</h2>`;
  
  const chart = document.createElement('div');
  chart.className = 'chart';
  chart.dataset.band = band.id;

  band.blocks.forEach(b => {
    const blk = document.createElement('div');
    blk.className = `block ${b.type}`;
    blk.style.flex = b.width;
    blk.innerHTML = `
      <strong>${b.label}</strong>
      <span>${b.width} MHz</span>
    `;
    blk.dataset.details = b.details;
    chart.appendChild(blk);
  });

  const start = document.createElement('div');
  start.className = 'frequency start';
  start.textContent = band.freqStart;
  chart.appendChild(start);

  const end = document.createElement('div');
  end.className = 'frequency end';
  end.textContent = band.freqEnd;
  chart.appendChild(end);

  const hint = document.createElement('p');
  hint.className = 'info';
  hint.textContent = 'Click on a spectrum block to view details below.';

  const details = document.createElement('div');
  details.className = 'details';

  section.append(chart, hint, details);
  container.append(section);
});

container.addEventListener('click', e => {
  const blk = e.target.closest('.block');
  if (!blk) return;

  blk.parentNode.querySelectorAll('.block').forEach(b => b.classList.remove('selected'));
  blk.classList.add('selected');

  const sec = blk.closest('section');
  const det = sec.querySelector('.details');
  det.innerHTML = blk.dataset.details;
  det.classList.add('visible');
});

