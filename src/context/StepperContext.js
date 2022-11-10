import React, { useState, createContext } from "react";

export const StepperContext = createContext();

export const StepperProvider = (props) => {
  const [page, setPage] = useState(0);
  const [stepInfo, setStepInfo] = useState({
    agreement: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
    addProduct: {
      name: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    },
  });

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const handleChange = (prop) => (event) => {
    setStepInfo({ ...stepInfo, [prop]: event.target.value });
  };

  const setSenderInfo = (prop) => (event) => {
    setStepInfo({
      ...stepInfo,
      sender: { ...stepInfo.sender, [prop]: event.target.value }
    });
  };
  const setRecevierInfo = (prop) => (event) => {
    setStepInfo({
      ...stepInfo,
      recevier: { ...stepInfo.recevier, [prop]: event.target.value }
    });
  };
  const steps = [
    { title: "Register agreement" },
    { title: "Add product" },
    { title: "Add escalations" },
    { title: "Add services" },
    { title: "Forcast generation" },
    { title: "Review" }
  ];

  return (
    <StepperContext.Provider
      value={{
        page,
        steps,
        nextPage,
        prevPage,
        stepInfo,
        handleChange,
        setSenderInfo,
        setRecevierInfo
      }}
    >
      {props.children}
    </StepperContext.Provider>
  );
};
