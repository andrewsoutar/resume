<script type=ts>
 export let name: string;
 export let block: any;
 export let data: any;

 import SectionHeader from './SectionHeader.svelte';
</script>

<style>
 section {
   margin-top: 0.5em;
 }
</style>

<SectionHeader>{name}</SectionHeader>
{#each data as el}
  <section>
    <svelte:component this={block} data={el}/>
  </section>
{/each}
