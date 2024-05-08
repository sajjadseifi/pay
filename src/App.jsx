import "./App.css";
import { TransportLayout } from "./layouts/TransportLayout";
import { useEffect, useState } from "react";
import { StepVariant } from "./constants/StepValriants";
import { TargetCredit } from "./features/TargetCredit";
import { SourceCredit } from "./features/SourceCredit";
import { ReportTransport } from "./features/ReportTransport";

const steps = [TargetCredit, SourceCredit, ReportTransport];

function App() {
  const [stepsForm, setStepsForm] = useState([
    { sourceCredit: "", targetCredit: "", price: "" },
    { cvv2: "", month: "", year: "", dynamicPassword: "", timer: null },
    {},
  ]);
  const [step, setStep] = useState(0);

  const onNextStep = () => {
    // Q1 پیاده سازی تابع حرکت به صفحه بعدی
    if (step < steps.length - 1) setStep((s) => s + 1);
  };

  const onPrevStep = () => {
    // Q2 پیاده سازی تابع حرکت به صفحه قبلی
    if (step > 0) setStep((s) => s - 1);
  };

  const getStepValue = (step) => {
    return stepsForm[step];
  };

  const handleStepValue = (step, name, value) => {
    // Q4 نوشتن بروزرسانی یک مقدار در استیت در هر فرم
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
    // پیاده سازی تابع مدیریت یک فیلد رشته ای با استفاده از تابع handleStepValue
    const onChange = (e) => {
      handleStepValue(step, name, e.target.value);
    };

    const value = stepsForm[step][name];
    return {
      onChange,
      value,
    };
  };

  const generateDynamicPassword = () => "123321";

  useEffect(() => {
    // پس از کلیک شدن بر روی دکمه بازیابی رمز مجدد اتومایتک یک رمز بر روی فیلد ست میشود
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
    // یک سوال برای مدیریت تایمر رمز یک بار مصرف
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
