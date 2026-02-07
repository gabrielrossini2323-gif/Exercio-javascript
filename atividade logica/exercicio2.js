// 1. O usuário insere a nota (aqui simulamos com o prompt)
let nota = prompt("Digite a nota do aluno (0 a 100):");

// 2. O prompt devolve texto, então convertemos para Número
nota = Number(nota); 

// 3. A Lógica (O Cérebro)
if (nota < 0 || nota > 100) {
    // Validação de erro
    alert("Erro: A nota deve ser entre 0 e 100!");
} else if (nota >= 70) {
    // Aprovado
    alert("Parabéns! O aluno foi APROVADO com nota " + nota);
} else if (nota >= 50) {
    // Recuperação
    alert("Atenção: O aluno está de RECUPERAÇÃO com nota " + nota);
} else {
    // Reprovado
    alert("Sinto muito, o aluno foi REPROVADO com nota " + nota);
}