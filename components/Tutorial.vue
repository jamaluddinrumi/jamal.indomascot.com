<!-- Please remove this file from your project -->
<template>
  <div
    class="
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <nuxt-link
        class="flex justify-center pt-8 sm:pt-0"
        :to="{ name: 'index' }"
      >
        <img class="w-20" src="/img/ngodingmanusiawi-logo.svg" />
      </nuxt-link>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h1
          class="
            text-2xl
            leading-7
            font-semibold
            text-center text-transparent
            bg-clip-text bg-gradient-to-r
            from-green-400
            to-blue-600
          "
        >
          Ngoding Manusiawi
        </h1>
        <h2
          class="
            mt-3
            text-gray-600 text-center text-transparent
            bg-clip-text bg-gradient-to-r
            from-pink-600
            to-yellow-900
          "
        >
          Ngoding Untuk Bermanfaat Seluas-Luasnya.
        </h2>
        <p
          class="
            mt-4
            text-gray-800 text-center text-transparent
            bg-clip-text bg-gradient-to-r
            from-blue-600
            to-indigo-900
          "
        >
          Tempat <span class="italic">sharing</span> ngoding untuk bermanfaat
          seluas-luasnya.
        </p>
      </div>
    </div>
  </div>
</template>
