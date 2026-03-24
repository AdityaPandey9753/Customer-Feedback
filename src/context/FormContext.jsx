import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    selectedPerfume: null,
    notesList: [],
    overallRating: 0,
    sillage: 0,
    longevity: 0,
    packaging: 0,
    noteTags: [],
    recommend: "",
    reviewText: "",
    name: "",
    email: "",
    phone: "",
    city: "",
    photo: null,
    facebook: "",
    instagram: "",
  });
  
  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateField }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
