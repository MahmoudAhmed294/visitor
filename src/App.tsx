import  { useEffect } from "react";
import Routes from "./routes";
import { ClientStorage } from "utils/clientStorage";
import { useAppDispatch, useAppSelector } from "utils/hooks/useStore";
import { toggleLanguage } from "redux/languageSlice";
import Loader from "components/ui/Loader";
import { Fade } from "@mui/material";
import { getStatus } from "redux/SearchSlice";

function App() {
  const language = ClientStorage.get("language");
  const dispatch = useAppDispatch();
  const status = useAppSelector(getStatus);

  useEffect(() => {
    dispatch(toggleLanguage(language === "ar" ? "ar" : "en"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Fade
        in={status === "loading" && true}
        unmountOnExit
      >
        <div>
          <Loader />
        </div>
      </Fade>

      <Routes />
    </>
  );
}

export default App;
