<script lang="ts">
  import { ExternalLink } from "lucide-svelte";
  export let href;
  export let target = '_blank';
  export let size = 14;
</script>

<a href={href} target={target}><slot /><span class="px-[.1rem] nounderline"><ExternalLink {size}/></span></a>