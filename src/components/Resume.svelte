<script type=ts>
 import ResumeSection from './ResumeSection.svelte';
 import EducationBlock from './EducationBlock.svelte';
 import ExperienceBlock from './ExperienceBlock.svelte';
 import SkillsSection from './SkillsSection.svelte';

 export let data: any;

 $: shownEntries = data.entries.filter(({hidden = false}) => !hidden);
 $: entriesByType = (...types) => shownEntries.filter(({type: tp}) => types.includes(tp))
</script>

<style>
 header {
   display: flex;
   flex-direction: column;
   align-items: center;
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
 h1::before, h1::after {
   font-weight: lighter;
   font-size: 110%;
   color: #c0c0c0;
 }
 a {
   text-decoration: none;
 }
 address {
   font-style: normal;
 }
 section {
   width: 100%;
   margin-top: 0.8em;
 }
</style>

<header>
  <h1><a href={data.personal.website} rel=author>{data.personal.name}</a></h1>
  <div>
    <a href=tel:{data.personal.phone.replace(/[^\d]/g, "")}>
      {data.personal.phone}
    </a>
  </div>
  <address><a href=mailto:{data.personal.email}>{data.personal.email}</a></address>
</header>

<section>
  <ResumeSection name=Education block={EducationBlock}
                      data={entriesByType("education")}/>
</section>
<section>
  <ResumeSection name="Competitions/Work Experience" block={ExperienceBlock}
                 data={entriesByType("experience", "competition")}/>
</section>
<section class=skills>
  <SkillsSection projects={entriesByType("project")}
                 technologies={entriesByType("skill")}
                 courses={entriesByType("education").flatMap(x=>x.courses || [])}/>
</section>
