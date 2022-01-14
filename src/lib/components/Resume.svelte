<script lang="ts">
  import type { Entry, Resume } from "$lib/types.js";
  import ResumeSection from "./ResumeSection.svelte";
  import EducationBlock from "./EducationBlock.svelte";
  import ExperienceBlock from "./ExperienceBlock.svelte";
  import SkillsSection from "./SkillsSection.svelte";

  import {
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    PhoneIcon
  } from "svelte-feather-icons";

  export let data: Resume;

  $: shownEntries = data.entries.filter(({ hidden = false }) => !hidden);
  $: entriesByType = <T extends string>(
    ...types: T[]
  ): (Entry & { type: T })[] =>
    shownEntries.filter(({ type: tp }) =>
      (types as readonly string[]).includes(tp)
    ) as (Entry & { type: T })[];
</script>

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
  }
  h1 {
    font-size: 170%;
    font-weight: normal;
  }
  h1::before {
    content: "{";
  }
  h1::after {
    content: "}";
  }
  h1::before,
  h1::after {
    font-weight: lighter;
    font-size: 110%;
    color: #c0c0c0;
  }
  a {
    text-decoration: none;
  }
  address {
    display: flex;
    flex-wrap: wrap;
    font-style: normal;
    box-sizing: border-box;
    width: 80%;
  }
  address > * {
    min-width: max-content;
    flex: 1;
    text-align: center;
    margin: 0;
    padding: 0 1.5em;
  }
  address :global(.icon) {
    height: 100%;
    box-sizing: border-box;
    vertical-align: text-bottom;
  }
  section {
    width: 100%;
    margin-top: 0.8em;
  }
</style>

<header>
  <h1>
    <a href={data.personal.website} target="_blank" rel="author">
      {data.personal.name}
    </a>
  </h1>
  <address>
    {#if data.personal.phone}
      <a href="tel:{data.personal.phone.replace(/[^\d]/g, '')}" target="_blank">
        <PhoneIcon size="1x" class="icon" />
        {data.personal.phone}
      </a>
    {/if}
    {#if data.personal.email}
      <a href="mailto:{data.personal.email}" target="_blank">
        <MailIcon size="1x" class="icon" />
        {data.personal.email}
      </a>
    {/if}
    {#if data.personal.github}
      <a href="https://github.com/{data.personal.github}" target="_blank">
        <GithubIcon size="1x" class="icon" />
        {data.personal.github}
      </a>
    {/if}
    {#if data.personal.linkedin}
      <a
        href="https://linkedin.com/in/{data.personal.linkedin}"
        target="_blank"
      >
        <LinkedinIcon size="1x" class="icon" />
        {data.personal.linkedin}
      </a>
    {/if}
  </address>
</header>

<section>
  <ResumeSection
    name="Education"
    block={EducationBlock}
    data={entriesByType("education")}
  />
</section>
<section>
  <ResumeSection
    name="Competitions/Work Experience"
    block={ExperienceBlock}
    data={entriesByType("experience", "competition")}
  />
</section>
<section class="skills">
  <SkillsSection
    projects={entriesByType("project")}
    technologies={entriesByType("skill")}
    courses={entriesByType("education").flatMap((x) => x.courses || [])}
  />
</section>
