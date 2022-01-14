<script lang="ts">
  export let data: any;
  $: ({ school, degree, date } = data);
</script>

<style>
  header {
    display: flex;
    padding-bottom: 0.3em;
    align-items: baseline;
  }
  span {
    flex: 1;
    text-align: center;
  }
  span.degree {
    flex: 0 1 auto;
    order: 0;
    font-weight: bold;
  }
  span.school {
    order: -1;
    text-align: left;
  }
  span.date {
    order: 1;
    text-align: right;
  }
</style>

<header>
  <span class="degree">{degree}</span>
  <span class="school">{school}</span>
  <span class="date">{date}</span>
</header>
