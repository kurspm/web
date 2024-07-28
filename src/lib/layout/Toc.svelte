<script lang="ts">
  import Toc from 'svelte-toc';
</script>
<div class="flex-1 dark:hidden"> <!-- light mode -->
  <Toc title="INNEHÅLL" --toc-active-color="black" --toc-mobile-bg="white" />
</div>
<div class="flex-1 hidden dark:block"> <!-- dark mode -->
  <Toc title="INNEHÅLL" --toc-active-color="white" --toc-mobile-bg="black" />
</div>