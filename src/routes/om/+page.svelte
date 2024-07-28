<script lang="ts">
  import Toc from '$lib/layout/Toc.svelte';
  import Breadcrumbs from "$lib/layout/Breadcrumbs.svelte";
  import ArticleTitle from "$lib/layout/ArticleTitle.svelte";
  import Paragraph from "$lib/layout/Paragraph.svelte";
  import CalloutWarning from "$lib/widget/CalloutWarning.svelte";
  import Highlight from '$lib/inline/Highlight.svelte';
  import Heading from '$lib/layout/Heading.svelte';
  import OutLink from '$lib/inline/OutLink.svelte';
  import OList from '$lib/inline/OList.svelte';
  import UList from '$lib/inline/UList.svelte';
</script>

<title>Om hemsidan - kurs.pm</title>


<div class="w-full">
  
  <ArticleTitle>
    <!--<Breadcrumbs links={[["Info","/info"]]} slot="crumb" />-->
    Om hemsidan
  </ArticleTitle>
  <h2 class="hidden">Om hemsidan</h2>
  <div class="flex flex-row">
    <main class="max-w-[40rem]">
      <Paragraph>
        Välkommen till kurs.pm!
      </Paragraph>
      <Paragraph>
        För att förstå varför hemsidan finns, föreställ dig följande scenarier:
        
        <OList>
          <li class="mt-4">Du ska strax börja en ny kurs (eller utbildning). Du har hört att kursen är rätt svår, och vill därför läsa på och plugga i förväg när du ändå har tid nu, t ex under lovet. Men efter intensivt googlande lyckas du inte ens hitta vad kursen specifikt går igenom, och du känner ingen äldre student som kan hjälpa dig att komma igång.</li>
          <li class="mt-4">Du sitter fast på en uppgift och inte har den blekaste aning om hur du kommer vidare. Du har redan försökt med att läsa kurslitteraturen och fråga dina klasskamrater, men du kan fortfarande inte få grepp på hur man ska tänka på frågan. Du tror att det kanske hjälper om du kan få en till förklaring från en annan vinkel, men nu är klockan alldeles för sent för att be någon om hjälp.</li>
        </OList>

      </Paragraph>
      <Paragraph>
        Om något (eller båda) av scenarierna låter bekant, så är denna hemsida för dig. <Highlight>Målet med kurs.pm är att samla så många resurser och pluggtips som det bara går</Highlight>, för att alla studenter ska få förutsättningen att förbereda sig inför framtida studier, utan att behöva vänta till kursstart eller känna någon som gått kursen.
      </Paragraph>
      <CalloutWarning classes="my-6">
        kurs.pm är i första hand en hemsida för att <b>samla</b> (och i mindre omfattning, <b>arkivera</b>) innehåll som berör högskolekurser. Formatet är mer likt Wikipedia med begränsad "kamratgranskning", så var uppmärksam för eventuella fel.
      </CalloutWarning>
      
      <Heading>Hederskodex</Heading>

      <Paragraph>
        Vi är alla studenter som försöker hjälpas åt för att ta oss igenom utbildningen, och det är bara bra om fler vill dela sina anteckningar. Däremot behöver vi respektera utbildningens integritet och inte dela material som kan underminera detta. <Highlight>kurs.pm kommer inte tillhandahålla färdiga lösningar på examinerade moment</Highlight> (t ex datorlaborationer).
      </Paragraph>

      <Paragraph>
        Allmänna handlingar (t ex gamla tentor och deras lösningsförslag) är dock free game.
      </Paragraph>

      <Heading>Inspiration</Heading>
    
      <Paragraph>
        Tack till <OutLink href="https://kthmatte.web.app/">kthmatte</OutLink> och <OutLink href="https://ludu.co/">Ludu</OutLink> som har inspirerat hemsidans filosofi: "rak på sak"-sammanfattningar av hela kurser.
      </Paragraph>

      <Paragraph>
        Designen av hela hemsidan är nästan en direkt kopia av <OutLink href="https://four.lol">FOUR</OutLink>.
      </Paragraph>
    </main>
    <Toc />
  </div>
</div>
