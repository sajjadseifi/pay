import React from "react";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";

export const SourceCreditCardPage = () => {
  return (
    <section>
      <form className="app-form">
        <div className="form-group">
          <Input label="کارت مبدا" />
        </div>
        <div className="form-group">
          <div className="group-2">
            <div>
              <Input label="ماه" />
            </div>
            <div>
              <Input label="سال" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <Input label="Cvv2" />ّ
        </div>
        <div style={{ flex: 1 }}> </div>
        <div className="form-group">
          <Link to="/confirm">
            <button className="app-button">پرداخت وجه</button>
          </Link>
        </div>
      </form>
    </section>
  );
};
