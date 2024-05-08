import React from "react";
import { Input } from "../components/Input";
import { BackButton } from "../components/BackButton";
import { StepVariant } from "../constants/StepValriants";

export const SourceCreditCardPage = ({
  handleValue,
  getStepValue,
  registerInput,
  step,
  onNextStep,
  onPrevStep,
}) => {
  const values = getStepValue(StepVariant.Source);
  return (
    <section>
      <div className="app-form">
        <div className="form-group">
          <Input label="Cvv2" {...registerInput("cvv2")} />
        </div>
        <div className="form-group">
          <div className="group-2">
            <div>
              <Input label="ماه" {...registerInput("month")} />
            </div>
            <div>
              <Input label="سال" {...registerInput("year")} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <Input
            type="password"
            label="رمز پیامکی"
            {...registerInput("dynamicPassword")}
          />
        </div>
        <div className="form-group">
          <div className="group-2">
            <div>
              {values.timer !== null ? (
                <span>{values.timer} ثانیه باقی مانده</span>
              ) : null}
            </div>
            <div>
              <button
                onClick={() => handleValue("timer", 120)}
                className="app-button re-send"
              >
                زمر پیامکی جدید
              </button>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}> </div>
        <div className="form-group">
          <BackButton onClick={onPrevStep} />
          <button onClick={onNextStep} className="app-button">
            پرداخت وجه
          </button>
        </div>
      </div>
    </section>
  );
};
