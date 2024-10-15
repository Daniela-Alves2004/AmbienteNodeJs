function Turma(codigo, nota) {
    let p_codigo = codigo;
    let p_nota = nota;

    return {
        aprovado: () => {
            return p_nota >= 6;
        }
    };
}

module.exports = Turma;
