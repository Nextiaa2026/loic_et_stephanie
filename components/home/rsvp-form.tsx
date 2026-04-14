"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type RsvpFormProps = { serifClassName: string };

export function RsvpForm({ serifClassName }: RsvpFormProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    // TODO: replace with your Google Apps Script Web App URL
    const SHEET_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ?? "";

    try {
      await fetch(SHEET_URL, { method: "POST", body: data, mode: "no-cors" });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-foreground/80">Votre nom</label>
        <input
          name="nom"
          required
          className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-foreground/80">Votre e-mail</label>
        <input
          name="email"
          type="email"
          required
          className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-foreground/80">
          Confirmez vous votre présence ?
        </label>
        <select
          name="presence"
          required
          className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="">— Choisir —</option>
          <option value="oui">Oui, je serai présent(e)</option>
          <option value="non">Non, je ne pourrai pas venir</option>
        </select>
      </div>
      <div className="flex gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="type"
            value="couple"
            className="accent-pink-500"
          />
          Couple
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="type"
            value="single"
            className="accent-pink-500"
          />
          Single
        </label>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm text-foreground/80">
          Votre message de confirmation (facultatif)
        </label>
        <textarea
          name="message"
          rows={5}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-400 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-fit h-14 rounded-full bg-primary px-12 text-sm text-primary-foreground tracking-[0.2em] uppercase hover:bg-primary/90 disabled:opacity-60"
      >
        {status === "loading" ? "Envoi…" : "Envoyer"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600">
          Merci ! Votre réponse a bien été enregistrée.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </form>
  );
}
