import Head from "next/head";

const Layout = (props) => {
  let { children, title, nav, description } = props;

  return (
    <React.Fragment>
      <Head>
        <title>{title ? title : "TRACKER"}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={description || "project tracking app"}
        />
      </Head>
      {children}
    </React.Fragment>
  );
};

export default Layout;
