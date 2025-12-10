function formatarData(data) {
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return data.toLocaleDateString('pt-br', options);
}

// PARTE 1: RELÓGIO EM TEMPO REAL

function atualizarRelogio() {
    const agora = new Date();
    
// Formata a hora para HH:MM:SS
    const hora = agora.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    document.getElementById('relogio').textContent = hora;
    
    document.getElementById('data').textContent = formatarData(agora);
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);


// PARTE 2: ALTERNAR TEMA

const body = document.body;
const botaoTema = document.getElementById('toggle-theme');

botaoTema.addEventListener('click', function() {
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        botaoTema.textContent = 'Modo Claro 🌞';
        
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        botaoTema.textContent = 'Modo Escuro 🌙';
    }
    
});