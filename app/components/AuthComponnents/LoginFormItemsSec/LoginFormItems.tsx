import Link from 'next/link'
import styles from './loginFormItems.module.css'

export default function LoginFormItems() {
  return (
    <div className={styles.registerFormItems__handler}>
    <h1 className="text-3xl font-bold mb-6">Welcome Back!</h1>
    <form className="space-y-4 w-full max-w-sm">
        <div>
            <label htmlFor="email" className="block text-gray-700">
                Email
            </label>
            <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
        </div>
        
        <div>
            <label htmlFor="password" className="block text-gray-700">
                Password
            </label>
            <input
                type="password"
                id="password"
                className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
        </div>
        <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
        >
        Log In
        </button>
    </form>
    <p className="mt-4 text-gray-600">
            Don’t have an account?.{" "}
        <Link href="/auth/register" className="text-purple-700 hover:underline">
            Sign Up.
        </Link>
    </p>
</div>
  )
}
