import { Layout } from "components/layout/Layout";
import "css/animations.css";
import "css/application.css";
import "css/theme.css";
import { router } from "libs/react-router-dom";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
