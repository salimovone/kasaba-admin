import { useDispatch } from "react-redux";
import Sidebar from "./containers/Sidebar";
import Router from "./routers/Router";
import Axios from "./services/Axios";
import { updateProfessions } from "./redux/data";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const initialFetch = async () => {
    try {
      await Axios("/profession/").then((res) => {
        dispatch(updateProfessions(res.data));
      });
    } catch (eror) {
      console.error(eror);
    }
  };

  useEffect(() => {
    initialFetch();
  }, []);
  return (
    <div className="App bg-ground grid grid-cols-2 relative overflow-hidden">
      <Sidebar />
      <div>
        <Router />
      </div>
    </div>
  );
}

export default App;
