import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { StaticRouter } from "react-router-dom";

export function render(url: string) {
     const helmetContext: any = {};
     const html = renderToString(
          <HelmetProvider context={helmetContext}>
               <StaticRouter location={url}>
                    <App />
               </StaticRouter>
          </HelmetProvider>
     );

     // Agar keyin <Helmet> dan meta/title olishni xohlasangiz:
     // const { helmet } = helmetContext;
     // va index.html ichida <title> va bosh meta’larni helmet’dan qo‘yish mumkin

     return html;
}
