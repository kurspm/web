<script lang="ts">
  import { ExternalLink } from "lucide-svelte";

  export let href;
  export let icon = '';

  const iconTable = {
    'kth': 'https://www.kth.se/student/kurser/kurs/static/icon/favicon',
    'canvas': 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico',
    'quizlet': 'https://assets.quizlet.com/_next/static/media/q-twilight.e27821d9.png',
  }

  let favicon = iconTable[icon as keyof typeof iconTable] ? iconTable[icon as keyof typeof iconTable] : icon;
</script>

<a {href} target="_blank" class="inline-block rounded p-2 no-underline border border-zinc-200 dark:border-zinc-600 my-1 shadow dark:shadow-zinc-600">
  {#if favicon}<img src={favicon} alt="icon" class="inline-block mr-1 w-5 h-5 align-text-top" />{/if}
  <slot />
  <ExternalLink size={14} />
</a>