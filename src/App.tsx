import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DocumentTranslationPage from './pages/DocumentTranslationPage';
import PlaceholderPage from './pages/PlaceholderPage';

type Page = 'home' | 'document' | 'audio' | 'video' | 'integration' | 'about';

const placeholderConfig: Record<string, { title: string; description: string }> = {
  audio: {
    title: 'Audio Localization',
    description:
      'Speech-to-text transcription and neural machine translation for audio files is coming soon. Upload MP3, WAV, or M4A files to get started.',
  },
  video: {
    title: 'Video Localization',
    description:
      'End-to-end video dubbing with lip-sync, subtitle generation, and multilingual caption export is under development.',
  },
  integration: {
    title: 'API Integration Hub',
    description:
      'Embed SafeHorizon directly into your LMS, CMS, or government portals via our RESTful API and webhooks.',
  },
  about: {
    title: 'About SafeHorizon',
    description:
      'SafeHorizon is built by a team of engineers and linguists for Smart India Hackathon 2025, dedicated to bridging language barriers across Bharat.',
  },
};

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ background: '#f4f4f9' }}>
      <Navbar activePage={activePage} onNavigate={navigate} />

      {activePage === 'home' && <HomePage onNavigate={navigate} />}
      {activePage === 'document' && <DocumentTranslationPage />}
      {(activePage === 'audio' || activePage === 'video' || activePage === 'integration' || activePage === 'about') && (
        <PlaceholderPage
          title={placeholderConfig[activePage].title}
          description={placeholderConfig[activePage].description}
          onBack={() => navigate('home')}
        />
      )}
    </div>
  );
}
