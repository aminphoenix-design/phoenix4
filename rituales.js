// Utilidad para generar una "runa" simbólica desde el nombre
function generarRuna(nombre) {
  const base = [...nombre.toUpperCase()].map(l => l.charCodeAt(0)).reduce((a, b) => a + b, 0);
  const simbolos = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛋ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛟ'];
  return simbolos[base % simbolos.length];
}

function cargarRituales() {
  const rituales = JSON.parse(localStorage.getItem('rituales')) || [];
  const lista = document.getElementById('lista-rituales');
  lista.innerHTML = '';

  if (rituales.length === 0) {
    lista.innerHTML = '<p>Aún no se ha invocado ningún ritual.</p>';
    return;
  }

  const ul = document.createElement('ul');
  rituales.forEach(r => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="runa">${generarRuna(r.nombre)}</span> <strong>${r.nombre}</strong> invocó <em>${r.tipo}</em>`;
    ul.appendChild(li);
  });
  lista.appendChild(ul);
}

function guardarRitual(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const tipo = document.getElementById('tipo').value;

  if (!nombre) return;

  const rituales = JSON.parse(localStorage.getItem('rituales')) || [];
  rituales.push({ nombre, tipo });
  localStorage.setItem('rituales', JSON.stringify(rituales));

  document.getElementById('form-ritual').reset();
  cargarRituales();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form-ritual').addEventListener('submit', guardarRitual);
  cargarRituales();
});
