import React from "react";
import { Input } from "../components/Input";
import { StepVariant } from "../constants/StepValriants";

export const TargetCredit = ({
  handleValue,
  getStepValue,
  registerInput,
  step,
  onNextStep,
  onPrevStep,
}) => {
  const values = getStepValue(StepVariant.Target);
  return (
    <section>
      <form className="app-form">
        <div className="form-group">
          <Input
            label="کارت مبدا"
            value={values.source}
            {...registerInput("sourceCredit")}
          />
        </div>
        <div className="form-group">
          <Input
            label="کارت مقصد"
            value={values.source}
            {...registerInput("targetCredit")}
          />
        </div>
        <div className="form-group">
          <Input label="مبلغ نتقال ( ریال )" {...registerInput("price")} />
        </div>
        <div style={{ flex: 1 }}></div>
        <div className="form-group">
          <button onClick={onNextStep} className="app-button">
            تایید و ادامه
          </button>
        </div>
      </form>
    </section>
  );
};
