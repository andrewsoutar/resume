
<script context=module type=ts>
 export async function preload() {
   return { resume: await (await this.fetch('/resume.json')).json() };
 }
</script>

<script type=ts>
 import FakePage from '../components/FakePage.svelte';
 import Resume from '../components/Resume.svelte';

 export let resume : any;
</script>

<style>
</style>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<FakePage>
  <Resume data={resume}/>
</FakePage>
