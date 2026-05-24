
<template>
  <div>
    <header class="topo">
      <h1>Cafeteria da Rosa</h1>

      <nav>
        <RouterLink to="/">Início</RouterLink>
        <RouterLink to="/cardapio">Cardápio</RouterLink>
        <RouterLink to="/delivery">Delivery</RouterLink>
        <RouterLink to="/reservas">Reservas</RouterLink>
        <RouterLink to="/clientes">Clientes</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.topo {
  width: 100%;
  background: #4b0f14;
  color: white;
  padding: 25px 40px;
  text-align: center;
}

.topo h1 {
  margin-bottom: 15px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 25px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}



nav a {
  position: relative;
  transition: 0.3s;
}

nav a::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  background: #f8c8dc;
  left: 0;
  bottom: -5px;
  transition: 0.3s;
}

nav a:hover::after {
  width: 100%;
}

nav a:hover {
  color: #f8c8dc;
}
</style>