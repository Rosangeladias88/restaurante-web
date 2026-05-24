
<template>

  <section class="home">
    <div class="conteudo">
      <h1>Bem-vindo à Cafeteria da Rosa </h1>

      <p>
        Cafés especiais, doces artesanais e momentos aconchegantes.
      </p>

      <div class="botoes">
        <RouterLink to="/cardapio" class="botao pulsar">
          Ver Cardápio
        </RouterLink>

        <RouterLink to="/reservas" class="botao secundario">
          Fazer Reserva
        </RouterLink>
      </div>
    </div>
  </section>
 
 <section class="galeria">
  <h2>Conheça nosso ambiente</h2>

  <div class="area-carrossel">
    <button class="seta esquerda" @click="anterior">
      ‹
    </button>

    <div class="carrossel" ref="carrossel">
      <img :src="ambiente1" alt="Ambiente 1">
      <img :src="ambiente2" alt="Ambiente 2">
      <img :src="ambiente3" alt="Ambiente 3">
      <img :src="ambiente4" alt="Ambiente 4">
      <img :src="ambiente5" alt="Ambiente 5">
    </div>

    <button class="seta direita" @click="proximo">
      ›
    </button>
  </div>
</section>
<section class="destaques">
  <h2>Por que escolher a Cafeteria da Rosa?</h2>

  <div class="cards">
    <div class="card">
      <h3>☕ Cafés Especiais</h3>
      <p>Bebidas preparadas com carinho e qualidade.</p>
    </div>

    <div class="card">
      <h3>🍰 Doces Artesanais</h3>
      <p>Bolos, tortas e sobremesas fresquinhas.</p>
    </div>
    <div class="card">
      <h3>🌹 Ambiente Aconchegante</h3>
      <p>Um espaço perfeito para relaxar e conversar.</p>
    </div>
  </div>
</section>


<footer class="footer">
  <h2>Cafeteria da Rosa</h2>

  <p>📍 Travessa Três Irmãos, 123 - Belém/PA</p>

  <p>📞 (91) 99999-9999</p>

  <p>🕒 Seg a Sáb - 08h às 22h</p>

  <p>📸 @cafeteriadarosa</p>

  <p class="copyright">
    © 2026 Cafeteria da Rosa - Todos os direitos reservados.
  </p>
</footer>

</template>

import { ref } from 'vue'

const carrossel = ref(null)

function proximo() {
  carrossel.value.scrollBy({
    left: 340,
    behavior: 'smooth'
  })
}

function anterior() {
  carrossel.value.scrollBy({
    left: -340,
    behavior: 'smooth'
  })
}

<script setup>
import { ref } from 'vue'

import ambiente1 from '../assets/imagens/ambiente1.jpg'
import ambiente2 from '../assets/imagens/ambiente2.jpg'
import ambiente3 from '../assets/imagens/ambiente3.jpg'
import ambiente4 from '../assets/imagens/ambiente4.jpg'
import ambiente5 from '../assets/imagens/ambiente5.jpg'

const carrossel = ref(null)

function proximo() {
  carrossel.value.scrollBy({
    left: 340,
    behavior: 'smooth'
  })
}

function anterior() {
  carrossel.value.scrollBy({
    left: -340,
    behavior: 'smooth'
  })
}
</script>

<style scoped>

.carrossel img {
  transition: all 0.4s ease;
  cursor: pointer;
}

.carrossel {
  display: flex;
  gap: 25px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 20px;
}

.carrossel::-webkit-scrollbar {
  display: none;
}

.carrossel img {
  transition: all 0.4s ease;
  cursor: pointer;
}

.carrossel img:hover {
  transform: scale(1.05);
}

.carrossel img:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 22px rgba(0,0,0,0.35);
}
.home {
  min-height: 80vh;
  background:
    linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
    url('../assets/imagens/fundo-cafeteria.jpg');

  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 40px;
}

.conteudo h1 {
  font-size: 48px;
  margin-bottom: 15px;
}

.conteudo p {
  font-size: 20px;
  margin-bottom: 25px;
}

.botao {
  background: #8b3a3a;
  color: white;
  padding: 12px 22px;
  border-radius: 8px;
  text-decoration: none;
  margin: 8px;
  display: inline-block;
}
.secundario {
  background: #c08a5b;
}
.destaques {
  padding: 50px 30px;
  text-align: center;
  background: #f8f1ec;
}

.destaques h2 {
  color: #4b0f14;
  margin-bottom: 30px;
}

.cards{
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
}
    
.card{
  background: white;
  color: #8b1e3f;
  padding: 30px;
  border-radius: 18px;
  width: 250px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}
.rodape {
  background: #4b0f14;
  color: white;
  text-align: center;
  padding: 40px 20px;
}

.rodape h3 {
  margin-bottom: 10px;
  font-size: 28px;
}

.rodape p {
  margin: 8px 0;
  font-size: 16px;
}
.galeria {
  padding: 50px 30px;
  text-align: center;
  background: #fff7f2;
}

.galeria h2 {
  color: #4b0f14;
  margin-bottom: 25px;
}

.carrossel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 15px;
}

.carrossel img {
  min-width: 320px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  scroll-snap-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.area-carrossel {
  position: relative;
}

.seta {
  position: absolute;
  top: 110px;
  transform: translateY(-50%);
  background: rgba(75, 15, 20, 0.6);
  color: white;
  border: none;
  font-size: 35px;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
}

.esquerda {
  left: 10px;
}

.direita {
  right: 10px;
}



.galeria {
  padding: 50px 30px;
  text-align: center;
  background: #fff7f2;
}

.galeria{
    position:relative;
}

.galeria h2 {
  color: #4b0f14;
  margin-bottom: 25px;
}

.carrossel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 15px;
}

.carrossel img {
  min-width: 320px;
  height: 220px;
  object-fit: cover;
  border-radius: 16px;
  scroll-snap-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.botao {
  transition: 0.3s ease;
}

.botao:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
}

.botao:active {
  transform: scale(0.95);
}
@keyframes pulsar {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.06);
  }

  100% {
    transform: scale(1);
  }
}

.carrossel img {
    transition: transform 0.4s ease;
}
.carrossel img:hover{
    transform:scal(1.05);
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



.footer {
  background: #2b1d1d;
  color: white;
  text-align: center;
  padding: 40px 20px;
  margin-top: 60px;
}

.footer h2 {
  margin-bottom: 15px;
  font-size: 32px;
}

.footer p {
  margin: 8px 0;
}

.copyright {
  margin-top: 20px;
  font-size: 14px;
  opacity: 0.8;
}
</style>

<
