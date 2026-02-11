import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'frigotec_cookie_consent';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl md:flex md:items-center md:justify-between md:gap-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-gray-900">Preferenze cookie</p>
            <p className="text-sm text-gray-600">
              Utilizziamo cookie tecnici e di preferenza per garantire il corretto funzionamento del sito e
              memorizzare le tue scelte. Leggi la nostra{' '}
              <a href="/cookie-policy.html" className="font-medium text-frigo-main hover:text-sky-600">
                Cookie Policy
              </a>{' '}
              e la{' '}
              <a href="/privacy-policy.html" className="font-medium text-frigo-main hover:text-sky-600">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            <button
              type="button"
              onClick={handleReject}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
            >
              Rifiuta
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="rounded-lg bg-frigo-main px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-sky-600"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
