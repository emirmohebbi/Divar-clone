import { sendOtp } from "../../services/auth";

function SendOTPFrom({ mobile, setMobile, setStep }) {
  const submitHandeler = async (event) => {
    event.preventDefault()
    if (mobile.length !== 11) return; 

    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    
    if (error) console.log(error.response.data.message);
  };
  return (
    <form onSubmit={submitHandeler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید.کد
        تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">لطفا شماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
         value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOTPFrom;
