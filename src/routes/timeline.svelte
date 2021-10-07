
<script context=module type=ts>
 export async function preload() {
   return { resume: await (await this.fetch('/resume/resume.json')).json() };
 }
</script>

<script type=ts>
 export let resume: any;
</script>

<svelte:head>
  <title>About Me</title>
</svelte:head>

<style>
 div.entry {
   position: relative;
   margin: 0.5em 2em 0.5em 15em;
   padding: 1em 1.5em;
   border: 2px solid lightgrey;
   border-radius: 1em;
   transition: background-color 0.25s ease-in-out;
 }
 div.entry:hover {
   background: lightgrey;
 }
 div.entry::before {
   content: "";
   display: block;
   position: absolute;
   left: -2em;
   top: calc(-2px - 0.5em);
   bottom: -2px;
   width: 4px;
   background: grey;
 }
 div.entry > time:first-child {
   position: absolute;
   left: -13em;
   width: 10em;
   text-align: right;
 }
 div.entry > time:first-child::after {
   content: "";
   position: absolute;
   left: 10.75em;
   width: calc(0.5em + 4px);
   height: calc(0.5em + 4px);
   border-radius: calc(0.25em + 2px);
   background: grey;
 }
 div.entry > a {
   display: block;
   margin: 0;
   border: 0;
   padding: 0;
   text-decoration: none;
 }
</style>

<div>
  {#each resume.entries.filter(({type}) => type !== "skill") as entry}
    {#if !entry.hidden}
      <div class=entry>
        {#if entry.date}
          <time>{entry.date}</time>
        {/if}
        <a {...entry.slug ? {href: `/resume/timeline/${entry.slug}`} : {}} sapper:noscroll>
          <span>
            <b>{entry.title || entry.degree}</b>
            {#if entry.organization || entry.school}
              &mdash {entry.organization || entry.school}
            {/if}
          </span>
        </a>
      </div>
    {/if}
  {/each}
</div>
