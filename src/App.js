import React, { useContext } from "react";
import { StepperContext } from "./context/StepperContext";
import Stepper from "react-stepper-horizontal";
import Agreement from "./components/Agreement";
import AddProduct from "./components/AddProduct";
import Empty from "./components/Empty";



function App() {
  const value = useContext(StepperContext);
  return (
    <div className="main-app">
      <div className="container">
        {value.page !== 5 && (
          <Stepper steps={value.steps} activeStep={value.page} />
        )}
        {value.page === 0 && <Agreement />}
        {value.page === 1 && <AddProduct />}
        {value.page === 2 && <Empty />}
        {value.page === 3 && <Empty />}
        {value.page === 4 && <Empty />}
        {value.page === 5 && <Empty />}
      </div>
    </div>
  );
}

export default App;
