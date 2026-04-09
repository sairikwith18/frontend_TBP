import { useState, useRef, useCallback } from 'react';
import {
  Upload,
  FileText,
  FileCheck,
  ChevronDown,
  ArrowRight,
  X,
  Loader2,
  Copy,
  Download,
  CheckCheck,
  FileSearch,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

const LANGUAGES = [
  { code: 'hi', label: 'Hindi' },
  { code: 'bn', label: 'Bengali' },
  { code: 'te', label: 'Telugu' },
  { code: 'mr', label: 'Marathi' },
  { code: 'ta', label: 'Tamil' },
  { code: 'ur', label: 'Urdu' },
  { code: 'gu', label: 'Gujarati' },
  { code: 'kn', label: 'Kannada' },
  { code: 'ml', label: 'Malayalam' },
  { code: 'pa', label: 'Punjabi' },
  { code: 'or', label: 'Odia' },
  { code: 'as', label: 'Assamese' },
  { code: 'sa', label: 'Sanskrit' },
  { code: 'ne', label: 'Nepali' },
  { code: 'sd', label: 'Sindhi' },
  { code: 'ks', label: 'Kashmiri' },
  { code: 'doi', label: 'Dogri' },
  { code: 'mai', label: 'Maithili' },
  { code: 'sat', label: 'Santali' },
  { code: 'kok', label: 'Konkani' },
  { code: 'mni', label: 'Manipuri' },
  { code: 'brx', label: 'Bodo' },
];

type TranslationStatus = 'idle' | 'processing' | 'done' | 'error';

export default function DocumentTranslationPage() {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [targetLang, setTargetLang] = useState('hi');
  const [status, setStatus] = useState<TranslationStatus>('idle');
  const [translatedText, setTranslatedText] = useState('');
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    const allowed = ['text/plain', 'application/pdf', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(f.type) && !f.name.match(/\.(txt|pdf|doc|docx)$/i)) return;
    setFile(f);
    setStatus('idle');
    setTranslatedText('');
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleFile(dropped);
  }, [handleFile]);

  const handleTranslate = async () => {
    if (!file) return;
    setStatus('processing');
    setTranslatedText('');

    await new Promise((r) => setTimeout(r, 2200));

    const langLabel = LANGUAGES.find((l) => l.code === targetLang)?.label ?? 'Hindi';
    setTranslatedText(
      `यह एक नमूना अनुवाद है जो SafeHorizon AI इंजन द्वारा "${file.name}" से ${langLabel} में प्रस्तुत किया गया है।\n\nलॉरेम इप्सम डोलर सिट अमेट, कंसेक्टेटर एडिपिसिंग एलिट। सेड डू एइउस्मोड टेम्पोर इंसिडिडुंट उट लेबोर एट डोलोर मैग्ना अलीकुआ। उट एनिम एड मिनिम वेनियम, क्विस नोस्ट्रड एक्सरसिटेशन उलैम्को लेबोरिस।\n\nडुइस ऑटे इरुरे डोलर इन रेप्रेहेंडेरिट इन वोलुप्टेट वेलिट एस्से सिलम डोलोर एउ फ्यूजिएट नुल्ला पैरियाटुर।`
    );
    setStatus('done');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="min-h-screen px-4 py-10" style={{ background: '#f4f4f9' }}>
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3" style={{ background: 'rgba(249,115,22,0.1)', color: '#f97316' }}>
            <Sparkles size={12} />
            AI-Powered
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#1e2a5e', fontFamily: 'Sora, sans-serif' }}>
            Document Translation
          </h1>
          <p className="text-gray-500 text-base max-w-lg">
            Upload your document and get an accurate, context-aware translation into any of 22+ Indian languages.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Left: Upload Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100" style={{ boxShadow: '0 4px 24px rgba(30,42,94,0.08)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.1)', color: '#f97316' }}>
                <Upload size={20} />
              </div>
              <div>
                <h2 className="font-bold text-lg" style={{ color: '#1e2a5e' }}>Upload Document</h2>
                <p className="text-xs text-gray-400">Select or drag your file below</p>
              </div>
            </div>

            {/* Dropzone */}
            <div
              className={`relative rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer mb-5 ${dragOver ? 'border-orange-400 scale-[1.01]' : file ? 'border-green-400' : 'border-blue-200 hover:border-orange-300'}`}
              style={{
                background: dragOver
                  ? 'rgba(249,115,22,0.04)'
                  : file
                  ? 'rgba(16,185,129,0.03)'
                  : 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)',
                minHeight: '180px',
              }}
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".txt,.pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />

              <div className="flex flex-col items-center justify-center p-8 text-center">
                {file ? (
                  <>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3" style={{ background: 'rgba(16,185,129,0.1)' }}>
                      <FileCheck size={28} className="text-emerald-500" />
                    </div>
                    <p className="font-semibold text-gray-700 text-sm mb-1 max-w-[200px] truncate">{file.name}</p>
                    <p className="text-xs text-gray-400">{formatBytes(file.size)}</p>
                    <button
                      className="mt-3 flex items-center gap-1 text-xs text-gray-400 hover:text-red-500 transition-colors"
                      onClick={(e) => { e.stopPropagation(); setFile(null); setStatus('idle'); setTranslatedText(''); }}
                    >
                      <X size={12} /> Remove file
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3" style={{ background: 'rgba(59,130,246,0.1)' }}>
                      <FileText size={28} className="text-blue-500" />
                    </div>
                    <p className="font-bold text-gray-700 text-sm mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Supports .TXT, .PDF, .DOC, .DOCX
                      <br />
                      Max file size: 50 MB
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Language Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#1e2a5e' }}>
                Target Language
              </label>
              <div className="relative">
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="w-full appearance-none rounded-xl border px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:ring-2 transition-all duration-200"
                  style={{
                    borderColor: '#e2e8f0',
                    color: '#1e2a5e',
                    background: '#f8fafc',
                    focusRingColor: '#f97316',
                  }}
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>{l.label}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Translate Button */}
            <button
              onClick={handleTranslate}
              disabled={!file || status === 'processing'}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] hover:shadow-lg active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #f97316, #ea580c)',
                color: '#fff',
                boxShadow: file ? '0 4px 16px rgba(249,115,22,0.35)' : 'none',
              }}
            >
              {status === 'processing' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Translating...
                </>
              ) : (
                <>
                  Translate Document
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>

          {/* Right: Results Panel */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col" style={{ boxShadow: '0 4px 24px rgba(30,42,94,0.08)', minHeight: '520px' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(30,42,94,0.08)', color: '#1e2a5e' }}>
                  <FileSearch size={20} />
                </div>
                <div>
                  <h2 className="font-bold text-lg" style={{ color: '#1e2a5e' }}>Translation Results</h2>
                  <p className="text-xs text-gray-400">
                    {status === 'done'
                      ? `Translated to ${LANGUAGES.find((l) => l.code === targetLang)?.label}`
                      : 'Awaiting document'}
                  </p>
                </div>
              </div>

              {status === 'done' && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-200 hover:bg-gray-50"
                    style={{ borderColor: '#e2e8f0', color: '#4b5563' }}
                  >
                    {copied ? <CheckCheck size={13} className="text-emerald-500" /> : <Copy size={13} />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                  <button
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-200 hover:bg-orange-50"
                    style={{ borderColor: 'rgba(249,115,22,0.3)', color: '#f97316' }}
                  >
                    <Download size={13} />
                    Export
                  </button>
                </div>
              )}
            </div>

            {/* Result Content */}
            <div className="flex-1 flex flex-col">
              {status === 'idle' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5" style={{ background: '#f1f5f9' }}>
                    <FileText size={36} className="text-gray-300" />
                  </div>
                  <h3 className="font-bold text-gray-400 text-lg mb-2">Ready for Translation</h3>
                  <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
                    Upload your document above to see professional translation results here.
                  </p>
                </div>
              )}

              {status === 'processing' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                  <div className="relative w-20 h-20 mb-5">
                    <div className="absolute inset-0 rounded-full border-4 border-orange-100" />
                    <div className="absolute inset-0 rounded-full border-4 border-t-orange-400 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sparkles size={22} style={{ color: '#f97316' }} />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-600 text-base mb-2">AI is working...</h3>
                  <p className="text-sm text-gray-400">Analyzing document and translating content</p>
                  <div className="mt-5 flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{ background: '#f97316', animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {status === 'done' && translatedText && (
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold" style={{ background: 'rgba(16,185,129,0.08)', color: '#059669' }}>
                    <CheckCheck size={13} />
                    Translation complete · 99.1% confidence score
                  </div>
                  <div
                    className="flex-1 rounded-xl p-5 text-sm leading-relaxed text-gray-700 overflow-y-auto whitespace-pre-wrap"
                    style={{ background: '#f8fafc', border: '1px solid #e2e8f0', minHeight: '280px', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {translatedText}
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'rgba(239,68,68,0.08)' }}>
                    <AlertCircle size={28} className="text-red-400" />
                  </div>
                  <h3 className="font-bold text-gray-600 mb-2">Translation Failed</h3>
                  <p className="text-sm text-gray-400">Please try again or check your file format.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tips Row */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: <FileText size={15} />, title: 'Format Preserved', desc: 'Headings, lists, and tables are maintained after translation.' },
            { icon: <Sparkles size={15} />, title: 'Context-Aware', desc: 'AI understands domain-specific terminology for accurate results.' },
            { icon: <Download size={15} />, title: 'Easy Export', desc: 'Download translated content in the same format as the original.' },
          ].map((tip, i) => (
            <div key={i} className="bg-white rounded-xl p-4 flex items-start gap-3 border border-gray-100" style={{ boxShadow: '0 2px 8px rgba(30,42,94,0.05)' }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(249,115,22,0.1)', color: '#f97316' }}>
                {tip.icon}
              </div>
              <div>
                <p className="text-xs font-bold mb-0.5" style={{ color: '#1e2a5e' }}>{tip.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
