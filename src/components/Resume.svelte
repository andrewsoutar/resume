
<script type=ts>
 import ResumeSection from './ResumeSection.svelte';

 export let data: any;

 $: shownEntries = data.entries.filter(({ hidden = false}) => !hidden);
</script>

<style>
 div {
   width: 100%;
 }
</style>

<div>
  <ResumeSection name=Education data={shownEntries.filter(({type: tp}) => tp === "education")}/>
</div>
