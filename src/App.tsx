import { router } from "application/settings/routes";
import { RouterProvider } from "react-router-dom";
import "application/css/application.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
