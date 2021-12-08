<template>
  <section
    class="bg-white dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center mt-8"
  >
    <div
      class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
    >
      <div class="lg:w-1/2">
        <div
          class="h-64 bg-cover lg:rounded-lg lg:h-full bg-bottom"
          :style="`background-image: url(${bg})`"
        ></div>
      </div>

      <div class="max-w-xl px-0 md:px-6 py-12 lg:max-w-5xl lg:w-1/2">
        <h2
          class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
        >
          Bangun
          <span class="text-blue-600 dark:text-blue-400">PLTS-mu</span>
          Sekarang
        </h2>
        <p class="mt-4 text-gray-600 dark:text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus
          enim expedita aperiam mollitia iure consectetur dicta tenetur, porro
          consequuntur saepe accusantium consequatur.
        </p>

        <div class="flex justify-center mt-8">
          <ui-whatsapp />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      required: false,
      default: "/img/solar-panel.webp",
    },
  },
};
</script>
