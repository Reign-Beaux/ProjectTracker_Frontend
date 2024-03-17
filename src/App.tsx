import { Layout } from "application/components/layout";
import "application/css/animations.css";
import "application/css/application.css";
import "application/css/theme.css";
import { router } from "application/libs/react-router-dom";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
