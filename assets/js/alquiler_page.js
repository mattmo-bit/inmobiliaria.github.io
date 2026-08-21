import { propiedades_alquiler } from './propiedades_alquiler.js';

function cargarPropiedadesAlquiler() {
  const container = document.getElementById('contenedor-alquiler');
  if (!container) return;

  let html = '';

  for (let propiedad of propiedades_alquiler) {

    const humoTexto = propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar';
    const humoClase = propiedad.smoke ? 'text-success' : 'text-danger';
    const humoIcono = propiedad.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban';


    const mascotasTexto = propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas';
    const mascotasClase = propiedad.pets ? 'text-success' : 'text-danger';
    const mascotasIcono = propiedad.pets ? 'fas fa-paw' : 'fa-solid fa-ban';

    html += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}" />
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p>
              <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${propiedad.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString('es-CL')}</p>
            <p class="${humoClase}">
              <i class="${humoIcono}"></i> ${humoTexto}
            </p>
            <p class="${mascotasClase}">
              <i class="${mascotasIcono}"></i> ${mascotasTexto}
            </p>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', cargarPropiedadesAlquiler);