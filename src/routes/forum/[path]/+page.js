
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import(`../../../lib/posts/mess/${params.path}.svx`);

  const { user,date,thread_message } = post.metadata;
  const content = post.default;

  return {
    content,
    user,
    date,
    thread_message
  };
};
