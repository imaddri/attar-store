import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

      <LoginHeader />

      <LoginForm />

    </div>
  );
}