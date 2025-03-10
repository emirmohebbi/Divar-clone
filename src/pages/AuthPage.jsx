import React, { useState } from "react";
import SendOTPFrom from "../components/templates/SendOTPFrom";
import CheckOTPForm from "../components/templates/CheckOTPForm";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOTPFrom setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOTPForm
          code={code}
          setCode={setCode}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default AuthPage;
