<!-- src/routes/forum/[path]/+page.svelte -->
<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  <article>
    <h1>{data.title}</h1>
    <svelte:component this={data.content} />
  </article>
  