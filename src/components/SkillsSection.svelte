<script lang="ts">
 export let projects, technologies, courses;
 import SectionHeader from './SectionHeader.svelte';
</script>

<style>
 div {
   display: flex;
 }
 .projects {
   flex: 5;
 }
 .technologies {
   flex: 2;
 }

 .projects > section {
   margin-left: 2em;
 }
 .projects > section > header {
   font-size: 110%;
   font-weight: bold;
 }
 .projects > section > ul {
   margin-bottom: 1em;
   padding-left: 1em;
 }

 .technologies > ul {
   padding-left: 2em;
   margin-bottom: 1em;
 }
</style>

<SectionHeader>Skills</SectionHeader>
<div>
  <section class=projects>
    <header>
      <h3>Side Projects</h3>
    </header>
    {#each projects as {title, points = []}}
      <section>
        <header>{title}</header>
        <ul>{#each points as point}<li>{point}</li>{/each}</ul>
      </section>
    {/each}
  </section>
  <section class=technologies>
    <header>
      <h3>Coursework</h3>
    </header>
    <ul>{#each courses as course}<li>{course}</li>{/each}</ul>
    <header>
      <h3>Technologies</h3>
    </header>
    <ul>{#each technologies as {title}}<li>{title}</li>{/each}</ul>
  </section>
</div>
