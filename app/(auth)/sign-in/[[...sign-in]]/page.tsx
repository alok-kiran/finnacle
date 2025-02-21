import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or sign up to continue
          </p>

          <div className="flex items-center justify-center mt-8">
            <ClerkLoaded>
              <SignIn
                path="/sign-in"
                signUpForceRedirectUrl="/sign-up"
                appearance={{
                  elements: {
                    avatarBox: {
                      height: 30,
                      width: 30,
                    },
                  },
                }}
              />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 size={32} className="animate-spin text-muted-foreground" />
            </ClerkLoading>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-full h-screen relative">
        <Image
          src="/images/home.png"
          layout="fill"
          objectFit="cover"
          alt="logo"
        />
      </div>
    </div>
  );
}
