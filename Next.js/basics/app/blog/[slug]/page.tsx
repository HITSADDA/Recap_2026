export default function Home({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="font-bold text-xl">Blog Post: {slug}</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum suscipit quidem voluptates blanditiis at tenetur odio labore, accusantium provident obcaecati earum consequatur dolores non itaque minus, minima, velit omnis. Totam expedita molestiae iure voluptate accusamus quos a aut debitis, sunt sit quaerat deserunt.
      </p>
    </div>
  );
}