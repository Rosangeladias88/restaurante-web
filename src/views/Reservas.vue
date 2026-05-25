<script setup>
import { ref } from 'vue'

const reservas = ref([])
const mensagem = ref('')

function reservar(event) {
  const form = event.target

  const nome = form.nome.value
  const telefone = form.telefone.value
  const data = form.data.value
  const horario = form.horario.value
  const pessoas = form.pessoas.value

  fetch('http://restaurante-web-v9v7.onrender.com/reservas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome,
      telefone,
      data_reserva: data,
      hora_reserva: horario,
      quantidade_pessoas: pessoas
    })
  })

  reservas.value.push({
    nome,
    telefone,
    data,
    horario,
    pessoas
  })

  mensagem.value = `✅ Reserva confirmada para ${nome} às ${horario}!`

  form.reset()
}
</script>

<template>


  <section class="reservas">
    <div class="card-reserva">
      <h1>Reserve sua mesa </h1>

      <p>
        Escolha o melhor dia e horário para aproveitar a Cafeteria da Rosa.
      </p>

        <form @submit.prevent="reservar">

 
            <input type="text" name="nome" placeholder="Seu nome" required>

<input type="tel" name="telefone" placeholder="Telefone" required>

<input type="date" name="data" required>

<input type="time" name="horario" required>

<input type="number" name="pessoas" placeholder="Quantidade de pessoas" required>

        <button type="submit">
          Confirmar Reserva
        </button>
      </form>

<p class="mensagem-sucesso" v-if="mensagem">
    {{ mensagem}} 

    </p>

      <div class="lista-reservas" v-if="reservas.length > 0">
  <h2>Reservas confirmadas</h2>

  <div class="reserva-item" v-for="(reserva, index) in reservas" :key="index">
    <p><strong>Cliente:</strong> {{ reserva.nome }}</p>
    <p><strong>Telefone:</strong> {{ reserva.telefone }}</p>
    <p><strong>Data:</strong> {{ reserva.data }}</p>
    <p><strong>Horário:</strong> {{ reserva.horario }}</p>
    <p><strong>Pessoas:</strong> {{ reserva.pessoas }}</p>

    <button 
      class="btn-excluir"
      @click="excluirReserva(index)"
    >
      Excluir reserva
    </button>
  </div>
</div>

<p class="sem-reservas" v-else>
  Nenhuma reserva confirmada ainda.
</p>

    </div>
  </section>
</template>

<style scoped>

.lista-reservas {
  margin-top: 30px;
  text-align: left;
}

.lista-reservas h2 {
  color: #6b0f1a;
  margin-bottom: 15px;
  text-align: center;
}

.reserva-item {
  background: #f8e8ec;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  animation: aparecer 0.5s ease;
}
.reservas {
  min-height: 80vh;
  background: #f8f1ec;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

.card-reserva {
  background: white;
  width: 500px;
  max-width: 500px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  text-align: center;
}

.card-reserva h1 {
  color: #6b0f1a;
  margin-bottom: 10px;
}

.card-reserva p {
  margin-bottom: 25px;
  color: #555;
}

.btn-excluir {
  background: #8b1e3f;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
}

.btn-excluir:hover {
  background: #5c1028;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input {
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
}

input:focus{
    outline: none;
    border: 2px solid #8b1e3f;
    box-shadow: 0 0 8px rgba(139, 30, 63, 0.3);
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


button:hover {
  background: #8b1e3f;
  transform: scale(1.03);
  transition: 0.3s;
  cursor: pointer;
}



.lista-reservas {
  margin-top: 30px;
}

.lista-reservas h2 {
  color: #6b0f1a;
  margin-bottom: 20px;
}

.reserva-item {
  background: #fff;
  border-left: 5px solid #6b0f1a;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);

  animation: aparecerReserva 0.5s ease;
}

.reserva-item p {
  margin: 8px 0;
  color: #444;
}

.btn-excluir {
  margin-top: 15px;
  background: #b91c1c;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  transition: 0.3s;
}

.btn-excluir:hover {
  background: #991b1b;
  transform: scale(1.05);
}

@keyframes aparecerReserva {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.lista-reservas {
  margin-top: 30px;
}

.lista-reservas h2 {
  color: #6b0f1a;
  margin-bottom: 20px;
  text-align: center;
}

.reserva-item {
  background: #fff;
  border-left: 5px solid #6b0f1a;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);

  animation: aparecerReserva 0.5s ease;
}

.reserva-item p {
  margin: 5px 0;
  color: #333;
}

.btn-excluir {
  margin-top: 10px;
  background: #b22222;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-excluir:hover {
  background: #8b0000;
  transform: scale(1.05);
}

.sem-reservas {
  margin-top: 20px;
  text-align: center;
  color: #777;
  font-style: italic;
}

@keyframes aparecerReserva {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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