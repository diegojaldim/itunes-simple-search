<template>

  <div class="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-gray-400">

    <div class="flex flex-col h-2/3 w-2/3 border pt-5 pb-5 rounded-sm bg-slate-100 overflow-hidden">
      <div class="flex flex-col pl-5 pr-5 h-full">

        <form class="flex flex-row" @submit.prevent="onSearchFromItunes">
          <input
            type="text"
            v-model="state.term"
            class="focus:outline-none flex grow border-t border-l border-b border-slate-500 text-sm rounded-sm rounded-r-none p-2"
            placeholder="Pesquisar por artista"
          />
          <button
            type="submit"
            class="bg-green-500 rounded-sm text-slate-50 p-2 font-size pl-10 pr-10"
          >
            Buscar
          </button>
        </form>

        <div class="flex h-full flex-col overflow-auto">
          <div
            v-if="(state.albuns.length === 0 && !state.loading)"
            class="flex flex-col grow h-full items-center mt-10"
          >
            <h3>Nenhum resultado encontrado</h3>
          </div>

          <div
            v-if="state.loading"
            class="flex flex-col grow h-full items-center mt-10"
          >
            <h3>Aguarde...</h3>
          </div>

          <Album :albuns="state.albuns" />
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
import Album from './components/Album.vue';

export default {
  setup() {
    interface State {
      term: string;
      loading: boolean;
      albuns: Array<Artist>;
    };

    const state: State = reactive({
        term: "",
        albuns: [],
        loading: false,
    });

    const onSearchFromItunes = async () => {
      const { term } = state;
      state.loading = true;
      state.albuns = [];
      const response: SearchFromItunesResponse = await searchFromItunes({
          term,
          entity: "album"
      });
      state.albuns = response.results;
      state.loading = false;
    };

    return {
      state,
      onSearchFromItunes
    };
  },
  components: { Album }
}
</script>