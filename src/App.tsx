import { ThemeProvider } from "@emotion/react";
import NavigationMenu from "components/navigation-menu";
import { Toaster } from "react-hot-toast";
import Routes from "routes";
import { theme } from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Toaster />
      <Routes />
      <NavigationMenu />
    </ThemeProvider>
  );
}

export default App;
