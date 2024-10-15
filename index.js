const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');

const aluno1 = Aluno('Daniela', 'daniela123', '123456');
console.log(aluno1.apresentacao());

const turma1 = Turma('N14', 6);
console.log(`Aprovado: ${turma1.aprovado()}`);

const turmaPresencial1 = TurmaPresencial('N14', 7, 80);
console.log(`Aprovado na turma presencial: ${turmaPresencial1.aprovado()}`);
