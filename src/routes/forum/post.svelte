<script>
  // @ts-nocheck
  export let title;
  export let date;
  export let description;
</script>

<article>
  <h1>{title}</h1>

  <p>Published: {date}</p>

  <p>Description: {description}</p>

  <slot />
</article>
