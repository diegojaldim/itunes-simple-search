<template>
  <div class="flex flex-col align-middle items-center mt-5 pb-10 border-b-2" v-for="album in props.albuns">
    <p class="mb-2">Artista: {{ album.artistName }}</p>
    <p class="mb-2">Álbum: {{ album.collectionName }}</p>
    <p class="mb-2">Gênero: {{ album.primaryGenreName }}</p>
    <p class="mb-2">Preço: {{ album.collectionPrice }}</p>
    <p class="mb-2">Data de Lançamento: {{ album.releaseDate }}</p>
    <div class="rounded-md overflow-hidden">
      <a :href="album.artistViewUrl" target="_blank">
        <img
          :src="album.artworkUrl100"
          :alt="album.collectionName"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  Artist,
} from '../types/itunes.types';

const props = defineProps<{
  albuns: Array<Artist>
}>();
</script>
