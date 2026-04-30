function seleccionarParte(parte) {
    const titulo = document.getElementById('info-titulo');
    const desc = document.getElementById('info-descripcion');
    const panel = document.getElementById('info-panel');

    panel.style.opacity = '0.7';
    
    setTimeout(() => {
        panel.style.opacity = '1';
        if (parte === 'motor') {
            titulo.innerText = 'Protocolo de Ingeniería: Motor';
            desc.innerHTML = 'Ajuste de precisión en sistemas de combustión interna, revisión de fajas de distribución y optimización de rendimiento térmico.';
        } 
        else if (parte === 'frenos') {
            titulo.innerText = 'Protocolo de Ingeniería: Frenado';
            desc.innerHTML = 'Inspección de sistemas ABS, rectificación de discos bajo estándares industriales y sustitución de fluidos hidráulicos.';
        } 
        else if (parte === 'electrico') {
            titulo.innerText = 'Protocolo de Ingeniería: Electrónica';
            desc.innerHTML = 'Diagnóstico de redes CAN-BUS, sensores de inyección y programación de módulos de control electrónico del vehículo.';
        } 
        else if (parte === 'transmision') {
            titulo.innerText = 'Protocolo de Ingeniería: Sistema transmision';
            desc.innerHTML = 'Mantenimiento de transmisiones, reparaciones de cajas y ajustes de cajas.';
        }
    }, 100);
}