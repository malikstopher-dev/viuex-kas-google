import React, { createContext, useContext, useState, useEffect } from 'react';
import { RFQItem, RFQContactInfo, RFQSubmission } from '../types';

interface RfqContextType {
  items: RFQItem[];
  addItem: (item: Omit<RFQItem, 'id'>) => void;
  updateItem: (id: string, updates: Partial<RFQItem>) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
  contact: RFQContactInfo;
  updateContact: (updates: Partial<RFQContactInfo>) => void;
  submissions: RFQSubmission[];
  submitRfq: () => Promise<string>;
  lastSubmittedRef: string | null;
  clearLastSubmission: () => void;
  toastMessage: string | null;
  clearToast: () => void;
}

const defaultContact: RFQContactInfo = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: 'South Africa',
  province: '',
  city: '',
  deliveryLocation: '',
  requiredDeliveryDate: '',
  generalNotes: '',
};

const RfqContext = createContext<RfqContextType | undefined>(undefined);

export const RfqProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<RFQItem[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('akglobal_rfq_items');
        if (saved) return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        id: 'item-init-1',
        description: '',
        partNumber: '',
        specification: '',
        quantity: '1',
        unit: 'Units',
        notes: '',
      },
    ];
  });

  const [contact, setContact] = useState<RFQContactInfo>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('akglobal_rfq_contact');
        if (saved) return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return defaultContact;
  });

  const [submissions, setSubmissions] = useState<RFQSubmission[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('akglobal_rfq_submissions');
        if (saved) return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [];
  });

  const [lastSubmittedRef, setLastSubmittedRef] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('akglobal_rfq_items', JSON.stringify(items));
    } catch (e) {}
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem('akglobal_rfq_contact', JSON.stringify(contact));
    } catch (e) {}
  }, [contact]);

  useEffect(() => {
    try {
      localStorage.setItem('akglobal_rfq_submissions', JSON.stringify(submissions));
    } catch (e) {}
  }, [submissions]);

  const addItem = (item: Omit<RFQItem, 'id'>) => {
    const newItem: RFQItem = {
      ...item,
      id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    };
    // Replace initial empty item if it was completely blank
    setItems((prev) => {
      if (prev.length === 1 && !prev[0].description.trim()) {
        return [newItem];
      }
      return [...prev, newItem];
    });

    setToastMessage(item.description || 'Item added to RFQ');
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const updateItem = (id: string, updates: Partial<RFQItem>) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...updates } : it)));
  };

  const removeItem = (id: string) => {
    setItems((prev) => {
      const filtered = prev.filter((it) => it.id !== id);
      if (filtered.length === 0) {
        return [
          {
            id: `item-${Date.now()}`,
            description: '',
            partNumber: '',
            specification: '',
            quantity: '1',
            unit: 'Units',
            notes: '',
          },
        ];
      }
      return filtered;
    });
  };

  const clearItems = () => {
    setItems([
      {
        id: `item-${Date.now()}`,
        description: '',
        partNumber: '',
        specification: '',
        quantity: '1',
        unit: 'Units',
        notes: '',
      },
    ]);
  };

  const updateContact = (updates: Partial<RFQContactInfo>) => {
    setContact((prev) => ({ ...prev, ...updates }));
  };

  const submitRfq = async (): Promise<string> => {
    // Generate official corporate reference matching requirement: AK-RFQ-2026-XXXX
    const year = new Date().getFullYear();
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    const ref = `AK-RFQ-${year}-${randomHex}`;

    const submission: RFQSubmission = {
      referenceId: ref,
      date: new Date().toISOString(),
      contact: { ...contact },
      items: items.filter((i) => i.description.trim().length > 0),
    };

    setSubmissions((prev) => [submission, ...prev]);
    setLastSubmittedRef(ref);

    return ref;
  };

  const clearLastSubmission = () => {
    setLastSubmittedRef(null);
  };

  const clearToast = () => setToastMessage(null);

  return (
    <RfqContext.Provider
      value={{
        items,
        addItem,
        updateItem,
        removeItem,
        clearItems,
        contact,
        updateContact,
        submissions,
        submitRfq,
        lastSubmittedRef,
        clearLastSubmission,
        toastMessage,
        clearToast,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
};

export const useRfq = () => {
  const ctx = useContext(RfqContext);
  if (!ctx) {
    throw new Error('useRfq must be used within a RfqProvider');
  }
  return ctx;
};
