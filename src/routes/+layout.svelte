<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";

  /* ALL OF THE FOLLOWING ARE LOGIC FOR DARK/LIGHT MODE */
  import { Sun, Moon, Eclipse, Github } from 'lucide-svelte';
  let windowDark = false;
  let selectDark = 2; // 2 = no active choice
  let isDark = false;

  onMount(() => { // window & localStorage only exists after mount
    windowDark = window.matchMedia('(prefers-color-scheme: dark)').matches // update immediately on mount
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => { // update on change
      windowDark = event.matches ? true : false;
    });
  })

  $: if (selectDark === 2) { // no active choice
    isDark = windowDark;
  } else {
    isDark = Boolean(selectDark);
  }
</script>

<div class="flex flex-col items-center w-full min-h-screen bg-zinc-200 dark:bg-zinc-900 text-black dark:text-white transition-colors" class:dark={isDark}>

  <header class="flex flex-row items-center justify-between w-full max-w-[55rem] py-2 md:py-6 px-2 mx-5">
    <a href="/" class="text-xl md:text-2xl font-bold no-underline text-black dark:text-white">kurs.pm</a>
    <div class="flex flex-row gap-2">
      <button class="flex flex-row gap-2 group"
      on:mousedown={() => {selectDark = selectDark === 2 ? 0 : selectDark+1}}>
      
        <span class="opacity-0 group-hover:opacity-100 transition-opacity text-right text-sm">
          {#if selectDark > 1} Systemtema
          {:else if !!selectDark} Mörkt tema
          {:else} Ljust tema
          {/if}
          <br>
          (Tryck för att ändra)
        </span>
        <div class="bg-stone-100 dark:bg-zinc-800 p-2 rounded-[50%] group-hover:opacity-80 transition-opacity">
          {#if selectDark > 1} <Eclipse />
          {:else if !!selectDark} <Moon />
          {:else} <Sun />
          {/if}
        </div>
      </button>
      <a href="https://github.com/kurspm/kurspm" target="_blank" class="bg-stone-100 dark:bg-zinc-800 p-2 rounded-[50%]">
        <Github />
      </a>
    </div>
  </header>
  

  <div class="bg-zinc-50 dark:bg-zinc-800 w-full flex justify-center flex-1">
    <div class="flex flex-col items-center w-full max-w-[55rem] pb-6 md:pb-32 px-3">
      <slot />
    </div>
  </div>
  

  <footer class="flex flex-col md:flex-row items-stretch justify-between w-full max-w-[55rem] py-6 md:pt-12 px-2 mx-5">
    <a href="/" class="text-left text-3xl md:text-4xl font-bold no-underline text-black dark:text-white hover:bg-transparent">kurs.pm</a>
    <p class="text-right text-zinc-600 dark:text-zinc-400">
      <a href="/om">Om hemsidan</a>
      <br>© hexakon 2024
      <br>
    </p>
  </footer>
  <footer>
    <p class="max-w-[50rem] mb-8 text-center text-sm leading-tight text-zinc-600 dark:text-zinc-400">All assets are property of their respective owners. This website is an open source project operated by students, and is unaffiliated with nor represent the view of any schools, faculty members, or student chapters.</p>
  </footer>

</div>