<script context="module" lang="ts">
 import type {LoadInput, LoadOutput} from "@sveltejs/kit";
 import {assets} from "$app/paths";

 export async function load({fetch}: LoadInput): Promise<LoadOutput> {
   return {
     props: {
       resume: await (await fetch(`${assets}/resume.json`)).json()
     }
   };
 }
</script>

<script lang="ts">
 import FakePage from '../components/FakePage.svelte';
 import Resume from '../components/Resume.svelte';

 export let resume : any;
</script>

<svelte:head>
  <title>Resume :: {resume.personal.name}</title>
</svelte:head>

<FakePage>
  <Resume data={resume}/>
</FakePage>
