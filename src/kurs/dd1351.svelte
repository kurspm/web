<script>
  import { Paragraph, InlineIcon, OutLink, OutLinkButton, UList, OList, Heading, SubHeading, CalloutWarning } from '$kurs/imports';
  import { BookCheck, Handshake, Wifi } from 'lucide-svelte';
</script>

<OutLinkButton
  href="https://www.kth.se/student/kurser/kurs/DD1351"
  icon="kth">
  Officiell Kurs-PM
</OutLinkButton>

<OutLinkButton
  href="https://canvas.kth.se/courses/41696"
  icon="canvas">
  Canvasrum för HT 2023
</OutLinkButton>

<Paragraph>
  <CalloutWarning>
    Informationen på denna sida utgår från kursomgången <b>HT 2023</b>. Se upp för eventuella fel och skillnader.
  </CalloutWarning>
</Paragraph>

<Heading>Gamla uppgifter</Heading>

<Paragraph>
  Observera att labbar kan ändras eller tas bort vid ny kursomgång. Gör dem som övning, och spar lösningarna till kursstart.
</Paragraph>
<Paragraph>
  <OutLinkButton href="https://canvas.kth.se/courses/41696/pages/labbar" icon="canvas">Labblydelser för VT 2024 (längst ner på sidan)</OutLinkButton>
</Paragraph>

<Heading>Resurs</Heading>
<Paragraph>
  Alla tre labbar i kursen använder programmeringsspråket Prolog. Det är starkt rekommenderat att man installerar
  <OutLink href="https://www.swi-prolog.org/download/stable">SWI-prolog</OutLink>
  för att köra Prolog-program på sin dator.
</Paragraph>

<Heading>Plugga i förväg</Heading>

<Paragraph>
  Om du har tid så är det smart att förbereda dig inför kursen. Här är några tips på vad du kan göra:
  <UList>
    <li>Ladda ner labblydelserna och gör uppgifterna. Se upp för eventuella ändringar för din kursomgång innan du lämnar in dem.</li>
    <li>Träna på hemtal, quizzar och hemtentan genom att göra gamla uppgifter och följa läsanvisningar. Du hittar dessa i Canvasrummet.</li>
  </UList>
</Paragraph>

<Heading>Om kursen</Heading>

<Paragraph>
  Kursen är uppdelad i 6 moduler:
  <OList>
    <li>Satslogik</li>
    <li>Prolog</li>
    <li>Predikatlogik</li>
    <li>Rekursion</li>
    <li>CTL</li>
    <li>Hoare-logik</li>
  </OList>
</Paragraph>

<SubHeading><InlineIcon><BookCheck /></InlineIcon> Examination</SubHeading>

<Paragraph>
  Kursens examination består av 3 obligatoriska labbar, 6 obligatoriska quizzar och en frivillig betygshöjande hemtenta.
</Paragraph>

<Paragraph>
  Varje modul i kursen innehåller en quiz, som sker digitalt på Canvas. Till varje quiz får man begränsad tid att besvara tre frågor som ger totalt 10 poäng. Minst 6 poäng krävs för godkänt.
</Paragraph>

<Paragraph>
  Det finns 4 hemtal (frivilliga inlämningsuppgifter) som ger en bonuspoäng till motsvarande quiz i modulen. De 3 labbarna har också varsin deadline som ger en bonuspoäng på samma sätt.
</Paragraph>

<Paragraph>
  Under varje kursomgång får man två försök på varje quiz och hemtenta. Omquiz och omhemtenta sker då på vårterminen. Allra sista tillfället för att redovisa labbar är på <OutLink href="https://www.kth.se/social/group/labbvecka/">Labbveckan</OutLink> i slutet av året.
</Paragraph>

<!--<Paragraph>
  <table>
    <tr>
      <th>Område</th>
      <th>Bonuspoäng från</th>
    </tr>
    <tr>
      <td>Satslogik</td>
      <td>Hemtal 1</td>
    </tr>
    <tr>
      <td>Prolog</td>
      <td>Labb 1</td>
    </tr>
    <tr>
      <td>Predikatlogik</td>
      <td>Hemtal 2</td>
    </tr>
    <tr>
      <td>Rekursion</td>
      <td></td>
    </tr>
  </table>
</Paragraph>-->

<SubHeading><InlineIcon><Handshake /></InlineIcon> Grupparbete</SubHeading>

<Paragraph>
  Alla 3 labbar kan göras enskilt eller i par, men alla quizzar, hemtal och D-A hemtenta måste göras enskilt.
</Paragraph>

<SubHeading><InlineIcon><Wifi /></InlineIcon> Läsa på distans</SubHeading>

<Paragraph>
  Föreläsningarna är inte hybrid, men slides och gamla inspelade föreläsningar finns tillgängliga på Canvas. Alla labbar går att redovisas på Zoom, och alla quizzar och D-A hemtenta genomförs eller lämnas in via Canvas.
</Paragraph>