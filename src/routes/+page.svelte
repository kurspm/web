<script>
  import OutLink from '$lib/inline/OutLink.svelte';
  import { Search, AlertTriangle, PlusCircle, Github } from 'lucide-svelte';
  import CalloutInfo from '$lib/widget/CalloutInfo.svelte';
  import KURSER from '$kurs/INDEX.json';
  import CardCourse from '$lib/widget/CardCourse.svelte';
  let searchQuery = '';
</script>

<title>kurs.pm</title>

<h1 class="mt-12 font-bold text-2xl md:text-3xl leading-none text-center">Anteckningar för högskolekurser,<br>skrivna av studenter, för studenter.</h1>

<CalloutInfo classes="mt-6">
  kurs.pm skapades sommaren 2024, så det är <b>väldigt</b> mycket innehåll & standard som saknas. Hjälp oss att förbättra och bidra med nytt innehåll via <OutLink href="https://github.com/kurspm/kurspm" target="_blank">GitHub</OutLink>!
</CalloutInfo>

<!--
<div class="flex flex-row gap-1 border-b-2 border-b-stone-300 dark:border-b-zinc-700 mt-6 md:mt-12 text-xl md:text-2xl">
  <input type="text" bind:value={searchQuery}
  class="w-full md:w-[30rem] block bg-transparent" placeholder="Sök kurskod/populärnamn">
  <Search />
</div>
-->

<div class="font-bold mt-8 mb-4">{Object.keys(KURSER).length} KURSER</div>
<div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
  {#each Object.entries(KURSER) as [kod, kurs]}
  <CardCourse {kod} namn={kurs.namn} förkortning={kurs.förkortning} />
  {/each}
  <a href="https://github.com/kurspm/kurspm/issues/" target="_blank" class="flex justify-center items-center flex-col outline-2 outline-dashed outline-zinc-300 dark:outline-zinc-700 rounded text-zinc-500 italic no-underline p-3 text-center leading-tight">
    Saknas kursen du letar efter? Skriv på GitHub!
  </a>
</div>