import Head from "next/head";

import Alert from "./Alert";

import UserState from "../../context/user/UserState";
import AlertState from "../../context/alert/AlertState";

const Layout = (props) => {
  let { children, title, nav, description } = props;

  return (
    <UserState>
      <AlertState>
        <Head>
          <title>{title ? title : "Tracker"}</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content={description || "project tracking app"}
          />
          <link rel="shortcut icon" href="/images/icon.png" />
        </Head>
        <Alert />
        {children}
      </AlertState>
    </UserState>
  );
};

export default Layout;
