import { checkOtp } from "../../services/auth";
import { setCookie } from "../../utils/cookie";

function CheckOTPForm({ setCode, code, mobile, setStep }) {
  console.log({ mobile, code });
  const submitHandeler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);
    console.log({ response, error });
    if (response) {
      setCookie(response.data);
    }
    if (error) console.log(error.response.data.message);
  };

  return (
    <form onSubmit={submitHandeler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده به شماره«{mobile}» را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOTPForm;
