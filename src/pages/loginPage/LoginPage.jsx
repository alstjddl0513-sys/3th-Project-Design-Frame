import React, { useState, useEffect, useRef } from 'react';
import { Eye, EyeOff, Sun, Moon } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const canvasRef = useRef(null);

  // Email validation
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(value ? validateEmail(value) : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    if (email && password && validateEmail(email)) {
      console.log('로그인 시도:', { email, password, rememberMe });
    }
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Canvas Particles 효과
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = isDarkMode
          ? 'rgba(255, 255, 255, 0.15)'
          : 'rgba(0, 0, 100, 0.1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const particles = Array.from({ length: 80 }, () => new Particle());
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center p-4 transition-colors duration-500 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <button
        onClick={toggleDarkMode}
        className={`absolute top-6 right-6 p-3 rounded-full transition-all duration-300 shadow-lg ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
      >
        {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
      </button>

      <div
        className={`relative w-full max-w-md p-8 rounded-3xl shadow-2xl backdrop-blur-md transition-all duration-500 border ${isDarkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-white/80 border-white text-slate-800'}`}
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Welcome
          </h1>
          <p className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>
            Please sign in to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              placeholder=" "
              className={`w-full px-4 py-3 rounded-xl border bg-transparent outline-none transition-all peer ${!isEmailValid && email ? 'border-red-500' : 'border-slate-300 focus:border-indigo-500'} ${isDarkMode ? 'border-slate-600 focus:border-indigo-400' : ''}`}
            />
            <label className="absolute left-4 top-3 text-slate-400 transition-all pointer-events-none peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-500 peer-focus:bg-inherit px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs">
              Email Address
            </label>
            {!isEmailValid && email && (
              <span className="text-xs text-red-500 mt-1 block">
                Please enter a valid email
              </span>
            )}
          </div>

          <div className="relative group">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=" "
              className={`w-full px-4 py-3 rounded-xl border bg-transparent outline-none transition-all peer border-slate-300 focus:border-indigo-500 ${isDarkMode ? 'border-slate-600 focus:border-indigo-400' : ''}`}
            />
            <label className="absolute left-4 top-3 text-slate-400 transition-all pointer-events-none peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-500 peer-focus:bg-inherit px-1 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs">
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-slate-400 hover:text-indigo-500 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="sr-only"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <div
                className={`w-5 h-5 border-2 rounded transition-all ${rememberMe ? 'bg-indigo-500 border-indigo-500' : 'border-slate-300'}`}
              >
                {rememberMe && (
                  <div className="text-white text-[10px] text-center">✓</div>
                )}
              </div>
              <span className="ml-2 text-slate-500 group-hover:text-indigo-500 transition-colors">
                Remember me
              </span>
            </label>
            <a href="#" className="text-indigo-500 hover:underline font-medium">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isFormSubmitted && (!email || !password || !isEmailValid)}
            className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg shadow-lg hover:bg-indigo-700 hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign In
          </button>
        </form>

        {/* 소셜 로그인 - 구글, 네이버, 카카오 추가 */}
        <div className="mt-8">
          <div className="relative flex items-center justify-center mb-6">
            <div
              className={`w-full border-t ${isDarkMode ? 'border-slate-700' : 'border-slate-200'}`}
            ></div>
            <span
              className={`absolute px-4 text-sm ${isDarkMode ? 'bg-slate-800 text-slate-500' : 'bg-white text-slate-400'}`}
            >
              or continue with
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {/* 구글 */}
            <button className="flex items-center justify-center p-3 rounded-xl border border-transparent bg-[#d0cfc6] hover:bg-[#bbe0e6] transition-all hover:scale-105 active:scale-95 text-[#191919] font-bold text-xs">
              Google
            </button>
            {/* 네이버 */}
            <button className="flex items-center justify-center p-3 rounded-xl border border-transparent bg-[#03C75A] hover:bg-[#02b351] transition-all hover:scale-105 active:scale-95 text-white font-bold text-xs">
              Naver
            </button>
            {/* 카카오 */}
            <button className="flex items-center justify-center p-3 rounded-xl border border-transparent bg-[#FEE500] hover:bg-[#fada00] transition-all hover:scale-105 active:scale-95 text-[#191919] font-bold text-xs">
              Kakao
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-slate-500">
          Don't have an account?{' '}
          <a href="#" className="text-indigo-500 font-bold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
