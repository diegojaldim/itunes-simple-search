<template>

  <div class="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-400">

    <div class="flex flex-col h-2/3 w-2/3 border pt-5 pb-5 rounded-sm bg-slate-100 overflow-hidden">
      <div class="flex flex-col pl-5 pr-5 h-full">

        <div class="flex flex-col">
          <input type="text" v-model="state.term" @keypress.enter="onSearchFromItunes" class="focus:outline-none border border-slate-500 text-sm rounded-sm p-2" placeholder="@TODO...">
        </div>


        <div class="flex flex-col grow" style="overflow: auto;">
          <ul class="border">
            <li v-for="album in state.albuns">
              <p>{{ album.collectionName }}</p>
              <img :src="album.artworkUrl100" :alt="album.collectionName">
            </li>
          </ul>
        </div>

        <div class="flex flex-col">
          <button @click="onSearchFromItunes" class="bg-green-500 rounded-sm text-slate-50 p-2 font-medium">Buscar Artista</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { reactive } from 'vue';
import { searchFromItunes } from './services/itunes.service';
import type {
  SearchFromItunesResponse,
  Artist
} from './types/itunes.types';

export default {
  setup() {
    interface State {
      term: string;
      albuns: Array<Artist>;
    };

    const state: State = reactive({
      term: '',
      albuns: [],
    });
  
    const onSearchFromItunes = async () => {
      const { term } = state;

      const response: SearchFromItunesResponse = await searchFromItunes({
        term,
        entity: 'album'
      });
      state.albuns = response.results;
    }

    return {
      state,
      onSearchFromItunes
    }
  }
}
</script>