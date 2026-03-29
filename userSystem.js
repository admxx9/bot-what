// userSystem.js
const fs = require('fs');

const usuariosPath = './database/usuarios.json';
const planosAtivosPath = './database/planos_ativos.json';

// Inicializa banco de dados
function initDatabase() {
    if (!fs.existsSync('./database')) {
        fs.mkdirSync('./database', { recursive: true });
    }
    
    if (!fs.existsSync(usuariosPath)) {
        fs.writeFileSync(usuariosPath, JSON.stringify([], null, 2));
    }
    
    if (!fs.existsSync(planosAtivosPath)) {
        fs.writeFileSync(planosAtivosPath, JSON.stringify([], null, 2));
    }
}

// Adiciona ou atualiza usuário
function adicionarUsuario(userId, nome, username) {
    let usuarios = JSON.parse(fs.readFileSync(usuariosPath));
    
    const existe = usuarios.find(u => u.id === userId);
    
    if (!existe) {
        usuarios.push({
            id: userId,
            nome: nome,
            username: username,
            criadoEm: new Date()
        });
        fs.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, 2));
    }
}

// Verifica se usuário tem plano ativo
function isUsuarioAtivo(userId) {
    const planos = JSON.parse(fs.readFileSync(planosAtivosPath));
    const plano = planos.find(p => p.userId === userId && p.status === 'ativo');
    
    if (plano && new Date(plano.expiraEm) > new Date()) {
        return true;
    }
    
    return false;
}

// Obtém plano do usuário
function getPlanoUsuario(userId) {
    const planos = JSON.parse(fs.readFileSync(planosAtivosPath));
    const plano = planos.find(p => p.userId === userId && p.status === 'ativo');
    
    if (plano && new Date(plano.expiraEm) > new Date()) {
        return plano;
    }
    
    return null;
}

// Ativa plano após pagamento
function ativarPlano(userId, planType, dias) {
    let planos = JSON.parse(fs.readFileSync(planosAtivosPath));
    
    // Remove plano antigo se existir
    planos = planos.filter(p => p.userId !== userId);
    
    // Adiciona novo plano
    const expiraEm = new Date();
    expiraEm.setDate(expiraEm.getDate() + dias);
    
    planos.push({
        userId: userId,
        plano: planType,
        status: 'ativo',
        ativadoEm: new Date(),
        expiraEm: expiraEm
    });
    
    fs.writeFileSync(planosAtivosPath, JSON.stringify(planos, null, 2));
    return true;
}

module.exports = {
    initDatabase,
    adicionarUsuario,
    isUsuarioAtivo,
    getPlanoUsuario,
    ativarPlano
};