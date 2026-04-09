import {
  ArrowRight,
  Play,
  Languages,
  Zap,
  Clock,
  Shield,
  FileText,
  Mic,
  Video,
  Globe,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

type Page = 'home' | 'document' | 'audio' | 'video' | 'integration' | 'about';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const stats = [
  {
    value: '22+',
    title: 'Indian Languages',
    subtitle: 'All 22 official scheduled languages supported',
    icon: <Languages size={22} />,
  },
  {
    value: '99.2%',
    title: 'Translation Accuracy',
    subtitle: 'AI-verified quality across all language pairs',
    icon: <CheckCircle2 size={22} />,
  },
  {
    value: '< 5s',
    title: 'Processing Speed',
    subtitle: 'Real-time localization for most document types',
    icon: <Clock size={22} />,
  },
  {
    value: '3',
    title: 'Content Modalities',
    subtitle: 'Document, Audio, and Video all in one platform',
    icon: <Shield size={22} />,
  },
];

const features = [
  {
    icon: <FileText size={28} />,
    title: 'Document Translation',
    desc: 'Translate PDFs, Word documents, and plain text while preserving original formatting, structure, and layout.',
    color: '#f97316',
    page: 'document' as Page,
  },
  {
    icon: <Mic size={28} />,
    title: 'Audio Localization',
    desc: 'Speech-to-text transcription followed by neural machine translation and text-to-speech synthesis in target languages.',
    color: '#0ea5e9',
    page: 'audio' as Page,
  },
  {
    icon: <Video size={28} />,
    title: 'Video Localization',
    desc: 'End-to-end video dubbing with lip-sync technology, subtitle generation, and multilingual caption export.',
    color: '#10b981',
    page: 'video' as Page,
  },
];

const languages = [
  'Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil',
  'Urdu', 'Gujarati', 'Kannada', 'Malayalam', 'Punjabi',
  'Odia', 'Assamese', 'Sanskrit', 'Konkani', 'Manipuri',
  'Nepali', 'Sindhi', 'Kashmiri', 'Dogri', 'Maithili',
  'Santali', 'Bodo',
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen" style={{ background: '#f4f4f9' }}>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 px-4">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }} />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #1e2a5e 0%, transparent 70%)' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 mb-8 font-semibold text-sm" style={{ borderColor: '#1e2a5e', color: '#1e2a5e', background: 'rgba(30,42,94,0.04)' }}>
            <Sparkles size={15} className="text-yellow-500" />
            Smart India Hackathon 2025
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            <span style={{ color: '#1e2a5e' }}>AI-Powered Multilingual</span>
            <br />
            <span style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Content Localization Engine
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Transform educational content, government documents, and media across{' '}
            <span className="font-semibold text-gray-700">22+ Indian languages</span> using state-of-the-art AI — preserving meaning, context, and cultural nuance at scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('document')}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', boxShadow: '0 4px 20px rgba(249,115,22,0.4)' }}
            >
              Start Translating
              <ArrowRight size={18} />
            </button>
            <button
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 transition-all duration-200 hover:bg-[#1e2a5e] hover:text-white active:scale-95"
              style={{ borderColor: '#1e2a5e', color: '#1e2a5e' }}
            >
              <Play size={16} className="fill-current" />
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="px-4 pb-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border transition-all duration-300 hover:scale-105 group"
              style={{ borderColor: 'rgba(249,115,22,0.2)', boxShadow: '0 4px 24px rgba(30,42,94,0.08)' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(249,115,22,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(30,42,94,0.08)')}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300" style={{ background: 'rgba(249,115,22,0.1)', color: '#f97316' }}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-1" style={{ color: '#f97316', fontFamily: 'Sora, sans-serif' }}>
                {stat.value}
              </div>
              <div className="font-semibold mb-1 text-sm" style={{ color: '#1e2a5e' }}>{stat.title}</div>
              <div className="text-xs text-gray-400 leading-relaxed">{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(249,115,22,0.1)', color: '#f97316' }}>
            <Zap size={12} />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: '#1e2a5e' }}>
            Three Modalities, One Platform
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Whether it's a textbook, a lecture recording, or a training video — SafeHorizon handles them all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 cursor-pointer group transition-all duration-300 hover:scale-[1.02]"
              style={{ boxShadow: '0 4px 24px rgba(30,42,94,0.08)' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 32px rgba(30,42,94,0.14)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(30,42,94,0.08)')}
              onClick={() => onNavigate(f.page)}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.color}18`, color: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#1e2a5e' }}>{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{f.desc}</p>
              <div className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all duration-200" style={{ color: f.color }}>
                Get Started <ChevronRight size={15} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Language Grid Section */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100" style={{ boxShadow: '0 4px 24px rgba(30,42,94,0.08)' }}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(30,42,94,0.06)', color: '#1e2a5e' }}>
              <Globe size={12} />
              Language Coverage
            </div>
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#1e2a5e' }}>
              All 22 Scheduled Languages
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Covering every language listed in the Eighth Schedule of the Indian Constitution.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5">
            {languages.map((lang, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  borderColor: i % 3 === 0 ? 'rgba(249,115,22,0.3)' : i % 3 === 1 ? 'rgba(30,42,94,0.2)' : 'rgba(14,165,233,0.3)',
                  color: i % 3 === 0 ? '#ea580c' : i % 3 === 1 ? '#1e2a5e' : '#0369a1',
                  background: i % 3 === 0 ? 'rgba(249,115,22,0.05)' : i % 3 === 1 ? 'rgba(30,42,94,0.04)' : 'rgba(14,165,233,0.05)',
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <div
          className="rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1e2a5e 0%, #2d3d8a 100%)' }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Break Language Barriers?
            </h2>
            <p className="text-blue-200 mb-8 max-w-lg mx-auto text-base">
              Join thousands of educators and government departments already using SafeHorizon to reach every citizen.
            </p>
            <button
              onClick={() => onNavigate('document')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', color: '#fff', boxShadow: '0 4px 20px rgba(249,115,22,0.5)' }}
            >
              Start for Free
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
              <Globe size={14} className="text-white" />
            </div>
            <span className="font-bold text-sm" style={{ color: '#1e2a5e' }}>SafeHorizon</span>
          </div>
          <p className="text-xs text-gray-400 text-center">
            Built for Smart India Hackathon 2025 · AI-Powered Localization for Bharat
          </p>
          <p className="text-xs text-gray-400">© 2025 SafeHorizon</p>
        </div>
      </footer>
    </div>
  );
}
