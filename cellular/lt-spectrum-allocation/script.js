    const data = [

/* spectrum data */
      {
        id: 'B1', title: 'Band B1 (FDD)', freqStart: '2110 / 1920 MHz', freqEnd: '2170 / 1980 MHz', blocks: [
          { type: 'bite', label: 'Bite', width: 20,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2110 - 2130 MHz downlink and 1920 - 1940 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2026-02-28<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 100` },
          { type: 'telia', label: 'Telia', width: 20,
            details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2130 - 2150 MHz downlink and 1940 - 1960 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2026-02-23<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 300` },
          { type: 'tele2', label: 'Tele2', width: 20,
            details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2150 - 2170 MHz downlink and 1960 - 1980 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2026-03-06<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 500` }
        ]
      },

      {
        id: 'B3', title: 'Band B3 (FDD)', freqStart: '1805 / 1710 MHz', freqEnd: '1880 / 1785 MHz', blocks: [
          { type: 'telia', label: 'Telia', width: 25,
            details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>25 MHz (1805 - 1830 MHz downlink and 1710 - 1735 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 1348<br><br>
                      <strong>Details:</strong><br>20 MHz used for LTE. 5 MHz seems to be unused` },
          { type: 'tele2', label: 'Tele2', width: 25,
            details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>25 MHz (1830 - 1855 MHz downlink and 1735 - 1760 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 1574<br><br>
                      <strong>Details:</strong><br>20 MHz used for LTE. 5 MHz seems to be unused` },
          { type: 'bite', label: 'Bite', width: 25,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>25 MHz (1855 - 1880 MHz downlink and 1760 - 1785 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 1850, 1733<br><br>
                      <strong>Details:</strong><br>20+5 MHz used for LTE` }
        ]
      },

      {
        id: 'B7', title: 'Band B7 (FDD)', freqStart: '2620 / 2500 MHz', freqEnd: '2690 / 2690 MHz', blocks: [
          { type: 'tele2', label: 'Tele2', width: 20,
            details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2620 - 2640 MHz downlink and 2500 - 2520 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2027-08-29<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 2850` },
          { type: 'telia', label: 'Telia', width: 20,
            details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2640 - 2660 MHz downlink and 2520 - 2540 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2027-08-29<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 3050` },
          { type: 'bite', label: 'Bite', width: 20,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>20 MHz (2660 - 2680 MHz downlink and 2540 - 2560 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2027-08-29<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 3250<br><br>
                      <strong>Details:</strong><br>20 MHz used for LTE` },
          { type: 'bite', label: 'Bite', width: 10,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (2680 - 2690 MHz downlink and 2560 - 2570 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-01-15<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 3394<br><br>
                      <strong>Details:</strong><br>10 MHz used for LTE<br>The 10 MHz spectrum block was acquired after the acquisition of Mezon` }
        ]
      },

      {
        id: 'B8', title: 'Band B8 (FDD)', freqStart: '925 / 880 MHz', freqEnd: '960 / 915 MHz', blocks: [
          { type: 'unallocated', label: 'Unallocated', width: 0.1,
            details: `<strong>Bandwidth:</strong><br>0.1 MHz (925 - 925.1 MHz downlink and 880 - 880.1 MHz uplink)` },
          { type: 'bite', label: 'Bite', width: 11.6,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>11.6 MHz (925.1 - 936.7 MHz downlink and 880.1 - 891.7 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM<br>3G: UARFCN 2938<br><br>
                      <strong>Details:</strong><br>Currently used for 3G and 2G GSM. 3G is in process of being phased out. Testing 5 MHz B8 LTE in Palanga and Sventoji.` },
          { type: 'telia', label: 'Telia', width: 11.6,
            details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>11.6 MHz (936.7 - 948.3 MHz downlink and 891.7 - 903.3 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM<br>LTE: EARFCN 3617<br><br>
                      <strong>Details:</strong><br>10 MHz allocated for LTE, with the remaining 1.6 MHz used for 2G GSM` },
          { type: 'tele2', label: 'Tele2', width: 11.6,
            details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>11.6 MHz (948.3 - 959.9 MHz downlink and 903.3 - 914.9 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2032-10-31<br><br>
                      <strong>Used for:</strong><br>2G GSM<br>LTE: EARFCN 3774<br><br>
                      <strong>Details:</strong><br>5 MHz allocated for LTE; the remaining spectrum is used for 2G GSM` },
          { type: 'unallocated', label: 'Unallocated', width: 0.1,
            details: `<strong>Bandwidth:</strong><br>0.1 MHz (959.9 - 960 MHz downlink and 914.9 - 915 MHz uplink)` }
        ]
      },

      {
        id: 'B20', title: 'Band B20 (FDD)', freqStart: '791 / 832 MHz', freqEnd: '821 / 862 MHz', blocks: [
          { type: 'bite', label: 'Bite', width: 10,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (791 - 801 MHz downlink and 832 - 842 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6200` },
          { type: 'telia', label: 'Telia', width: 10,
            details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (801 - 811 MHz downlink and 842 - 852 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6300` },
          { type: 'tele2', label: 'Tele2', width: 10,
            details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (811 - 821 MHz downlink and 852 - 862 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2030-07-01<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6400` }
        ]
      },

      {
        id: 'B28', title: 'Bands B28, n28 (FDD)', freqStart: '758 / 703 MHz', freqEnd: '788 / 733 MHz', blocks: [

          { type: 'unallocated', label: 'Unallocated', width: 10,
            details: `<strong>Bandwidth:</strong><br>10 MHz (758 - 768 MHz downlink and 703 - 713 MHz uplink)<br><br>
              <strong>Details:</strong><br>Previously unused due to Russian TV interference, This band will be auctioned this year to either Tele2 or Bite, with the winner swapping their current 5 MHz while the other operator will receive an alternate 5 MHz block, so everyone ends up with 10 MHz.` },
          { type: 'telia', label: 'Telia', width: 10,
            details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (768 - 778 MHz downlink and 713 - 723 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 6400<br>5G: NRARFCN 154570<br><br>
                      <strong>Details:</strong><br>10 MHz used for LTE/5G ESS (Ericsson Spectrum Sharing)` },
          { type: 'bite', label: 'Bite', width: 5,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (778 - 783 MHz downlink and 723 - 728 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2042-10-11<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 9435` },
          { type: 'tele2', label: 'Tele2', width: 5,
            details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>10 MHz (783 - 788 MHz downlink and 728 - 733 MHz uplink)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 9485` }
        ]
      },

      {
        id: 'B38', title: 'Band B38 (TDD)', freqStart: '2570 MHz', freqEnd: '2620 MHz', blocks: [
          { type: 'bite', label: 'Bite', width: 50,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>50 MHz (2570 - 2620 MHz)<br><br>
                      <strong>Valid until:</strong><br>2030-01-15<br><br>
                      <strong>Details:</strong><br>Seems to be unused right now<br>This spectrum block was acquired after the acquisition of Mezon` },
        ]
      },

      {
        id: 'B40', title: 'Band B40, n40 (TDD)', freqStart: '2300 MHz', freqEnd: '2400 MHz', blocks: [
          { type: 'unallocated', label: 'Unallocated', width: 10,
            details: `<strong>Bandwidth:</strong><br>10 MHz (2300 - 2310 MHz)` },
          { type: 'bite', label: 'Bite', width: 80,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>80 MHz (2310 - 2390 MHz)<br><br>
                      <strong>Valid until:</strong><br>2029-07-25<br><br>
                      <strong>Used for:</strong><br>LTE: EARFCN 38850<br>5G: NRARFCN 468250<br><br>
                      <strong>Details:</strong><br>60 MHz is being used for 5G and 20 MHz for LTE<br>This spectrum block was acquired after the acquisition of Mezon` },
          { type: 'unallocated', label: 'Unallocated', width: 10,
            details: `<strong>Bandwidth:</strong><br>10 MHz (2390 - 2400 MHz)` }
        ]
      },

      {
        id: 'B78', title: 'Band n78 (TDD)', freqStart: '3400 MHz', freqEnd: '3800 MHz', blocks: [
          { type: 'tele2', label: 'Tele2', width: 100,
            details: `<strong>Operated by:</strong><br>UAB Tele2 Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3400 - 3500 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 630000` },
          { type: 'telia', label: 'Telia', width: 100,
            details: `<strong>Operated by:</strong><br>AB Telia Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3500 - 3600 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 634080` },
          { type: 'bite', label: 'Bite', width: 100,
            details: `<strong>Operated by:</strong><br>UAB Bite Lietuva<br><br>
                      <strong>Bandwidth:</strong><br>100 MHz (3600 - 3700 MHz)<br><br>
                      <strong>Valid until:</strong><br>2042-09-26<br><br>
                      <strong>Used for:</strong><br>5G: NRARFCN 640704<br><br>
                      <strong>Details:</strong><br>Used but rarely` },
          { type: 'unallocated', label: 'Unallocated', width: 100,
            details: `<strong>Bandwidth:</strong><br>100 MHz (3700 - 3800 MHz)` }
        ]
      },
    ];



    const container = document.getElementById('spectrums');
    data.forEach(band => {
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
        blk.innerHTML = `<strong>${b.label}</strong><br>${b.width} MHz`;
        blk.dataset.details = b.details;
        chart.appendChild(blk);
      });
      const s = document.createElement('div'); s.className = 'frequency'; s.style.left = '0'; s.textContent = band.freqStart; chart.appendChild(s);
      const e = document.createElement('div'); e.className = 'frequency'; e.style.right = '0'; e.textContent = band.freqEnd; chart.appendChild(e);

      const hint = document.createElement('p');
      hint.className = 'info';
      hint.textContent = 'Click on a spectrum block to view details below.';

      const details = document.createElement('div');
      details.className = 'details';
      details.style.display = 'none';

      section.append(chart, hint, details);
      container.append(section);
    });

    document.body.addEventListener('click', e => {
      const blk = e.target.closest('.block'); if (!blk) return;
      const chart = blk.closest('.chart');
      chart.querySelectorAll('.block').forEach(b => b.classList.remove('selected'));
      blk.classList.add('selected');

      const sec = blk.closest('section');
      const det = sec.querySelector('.details');
      det.innerHTML = blk.dataset.details;
      det.style.display = 'block';

      /* fuck this shit
      det.scrollIntoView({ behavior: 'smooth', block: 'start' });
      */
    });