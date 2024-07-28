<script>
  import { Info } from 'lucide-svelte';
  export let classes = '';
</script>

<div class={`bg-blue-400/30 dark:bg-blue-500/30 border-blue-500 border-l-4 rounded-r-lg flex flex-row gap-2 px-2 py-3 ${classes}`}>
  <div class="w-6 text-blue-500">
    <Info />
  </div>
  <p>
    <slot />
  </p>
</div>