import { FC, useEffect } from "react";
import Router from "routes/Router";
import { useTranslation } from "react-i18next";

const APP_VERSION = "1.0.0";

const App: FC = () => {
  const { i18n } = useTranslation();

  const doc = document,
    docBody = doc.body;

  docBody.dir = i18n.dir();

  useEffect(() => {
    if (i18n.dir() === "rtl") {
      docBody.dir = "rtl";
      docBody.className = "fa-font-family";
      doc.title = "تست";
    } else {
      docBody.dir = "ltr";
      docBody.className = "";
      doc.title = "test";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.dir()]);

  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
