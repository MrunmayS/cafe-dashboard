import { Dashboard } from '@/components/Dashboard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image 
                  src="/coffee-cup.svg" 
                  alt="Café Rewards Logo" 
                  width={40} 
                  height={40}
                  className="h-10 w-10"
                />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Café Rewards Analytics</h1>
                <p className="text-sm text-gray-500">Performance metrics and customer insights</p>
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                Live Data
              </span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Dashboard />
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Café Rewards Analytics Dashboard
          </p>
        </div>
      </footer>
    </div>
  );
}
