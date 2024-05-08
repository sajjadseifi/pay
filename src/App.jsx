import "./App.css";
import { TransportLayout } from "./layouts/TransportLayout";
import { SourceCreditCardPage } from "./pages/SourceCreditCardPage";
import { TargetCreditCardPage } from "./pages/TargetCreditCardPage";
import { ReportTransportPage } from "./pages/ReportTransportPage";
import { useEffect, useState } from "react";
import { StepVariant } from "./constants/StepValriants";

const steps = [TargetCreditCardPage, SourceCreditCardPage, ReportTransportPage];

function App() {
  const [stepsForm, setStepsForm] = useState([
    { sourceCredit: "", targetCredit: "", price: "" },
    { cvv2: "", month: "", year: "", dynamicPassword: "", timer: null },
    {},
  ]);
  const [step, setStep] = useState(0);

  const onNextStep = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
  };

  const onPrevStep = () => {
    if (step > 0) setStep((s) => s - 1);
  };

  const handleChange = (name) => (e) => {
    setStepsForm((prevState) => {
      return prevState.map((form, index) => {
        if (step === index) {
          return {
            ...form,
            [name]: e.target.value,
          };
        }
        return form;
      });
    });
  };

  const getStepValue = (step) => {
    return stepsForm[step];
  };

  const handleStepValue = (step, name, value) => {
    setStepsForm((prevState) => {
      return prevState.map((form, index) => {
        if (step === index) {
          return {
            ...form,
            [name]: value,
          };
        }
        return form;
      });
    });
  };

  const registerInput = (name) => {
    const onChange = (e) => {
      handleStepValue(step, e.target.name, e.target.value);
    };

    const value = stepsForm[step][name];
    return {
      onChange,
      value,
    };
  };

  const generateDynamicPassword = () => "123321";

  useEffect(() => {
    if (
      step === StepVariant.Source &&
      !stepsForm[StepVariant.Source]?.dynamicPassword &&
      !!stepsForm[StepVariant.Source]?.timer
    ) {
      const dp = generateDynamicPassword();
      handleStepValue(step, "dynamicPassword", dp);
    }
  }, [stepsForm, step]);
  useEffect(() => {
    if (step === StepVariant.Source) {
      const timerInterval = setInterval(() => {
        setStepsForm((prevState) => {
          if (prevState[StepVariant.Source].timer === null) {
            return prevState;
          }
          return prevState.map((form, index) => {
            if (StepVariant.Source === index) {
              const timer = prevState[StepVariant.Source].timer;
              return {
                ...form,
                timer: timer < 1 ? null : timer - 1,
              };
            }
            return form;
          });
        });
      }, 1000);

      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [step]);

  const CurrentStep = steps[step];

  return (
    <TransportLayout>
      <CurrentStep
        registerInput={registerInput}
        handleValue={(name, value) => handleStepValue(step, name, value)}
        getStepValue={getStepValue}
        step={step}
        onNextStep={onNextStep}
        onPrevStep={onPrevStep}
      />
    </TransportLayout>
  );
}

export default App;
