
<script setup>
import { ref } from 'vue'

const clientes = ref([])

async function cadastrar(event) {
  event.preventDefault()

  const nome = event.target.nome.value
  const email = event.target.email.value
  const telefone = event.target.telefone.value

  const novoCliente = {
    nome,
    email,
    telefone
  }

  try {
    const resposta = await fetch('http://restaurante-web-v9v7.onrender.com/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoCliente)
    })

    const dados = await resposta.json()

    alert(dados.mensagem)

    clientes.value.push(novoCliente)

    event.target.reset()

  } catch (erro) {
    alert('Erro ao cadastrar cliente')
    console.log(erro)
  }
}
</script>

<template>
  <section class="clientes">
    <div class="card-cliente">
      <h1>Cadastro de Clientes </h1>

      <p>
        Cadastre seus dados para receber novidades e promoções da Cafeteria da Rosa.
      </p>

      <form @submit.prevent="cadastrar">
        
        <input type="text" name="nome" placeholder="Nome completo" required>

        <input type="email" name="email" placeholder="E-mail" required>

        <input type="tel" name="telefone" placeholder="Telefone" required>


        <button type="submit">
          Cadastrar Cliente
        </button>
      </form>
<div class="lista-clientes">
  <h2>Clientes cadastrados</h2>

  <ul>
    <li v-for="(cliente, index) in clientes" :key="index">
      {{ cliente.nome }} - {{ cliente.email }}
    </li>
  </ul>
</div>

    </div>
  </section>
</template>

<style scoped>


.clientes {
  min-height: 80vh;
  background: #f8f1ec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.card-cliente {
  background: white;
  width: 100%;
  max-width: 500px;
  padding: 35px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  text-align: center;
  animation: aparecer 0.8s aese;
}

.card-cliente h1 {
  color: #6b0f1a;
  margin-bottom: 10px;
}

.card-cliente p {
  margin-bottom: 25px;
  color: #555;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  input:focus {
  outline: none;
  border: 2px solid #8b1e3f;
  box-shadow: 0 0 8px rgba(139, 30, 63, 0.3);
}
}

button {
  background: #6b0f1a;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
button {
  transition: 0.3s;
}

button:hover {
  transform: scale(1.03);
}

button:hover {
  background: #8b1e2d;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes aparecer {
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.lista-clientes {
  margin-top: 30px;
  text-align: left;
}

.lista-clientes h2 {
  color: #6b0f1a;
  margin-bottom: 15px;
}

.lista-clientes ul {
  list-style: none;
  padding: 0;
}

.lista-clientes li {
  background: #f8e8ec;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .card-reserva {
    width: 90%;
    padding: 25px;
  }

  input,
  button {
    width: 100%;
  }

  nav {
    flex-direction: column;
    gap: 10px;
  }
}
</style>