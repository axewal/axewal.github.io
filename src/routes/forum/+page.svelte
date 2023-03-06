<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<article>
  <h1>Forum</h1>
  
  <ul>
    {#each data.posts as post}
      <li>
        <h2>
          <a href={"/forum/" + post.path}>
            {post.meta.title}
          </a>
        </h2>
        {post.meta.date}
      </li>
    {/each}
  </ul>
</article>
