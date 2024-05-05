import React from "react";
import { Input } from "../components/Input";
import { Link } from "react-router-dom";

export const ConfirmTransportPage = () => {
  return (
    <section>
      <form className="app-form">
        <div className="form-group">
          <div className="card-bg" style={{ marginBottom: 10 }}>
            <h4>مبلغ انتقال 3000 تومان</h4>
            <p>واریز به حساب سجاد سیفی</p>
          </div>
        </div>
        <div className="form-group">
          <Input label="رمز پیامکی" />
        </div>
        <div className="form-group">
          <div className="group-2">
            <div>
              <span>01:45 دقیقه باقی مانده</span>
            </div>
            <div>
              <button className="app-button re-send">زمر پیامکی جدید</button>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}> </div>
        <div className="form-group">
          <Link to="/report">
            <button className="app-button">تایید و ادامه</button>
          </Link>
        </div>
      </form>
    </section>
  );
};
