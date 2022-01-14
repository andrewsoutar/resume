<script lang="ts">
  export let name: string;

  // No good way to type these until Svelte components get type parameters
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export let block: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export let data: any;

  import SectionHeader from "./SectionHeader.svelte";
</script>

<style>
  section {
    margin-top: 0.5em;
  }
</style>

<SectionHeader>{name}</SectionHeader>
{#each data as el}
  <section>
    <svelte:component this={block} data={el} />
  </section>
{/each}
