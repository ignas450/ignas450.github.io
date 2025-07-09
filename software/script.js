function formatBytes(bytes, decimals = 1) {
  if (!bytes) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(dm)} ${sizes[i]}`;
}

const iconMapping = {
  folder: 'icons/folder.png',
  default: 'icons/file.png',
  zip: 'icons/archive.png',
  exe: 'icons/exe.png',
  txt: 'icons/txt.png',
  iso: 'icons/iso.png'
  jar: 'icons/jar.png'
};

const gdriveFilesByFolder = {
  'software/files': [
    { name: 'aida64.zip', url: 'https://drive.google.com/uc?export=download&id=1_RxCNMnJd3Lm8zk6_6AT_IB-MsfgsmMe', size: 135328285 },
    { name: 'LegacyLauncherWindows.exe', url: 'https://drive.google.com/uc?export=download&id=18iN2Igbm9DLv491SR5jOh65CWclNkBRa', size: 117560495 },
    { name: 'VMware-Workstation-17.6.2.exe', url: 'https://drive.google.com/uc?export=download&id=1Oe_HsQXHoOM4z6VAsEkNMWOqPQos56Q4', size: 257359088 }
  ],
  'software/files/VMware Tools': [
    { name: 'Vista Updates for VMware Tools.iso', url: 'https://drive.google.com/uc?export=download&id=1Y3ypNwxNQNBojlge5YraMyQBseBjGrbg', size: 273698816 },
    { name: 'VMware Tools for Vista.iso', url: 'https://drive.google.com/uc?export=download&id=1oSKEINZEEKb30yZWUSLJLamKjgO_UjkU', size: 143421440 },
    { name: 'VMware-tools-13.0.0-24696409-x64.exe', url: 'https://drive.google.com/uc?export=download&id=11mJg0rAdr9zk6Trc6Qsc3SRstuYW6nuU', size: 110778184 },
    { name: 'VMware-tools-windows-13.0.0-24696409.iso', url: 'https://drive.google.com/uc?export=download&id=1Fph7GVvFm3yYYmMGl-ThUlrh9NrSFQyr', size: 112410624 },
    { name: 'VMware-tools-windows-arm-13.0.0-24696409.iso', url: 'https://drive.google.com/uc?export=download&id=15pXplnsSVitqizw33mi5NLQn5RVL3iR3', size: 156319744 },
    { name: 'Windows 7 Updates for VMware Tools.iso', url: 'https://drive.google.com/uc?export=download&id=1IKxU3qoTUhNNpilSEANqyMLrkwS6Jdhv', size: 645791744 }
  ]
};

async function loadFiles(path = 'software/files') {
  const ul = document.getElementById('fileList');
  ul.innerHTML = '';

  let errorBanner = document.getElementById('errorBanner');
  if (!errorBanner) {
    errorBanner = document.createElement('div');
    errorBanner.id = 'errorBanner';
    errorBanner.classList.add('error-banner');
    errorBanner.textContent = '⚠️ Failed to fetch files';
    ul.parentNode.insertBefore(errorBanner, ul);
  } else {
    errorBanner.style.display = 'none';
  }

  let githubItems = [];
  try {
    const apiURL = `https://api.github.com/repos/ignas450/ignas450.github.io/contents/${path}`;
    const res = await fetch(apiURL);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    githubItems = await res.json();
  } catch (err) {
    console.error('GitHub fetch error:', err);
    errorBanner.style.display = '';
    return;
  }

  const githubFiles = githubItems.map(item => ({
    name: item.name,
    url: item.download_url || '',
    size: item.size || 0,
    type: item.type,
    path: item.path,
    source: 'github'
  }));

  const gdriveFiles = (gdriveFilesByFolder[path] || []).map(file => ({
    ...file,
    type: 'file',
    source: 'manual'
  }));

  const allItems = [...githubFiles, ...gdriveFiles].sort((a, b) => {
    if (a.type !== b.type) return a.type === 'dir' ? -1 : 1;
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  renderBreadcrumb(path);

  allItems.forEach(item => {
    const li = document.createElement('li');
    const ext = item.type === 'dir' ? 'folder' : item.name.split('.').pop().toLowerCase();
    const iconSrc = iconMapping[ext] || iconMapping.default;

    if (item.type === 'dir') {
      li.innerHTML = `
        <div class="file-item" style="cursor: pointer;">
          <img class="file-icon" src="${iconSrc}" alt="folder icon">
          <span class="file-link">${item.name}</span>
        </div>
        <span class="file-size"></span>
      `;
      li.addEventListener('click', () => loadFiles(item.path));
    } else {
      li.innerHTML = `
        <div class="file-item">
          <img class="file-icon" src="${iconSrc}" alt="file icon">
          <a class="file-link" href="${item.url}" download>${item.name}</a>
        </div>
        <span class="file-size">${formatBytes(item.size)}</span>
      `;
    }
    ul.appendChild(li);
  });
  renderBackButton(path);
}

function renderBreadcrumb(path) {
  const container = document.getElementById('currentPathDisplay') || createBreadcrumbContainer();
  container.innerHTML = '';
  const segments = path.replace('software/files', '').split('/').filter(Boolean);
  let fullPath = 'software/files';

  const homeSpan = createBreadcrumbSpan('🏠', () => loadFiles('software/files'));
  container.appendChild(homeSpan);

  segments.forEach(segment => {
    fullPath += `/${segment}`;
    container.appendChild(document.createTextNode(' / '));
    const span = createBreadcrumbSpan(segment, () => loadFiles(fullPath));
    container.appendChild(span);
  });
}

function createBreadcrumbSpan(text, onClick) {
  const span = document.createElement('span');
  span.textContent = text;
  span.onclick = onClick;
  return span;
}

function createBreadcrumbContainer() {
  const div = document.createElement('div');
  div.id = 'currentPathDisplay';
  document.getElementById('fileList').parentNode.insertBefore(div, document.getElementById('fileList'));
  return div;
}

function renderBackButton(path) {
  const existing = document.getElementById('backButton');
  if (existing) existing.remove();
  if (path === 'software/files') return;

  const backBtn = document.createElement('div');
  backBtn.id = 'backButton';
  backBtn.classList.add('back-button');
  backBtn.innerHTML = `
    <img class="file-icon" src="icons/back.png" alt="back icon">
    <span class="file-link">Parent directory/</span>
  `;

  const parent = path.split('/').slice(0, -1).join('/') || 'software/files';
  backBtn.addEventListener('click', () => loadFiles(parent));

  document.getElementById('fileList').parentNode.insertBefore(backBtn, document.getElementById('fileList'));
}

document.addEventListener('DOMContentLoaded', () => loadFiles());