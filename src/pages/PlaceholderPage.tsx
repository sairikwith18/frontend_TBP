import { Construction, ArrowLeft } from 'lucide-react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  onBack: () => void;
}

export default function PlaceholderPage({ title, description, onBack }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20" style={{ background: '#f4f4f9' }}>
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(249,115,22,0.1)' }}>
          <Construction size={36} style={{ color: '#f97316' }} />
        </div>
        <h1 className="text-2xl font-bold mb-3" style={{ color: '#1e2a5e', fontFamily: 'Sora, sans-serif' }}>
          {title}
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">{description}</p>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
          style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#fff', boxShadow: '0 4px 16px rgba(249,115,22,0.35)' }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>
    </div>
  );
}
