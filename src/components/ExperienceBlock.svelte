<script type=ts>
 export let data: any;
 $: ({ organization, title, date, points = [] } = data);
</script>

<style>
 header {
   display: flex;
   padding-bottom: 0.3em;
   align-items: baseline;
 }
 span {
   flex: 1 1;
   text-align: center;
 }
 span.title {
   flex: 0 0 auto;
   order: 0;
   font-weight: bold;
 }
 span.organization {
   order: -1;
   text-align: left;
 }
 span.date {
   order: 1;
   text-align: right;
 }
</style>

<header>
  <span class=title>{title}</span>
  <span class=organization>{organization || ""}</span>
  <span class=date>{date}</span>
</header>
<ul>
  {#each points as point}
    <li>{point}</li>
  {/each}
</ul>
