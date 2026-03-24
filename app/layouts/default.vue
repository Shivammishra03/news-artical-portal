<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="container mx-auto p-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">News Portal</h1>
      </div>
    </header>
    <main class="container mx-auto p-4">
      <slot />
    </main>
    <footer class="bg-white shadow mt-10">
      <div class="container mx-auto p-4 text-center text-gray-500">
        &copy; 2026 News Portal
      </div>
    </footer>
  </div>
</template>