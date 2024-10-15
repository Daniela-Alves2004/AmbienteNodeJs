const Turma = require('./Turma');

function TurmaPresencial(codigo, nota, frequencia) {
    let p_frequencia = frequencia;
    let turma = Turma(codigo, nota);

    return {
        aprovado: () => {
            return turma.aprovado() && p_frequencia >= 75;
        }
    };
}

module.exports = TurmaPresencial;
