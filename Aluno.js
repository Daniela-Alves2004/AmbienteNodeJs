function Aluno(nome, login, ra) {
    let p_nome = nome;
    let p_login = login;
    let p_ra = ra;

    return {
        apresentacao: () => {
            return `Nome: ${p_nome}, Login: ${p_login}, RA: ${p_ra}.`;
        }
    };
}

module.exports = Aluno;
