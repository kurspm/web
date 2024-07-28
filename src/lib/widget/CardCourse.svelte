<script lang="ts">
  export let kod;
  export let förkortning = '';
  export let namn;
</script>

<a href={"/"+kod} class="rounded p-3 bg-zinc-300 dark:bg-zinc-700 no-underline text-oled block leading-tight">
  <div class="mb-2">
    <span>{kod.toUpperCase()}</span>
    {#if förkortning}<span class="italic">"{förkortning}"</span>{/if}
  </div>
  <div class="text-lg font-bold leading-tight ml-2">{@html namn}</div>
</a>