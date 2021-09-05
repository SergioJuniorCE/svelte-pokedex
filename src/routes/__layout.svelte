<script>
  import Navbar from "../components/navbar.svelte";
</script>

<div class="p-8 max-w-6xl mx-auto">
  <Navbar/>
  <slot></slot>
</div>
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>