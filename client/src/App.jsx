// import Routespath from "./Routes/Routespath";
import { StateContext } from "./config/store";
import { Toaster } from "react-hot-toast";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Suspense, lazy } from "react";
import Loader from "./utils/Loader";
const Routes = lazy(() => import("./routes/Routespath"));

function Load() {
  return (
    <div className="d-flex vh-100 justify-content-center">
      <Loader title="Welcome to Shop" />
    </div>
  )
}



function App() {
  return (
    <StateContext>
      <PayPalScriptProvider deferLoading={true}>
        <Toaster />
        <Suspense fallback={<Load/>}>
          <Routes />
        </Suspense>
      </PayPalScriptProvider>
    </StateContext>
  );
}

export default App