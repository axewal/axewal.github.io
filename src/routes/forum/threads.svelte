<script>
  // @ts-nocheck
  export let user;
  export let date;
  export let thread_message;
</script>

<article>
  <h1>{user}</h1>
  <p>{thread_message}</p>
  <p>{date}</p>

  <slot />
</article>
