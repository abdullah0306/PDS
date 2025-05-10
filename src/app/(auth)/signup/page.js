import SignUpForm from '../../../components/auth/SignUpForm.jsx';

export const metadata = {
  title: 'Sign Up - PDS',
  description: 'Create your account',
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-between bg-gradient-to-br from-[#221641] via-[#1B1034] to-[#0F0224]">
      {/* Left side - 3D Animation */}
      <div className="w-1/2 h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/img/login_bg.png" 
            alt="Sign Up Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Inspirational Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-12">
          <p className="text-lg font-light tracking-wider mb-4">INSPIRED BY THE FUTURE:</p>
          <h1 className="text-5xl font-bold tracking-wide leading-tight">THE VISION UI DASHBOARD</h1>
        </div>
      </div>

      {/* Right side - Sign Up Form */}
      <div className="w-1/2 h-screen flex items-center justify-center px-16">
        <SignUpForm />
      </div>
    </div>
  );
}
