import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src="/logo2.png"
              alt="Telcolearn Logo"
              //   width={180}
              //   height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Welcome Text */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to Telco Learn!
            </h1>
            <p className="text-muted-foreground">
              Telco Cloud labs in 5G, 4G, OpenStack and beyond. You practice. We
              take care of the rest.
            </p>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <div className="space-y-1">
              <Input type="email" placeholder="Email" className="h-12" />
            </div>

            <div className="space-y-1 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-6 w-6" />
                ) : (
                  <EyeIcon className="h-6 w-6" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-emerald-500 hover:text-emerald-600"
              >
                Forgot Password?
              </Link>
            </div>

            <Button className="w-full h-12 bg-emerald-500 hover:bg-emerald-600">
              Log in
            </Button>

            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                to="/contact"
                className="text-emerald-500 hover:text-emerald-600"
              >
                Contact Us
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Column - Illustration */}
      <div className="hidden lg:flex flex-1 bg-emerald-50 items-center justify-center p-12">
        {/* <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wY6ia767ML3Viq4hYEi7Yv3PYuE6EY.png"
          alt="Cloud Infrastructure Illustration"
          width={600}
          height={600}
          className="w-full max-w-2xl"
          priority
        /> */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wY6ia767ML3Viq4hYEi7Yv3PYuE6EY.png"
          alt="Cloud Infrastructure Illustration"
          width={600}
          height={600}
          className="w-full max-w-2xl"
        />
      </div>
    </div>
  );
}
