import React from "react";
import { StepVariant } from "../constants/StepValriants";
import { FactorRow } from "../components/FactorRow";

export const ReportTransport = ({ getStepValue, step }) => {
  const target = getStepValue(StepVariant.Target);
  return (
    <div>
      <FactorRow title="شماره کارت مبدا">{target.sourceCredit}</FactorRow>
      <FactorRow title="شماره کارت مقصد">{target.targetCredit}</FactorRow>
      <FactorRow title="مبلغ انتقال">{target.price} ریال</FactorRow>
    </div>
  );
};
