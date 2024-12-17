import { AuthForm } from '@/components/auth/AuthForm'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { tab?: 'signin' | 'signup' }
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-8 p-8">
        <h2 className="text-center text-3xl font-bold">
          {searchParams.tab === 'signup' ? 'Create an account' : 'Sign in to your account'}
        </h2>
        <AuthForm defaultTab={searchParams.tab || 'signin'} />
      </div>
    </div>
  )
} 