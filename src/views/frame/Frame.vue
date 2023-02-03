<template>
  <section style="display: flex; flex-flow: column; height: 100%; min-width: 1300px; overflow: auto">
    <l-header style=""></l-header>
    <section style="flex: 1; display: flex; flex-flow: row">
      <main style="height: 100%; flex: 1; padding: 20px; overflow: auto">
        <router-view slot="main" ref="main"></router-view>
      </main>
    </section>
  </section>
</template>


<script>
import LHeader from "./components/Header"

export default {
  components: {
    LHeader
  }
}
</script>

