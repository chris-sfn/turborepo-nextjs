import { AppProps } from "next/app";

import "@/styles/global.scss";

const App = ({ Component: PageComponent, pageProps }: AppProps) => {
  return <PageComponent {...pageProps} />;
};

export default App;
