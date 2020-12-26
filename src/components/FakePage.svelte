
<style>
 div {
   height: 100vh;
   width: 100vw;
   overflow-y: scroll;
   background-color: #828689;
 }
 main {
   width: 8.5in;
   max-width: 8.5in;
   height: 11in;
   max-height: 11in;
   box-sizing: border-box;
   margin: 1em auto;
   padding: 1em 2em 1em 2em;
   display: flex;
   flex-direction: column;
   align-items: center;
   flex: 1;
   background-color: white;
   font-size: 85%;
   font-family: 'DejaVu Sans';
 }
</style>

<div>
  <main>
    <slot/>
  </main>
</div>
