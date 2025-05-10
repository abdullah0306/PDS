import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Login - PDS',
  description: 'Login to your account',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-between bg-gradient-to-br from-[#221641] via-[#1B1034] to-[#0F0224]">
      {/* Left side - 3D Animation */}
      <div className="w-1/2 h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/img/login_bg.png" 
            alt="Login Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Floating Ball */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-48 h-48 animate-float">
            <img 
              src="/img/login_bg-ball.png" 
              alt="Floating Ball" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-1/2 h-screen flex items-center justify-center px-16">
        <LoginForm />
      </div>
    </div>
  );
}
