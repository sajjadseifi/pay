import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { TransportLayout } from "./layouts/TransportLayout";
import { SourceCreditCardPage } from "./pages/SourceCreditCardPage";
import { TargetCreditCardPage } from "./pages/TargetCreditCardPage";
import { ReportTransportPage } from "./pages/ReportTransportPage";
import { ConfirmTransportPage } from "./pages/ConfirmTransportPage";

function App() {
  return (
    <TransportLayout>
      <Routes>
        <Route path="/target" element={<TargetCreditCardPage />} />
        <Route path="/source" element={<SourceCreditCardPage />} />
        <Route path="/confirm" element={<ConfirmTransportPage />} />
        <Route path="/report" element={<ReportTransportPage />} />
        <Route path="*" element={<Navigate to="/target" />} />
      </Routes>
    </TransportLayout>
  );
}

export default App;
