<script>
  import { AlertTriangle } from 'lucide-svelte';
  export let classes = '';
</script>

<div class={`bg-red-400/30 dark:bg-red-500/30 border-red-500 border-l-4 rounded-r-lg flex flex-row gap-2 px-2 py-3 ${classes}`}>
  <div class="w-6 text-red-500">
    <AlertTriangle />
  </div>
  <p>
    <slot />
  </p>
</div>