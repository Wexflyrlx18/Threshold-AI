import { useState } from "react";
import { toast } from "sonner";

/**
 * ContactForm: minimal lead capture form for corporate clients.
 * Fields: Corporate email, Name, Company, Position.
 */
export default function ContactForm() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    company: "",
    position: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.name || !form.company) {
      toast.error("Пожалуйста, заполните обязательные поля");
      return;
    }
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Заявка отправлена. Мы свяжемся с вами в течение 24 часов.");
      setForm({ email: "", name: "", company: "", position: "" });
    }, 1200);
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/[0.12] py-3 px-0 text-[16px] text-[#f2f2f4] placeholder:text-[#3e3e46] focus:border-[#e8ff52] focus:outline-none transition-colors duration-300";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[28px] w-full max-w-[480px]">
      <div className="flex flex-col gap-1">
        <label className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium">
          Корпоративная почта *
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="name@company.com"
          className={inputClass}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium">
          Имя *
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Иван Иванов"
          className={inputClass}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium">
          Компания *
        </label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          placeholder="Название компании"
          className={inputClass}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[11px] tracking-[0.28em] uppercase text-[#3e3e46] font-medium">
          Должность
        </label>
        <input
          type="text"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
          placeholder="CISO / SOC Analyst / Board Member"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        data-hot
        className="magnetic-btn inline-flex items-center justify-center gap-[10px] px-[38px] py-[18px] rounded-sm font-semibold text-[16px] text-black bg-[#e8ff52] transition-transform duration-200 glow-box disabled:opacity-50 mt-2"
      >
        {submitting ? "Отправка..." : "Обсудить безопасность вашего ИИ →"}
      </button>
    </form>
  );
}
