import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8 md:p-10">
      <LoginHeader />

      <LoginForm />
    </div>
  );
}