import React from "react";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";

export const TargetCreditCardPage = () => {
  return (
    <section>
      <form className="app-form">
        <div className="form-group">
          <Input label="مبلغ نتقال ( ریال )" />
        </div>

        <div className="form-group">
          <Input label="کارت مقصد" />
        </div>
        <div style={{ flex: 1 }}>
          <h3>انتقال های پیشین</h3>
          <div style={{ textAlign: "center" }}>
            <p>هیچ انتقالی ثبت نشده!</p>
          </div>
        </div>
        <div className="form-group">
          <Link to="/source">
            <button className="app-button">انتخاب</button>
          </Link>
        </div>
      </form>
    </section>
  );
};
