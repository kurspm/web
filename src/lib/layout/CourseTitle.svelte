<script lang="ts">
  import { PencilLine } from "lucide-svelte";

  export let kod;
  export let förkortning = '';
  export let namn;
</script>

<div class="flex flex-col md:flex-row md:justify-between items-start md:items-center">
  <h1 class="text-4xl mt-12 mb-2 md:mb-4">
    <div class="text-xl leading-none">
      <slot name="kurskod">{kod.toUpperCase()}</slot>
      {#if förkortning}<span class="font-normal italic">"{förkortning}"</span>{/if}
    </div>
    {@html namn}
  </h1>
  <a href={`https://github.com/kurspm/kurspm/blob/main/src/kurs/${kod}.svelte`} target="_blank" class="no-underline mb-4 md:mb-0">
    <PencilLine /> Redigera sidan på GitHub
  </a>
</div>