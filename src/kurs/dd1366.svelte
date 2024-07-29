<script>
  import { Paragraph, InlineIcon, OutLink, OutLinkButton, UList, OList, Heading, SubHeading, CalloutWarning } from '$kurs/imports';
  import { BookCheck, Handshake, Wifi } from 'lucide-svelte';
</script>

<OutLinkButton
  href="https://www.kth.se/student/kurser/kurs/DD1366"
  icon="kth">
  Officiell Kurs-PM
</OutLinkButton>

<OutLinkButton
  href="https://canvas.kth.se/courses/45351"
  icon="canvas">
  Canvasrum för VT 2024
</OutLinkButton>

<Paragraph>
  <CalloutWarning>
    Informationen på denna sida utgår från kursomgången <b>VT 2024</b>. Se upp för eventuella fel och skillnader.
  </CalloutWarning>
</Paragraph>

<Heading>Gamla uppgifter</Heading>

<Paragraph>
  Observera att labbar kan ändras eller tas bort vid ny kursomgång. Gör dem som övning, och spar lösningarna till kursstart.
</Paragraph>
<Paragraph>
  <OutLinkButton href="https://canvas.kth.se/courses/45351/files/7892286" icon="canvas">Labbhäftet för VT 2024</OutLinkButton>
</Paragraph>

<Heading>Resurs</Heading>
<Paragraph>
  Kursens Canvasrum har väldigt bra resurser. Bortsett från det som finns på Canvas, för <b>funktionell programmering</b> rekommenderas boken:<br>
  <OutLinkButton href="https://archive.is/qvoOT" icon="http://s3.amazonaws.com/lyah/favicon.png">Learn You a Haskell For Great Good! (Arkiverad länk)</OutLinkButton>
</Paragraph>
<Paragraph>
  För labb <b>S1</b> kan du använda <OutLink href="https://regexone.com/">RegexOne</OutLink> för att lära dig regex, och <OutLink href="https://regex101.com/">regex101</OutLink> för att debugga din regex.
</Paragraph>

<Heading>Plugga i förväg</Heading>

<Paragraph>
  Om du har tid så är det smart att förbereda dig inför kursen. Här är några tips på vad du kan göra:
  <UList>
    <li>Innan du sätter igång, läs <OutLink href="https://canvas.kth.se/courses/45351">9 råd för att klara kursen</OutLink> (längst ner på sidan).</li>
    <li>Ladda ner labbhäftet och gör uppgifterna. Se upp för eventuella ändringar för din kursomgång innan du lämnar in dem.</li>
    <li>Träna på mästarprov genom att göra gamla uppgifter och följa läsanvisningar. Du hittar dessa under "Moduler" och "Kursöversikt" i Canvasrummet.</li>
  </UList>
</Paragraph>

<Heading>Om kursen</Heading>

<Paragraph>
  Kursen är uppdelad i 4 moduler:
  <OList>
    <li>Funktionell programmering (F)</li>
    <li>Paradigm (X)</li>
    <li>Syntax (S)</li>
    <li>Webbprogrammering (W)</li>
  </OList>
</Paragraph>

<SubHeading><InlineIcon><BookCheck /></InlineIcon> Examination</SubHeading>

<Paragraph>
  Kursens examination består av 9 datorlabbar och 3 mästarprov. Bland dessa labbar är <b>F2</b>, <b>S1</b>, <b>S2</b> och <b>W1</b> obligatoriska, medan <b>F3</b>, <b>S3</b>, <b>X1</b> och <b>X2</b> är betygshöjande (+1 betygsteg per labb färdigt innan respektive deadline).
</Paragraph>

<Paragraph>
  De första tre modulerna har varsin obligatorisk mästarprov. Efter uppgifterna släpps har man 2-3 veckor på sig att lösa dem och göra en skriftlig inlämning. Sedan måste man boka en tid med en assistent/lärare för att göra en muntlig redovisning.
</Paragraph>

<Paragraph>
  I skriftliga mästarprovinlämningar får man göra högst 1 "mindre fel". Vissa labbar har också ett bonusdatum: om man blir klar med labbet innan datumet får man göra ett extra "mindre fel" på respektive mästarprov.
</Paragraph>

<Paragraph>
  Under varje kursomgång får man två försök på varje mästarprov, dock så gäller inte bonusdatumet på ommästarprovet. Allra sista tillfället för att redovisa labbar & mästarprov är på <OutLink href="https://www.kth.se/social/group/labbvecka/">Labbveckan</OutLink> i slutet av året.
</Paragraph>

<SubHeading><InlineIcon><Handshake /></InlineIcon> Grupparbete</SubHeading>

<Paragraph>
  Alla labbar kan göras enskilt eller i par, men mästarproven måste göras och presenteras enskilt.
</Paragraph>

<SubHeading><InlineIcon><Wifi /></InlineIcon> Läsa på distans</SubHeading>

<Paragraph>
  Föreläsningarna är inte hybrid, men slides och gamla inspelade föreläsningar finns tillgängliga på Canvas. Alla labbar går att redovisas på Zoom, även mästarprov om sådana redovisningstillfälle erbjuds av assistenten/läraren.
</Paragraph>