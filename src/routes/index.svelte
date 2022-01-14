<script context="module" lang="ts">
  import type { LoadInput, LoadOutput } from "@sveltejs/kit";
  import { assets } from "$app/paths";

  import type { Resume as ResumeType } from "$lib/types.js";

  export async function load({ fetch }: LoadInput): Promise<LoadOutput> {
    return {
      props: {
        resume: (await (
          await fetch(`${assets}/resume.json`)
        ).json()) as ResumeType
      }
    };
  }
</script>

<script lang="ts">
  import FakePage from "$lib/components/FakePage.svelte";
  import Resume from "$lib/components/Resume.svelte";

  export let resume: ResumeType;
</script>

<svelte:head>
  <title>Resume :: {resume.personal.name}</title>
</svelte:head>

<FakePage>
  <Resume data={resume} />
</FakePage>
