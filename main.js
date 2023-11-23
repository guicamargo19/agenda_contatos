const form = document.getElementById('form-contato');
const nomeCompleto = [];
const telefones = [];
const emails = [];
const reset = document.getElementById("reset");

let contato = '';

reset.addEventListener('click', function() {
    if (contato.length >= 1) {
        window.location.reload();
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    adicionaContato();
    NovaTabela();
});

function adicionaContato() {
    const inputNome = document.getElementById('name');
    const inputSobrenome = document.getElementById('lastname');
    const inputTelefone = document.getElementById('phone');
    const inputEmail = document.getElementById('email');

    let nomeMaisSobrenome = `${inputNome.value} ${inputSobrenome.value}`

    if ((nomeCompleto.includes(nomeMaisSobrenome))) {
        alert(`O contato: ${nomeMaisSobrenome} já existe na sua agenda.`);
    } else if (telefones.includes(inputTelefone.value)) {
        alert(`O telefone: ${inputTelefone.value} já existe na sua agenda.`);
    } else if ((emails.includes(inputEmail.value))) {
        alert(`O e-mail: ${inputEmail.value} já existe na sua agenda.`);
    } else {
        nomeCompleto.push(nomeMaisSobrenome);
        telefones.push(inputTelefone.value);
        emails.push(inputEmail.value);

        let line = '<tr class="contato">';
        line += `<td>${inputNome.value}</td>`;
        line += `<td>${inputSobrenome.value}</td>`;
        line += `<td>${inputTelefone.value}</td>`;
        line += `<td>${inputEmail.value}</td>`;
        line += '</tr>';

        contato += line
    }

    inputNome.value = '';
    inputSobrenome.value = '';
    inputTelefone.value = '';
    inputEmail.value = '';
}

function NovaTabela() {
    const agenda = document.querySelector('tbody');
    agenda.innerHTML = contato;
}

