import { FormProvider } from "./context/FormContext.jsx";
import Form from "./screen/Form";

function App() {


  return (
    <FormProvider>
      <div className="min-h-screen bg-linen flex justify-center md:py-8">
        <div className="w-full max-w-lg bg-parchment px-6 py-10 min-h-screen md:min-h-0 md:rounded-2xl">
          
            <Form />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
