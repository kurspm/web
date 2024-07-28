<script lang="ts">
  import Toc from '$lib/layout/Toc.svelte';
  import CourseTitle from '$lib/layout/CourseTitle.svelte';
  import { onMount } from 'svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;

  let kurs: any;

  onMount(async () => {
    if (data.kurs) {
      kurs = (await data.kurs).default;
    }
  })
</script>

<title>{data.kod.toUpperCase()} - kurs.pm</title>

<div class="w-full">
  <CourseTitle>
    <span slot="kurskod">{data.kod.toUpperCase()}</span>
    <span slot="förkortning">{data.förkortning}</span>
    {@html data.namn}
  </CourseTitle>
  <div class="flex flex-row">
    <main class="w-full max-w-[39rem]">
      <svelte:component this={kurs} />
    </main>
    <Toc />
  </div>
</div>
