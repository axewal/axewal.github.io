<script>
  // @ts-nocheck
  export let user;
  export let date;
  export let message;
</script>

<article>
  <h1>{user}</h1>
  <p>{message}</p>
  <p>{date}</p>

  <slot />
</article>
