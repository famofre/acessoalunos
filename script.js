document.addEventListener('DOMContentLoaded', () => {
    const formAluno = document.getElementById('formAluno');
    const tabelaAlunos = document.querySelector('#tabelaAlunos tbody');
    let alunos = [];

    formAluno.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const matricula = document.getElementById('matricula').value;
        const horaEntrada = new Date().toLocaleTimeString();

        const aluno = {
            nome,
            telefone,
            email,
            matricula,
            horaEntrada,
            horaSaida: ''
        };

        alunos.push(aluno);
        atualizarTabela();
        formAluno.reset();
    });

    function atualizarTabela() {
        tabelaAlunos.innerHTML = '';
        alunos.forEach((aluno, index) => {
            const row = tabelaAlunos.insertRow();

            row.insertCell(0).textContent = aluno.nome;
            row.insertCell(1).textContent = aluno.telefone;
            row.insertCell(2).textContent = aluno.email;
            row.insertCell(3).textContent = aluno.matricula;
            row.insertCell(4).textContent = aluno.horaEntrada;
            row.insertCell(5).textContent = aluno.horaSaida || 'Em andamento';

            const btnSaida = document.createElement('button');
            btnSaida.textContent = 'Registrar Saída';
            btnSaida.onclick = () => registrarSaida(index);
            row.insertCell(6).appendChild(btnSaida);
        });
    }

    function registrarSaida(index) {
        alunos[index].horaSaida = new Date().toLocaleTimeString();
        atualizarTabela();
    }
});
