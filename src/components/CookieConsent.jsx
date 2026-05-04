import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent is already set
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Delay showing the banner for 10 seconds
      const timer = setTimeout(() => setIsVisible(true), 10000);
      return () => clearTimeout(timer);
    } else {
      // Re-apply explicit consent on load if true
      if (consent === "granted") {
        updateGtagConsent("granted");
      }
    }
  }, []);

  const updateGtagConsent = (status) => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
        analytics_storage: status,
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "granted");
    updateGtagConsent("granted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "denied");
    updateGtagConsent("denied");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 font-sans pointer-events-none">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto">
        <div className="flex-1 text-sm text-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Gestione dei Cookie
          </h3>
          <p className="leading-relaxed">
            Utilizziamo cookie tecnici per il funzionamento del sito e, con il
            tuo consenso, cookie di profilazione (anche di terze parti come Google)
            per misurare l'efficacia delle nostre campagne pubblicitarie.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto text-center"
          >
            Rifiuta
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition-all w-full sm:w-auto text-center"
          >
            Accetta solo necessari
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
