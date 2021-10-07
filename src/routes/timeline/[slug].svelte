
<script context=module type=ts>
 export async function preload(page) {
   return { resume: await (await this.fetch('resume.json')).json(), ...page.params };
 }
</script>

<script type=ts>
 import Timeline from '../timeline.svelte';

 export let resume: any;
 export let slug: String;

 function getEntry() {
   const entries = resume.entries.filter(({slug: resumeSlug}) => resumeSlug === slug);
   if (entries.length < 1) {
     console.error(`Slug ${slug} not found in resume!`);
     return null;
   }
   if (entries.length !== 1)
     console.error(`Multiple entries for slug ${slug}, this should not happen`);
   return entries[0];
 }
 const entry = getEntry();
</script>

<style>
 .modal-background {
   position: fixed;
   z-index: 100;
   margin: 0;
   border: 0;
   padding: 0;
   height: 100vh;
   width: 100vw;
   overflow: none;
   background-color: rgba(211, 211, 211, 0.9);
 }
 .modal {
   box-sizing: border-box;
   height: 80vh;
   width: 1024px;
   max-width: 95vw;
   margin: 10vh auto;
   border: 0.5em solid black;
   border-radius: 1em;
   padding: 1em 1.5em;
   background-color: white;
   
 }
</style>

<div class=modal-background>
  <main class=modal>
    <header>
      <b>{entry.title || entry.degree}</b>
      {#if entry.organization || entry.school}
        &mdash {entry.organization || entry.school}
      {/if}
    </header>
    {#if entry.url}<a href={entry.url}>{entry.url}</a>{/if}
    {#if entry.points && entry.points.length}
      <ul>
        {#each entry.points as point}<li>{point}</li>{/each}
      </ul>
    {/if}
  </main>
</div>
<Timeline resume={resume}/>
