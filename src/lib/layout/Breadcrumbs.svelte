<script lang="ts">
  import { ChevronRight } from "lucide-svelte";
  export let links;
</script>

<p class="mb-2 text-base font-normal">
  {#each links as link}
  <a href={link[1]}>{link[0]}</a>
  <ChevronRight size={16} />
  {/each}
</p>