import { useRoutes } from "react-router-dom";
import { routes } from "./routes/router";

const App: React.FC = () => {
  const elements: React.ReactElement | null = useRoutes(routes);

  return elements || <div>Loading...</div>;
};

export default App;
