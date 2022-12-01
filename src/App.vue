<script setup lang="ts">

</script>

<template>

  <div class="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-400">

    <div class="flex flex-row h-2/3 w-2/4 border pt-5 pb-5 rounded-sm bg-slate-100 overflow-hidden">

      <div class="flex flex-col w-1/2 pl-5 pr-2.5 h-full">

        <div class="flex flex-col">
          <button class="bg-purple-500 rounded-sm text-slate-50 p-2 font-medium">Search for image</button>
        </div>

        <div class="flex border border-black mt-5">
          <img src="https://imagens.ebc.com.br/_34PNwBsVjgoaXG9e2ijTM1H0RU=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/fifa_divulga_o_logotipo_oficial_da_copa_do_mundo_de_2022_no_catar_0.jpg?itok=kN7iakP4" alt="">
        </div>
        
      </div>

      <div class="flex flex-col justify-between w-1/2 pl-2.5 pr-5 h-full">

        <div class="flex flex-col">
          <input type="text" class="focus:outline-none border border-slate-500 text-sm rounded-sm p-2 mb-5">
          <input type="text" class="focus:outline-none border border-slate-500 text-sm rounded-sm p-2 mb-5">
        </div>

        <div class="flex flex-col">
          <button class="bg-green-500 rounded-sm text-slate-50 p-2 font-medium">Save it!</button>
        </div>
      </div>
    </div>

  </div>

</template>