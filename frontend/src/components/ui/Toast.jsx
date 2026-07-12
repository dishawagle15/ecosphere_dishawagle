import { CheckCircle2, X } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import ToastContext from "./toastContext.js";

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message) => {
    const id = globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
    setToasts((currentToasts) => [...currentToasts, { id, message }]);
    window.setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    }, 2800);
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-4 right-4 z-[80] space-y-3" aria-live="polite">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex min-w-72 items-center gap-3 rounded-md border border-emerald-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-lg"
          >
            <CheckCircle2 size={18} className="text-emerald-600" aria-hidden="true" />
            <span className="flex-1">{toast.message}</span>
            <button
              type="button"
              className="text-slate-400 transition hover:text-slate-700"
              onClick={() => setToasts((currentToasts) => currentToasts.filter((item) => item.id !== toast.id))}
              aria-label="Dismiss notification"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
