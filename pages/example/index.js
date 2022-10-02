import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />

        <script src="https://cdn.jsdelivr.net/npm/jquery"></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery.terminal/js/jquery.terminal.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery.terminal/js/xml_formatting.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/jquery.terminal/css/jquery.terminal.min.css" rel="stylesheet"/>
        <link href="style.css" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/combine/npm/js-polyfills/keyboard.js,gh/jcubic/static/js/wcwidth.js"></script>
      </Head>
        <div id="term"></div>
        <script src="index.js"></script>
    </>
  );
}
