// Codigo primer punto del parcial
class Boton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <button type="button" class="btn btn-outline-primary" id="miBoton">Dale click aca</button>
        `;

        const miBoton = shadowRoot.getElementById('miBoton');

        miBoton.addEventListener('click', () => {
            const toggleEvent = new CustomEvent('toggleInput', {
                bubbles: true,
                composed: true,
            });
            this.dispatchEvent(toggleEvent);
        });
    }
}

customElements.define('danielfelipetorradocarrascal-192236', Boton);


// Codigo del segundo punto
const numeroHijosInput = document.getElementById('numeroHijos');
const cajasContainer = document.getElementById('cajas');
    
    numeroHijosInput.addEventListener('input', () => {
      
      cajasContainer.innerHTML = '';
      
      
      const numHijos = parseInt(numeroHijosInput.value) || 0;

      
        for (let i = 1; i <= numHijos; i++) {
            const hijoDiv = document.createElement('div');
            hijoDiv.className = 'mb-3';
            const nombreInput = document.createElement('input');
            nombreInput.type = 'text';
            nombreInput.className = 'form-control mb-2';
            nombreInput.placeholder = `Nombre del hijo ${i}`;
            nombreInput.name = `nombreHijo${i}`;
            const edadInput = document.createElement('input');
            edadInput.type = 'number';
            edadInput.className = 'form-control';
            edadInput.placeholder = `Edad del hijo ${i}`;
            edadInput.name = `edadHijo${i}`;
            edadInput.min = '0';
            hijoDiv.appendChild(nombreInput);
            hijoDiv.appendChild(edadInput);
            cajasContainer.appendChild(hijoDiv);
        }
    });

    
    const hijosForm = document.getElementById('hijosForm');
    hijosForm.addEventListener('submit', (e) => {
        e.preventDefault();

      
        const formData = new FormData(hijosForm);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

      alert('Formulario enviado');
    });