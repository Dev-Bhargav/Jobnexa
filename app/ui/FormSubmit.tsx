import { toast } from "@/components/ui/use-toast";
import { State } from "@/lib/serverActions";
import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";

export default function FormSubmit({
  state,
  verifyEmail,
}: {
  state: State;
  verifyEmail: () => void;
}) {
  const { pending } = useFormStatus();
  useEffect(() => {
    console.log("yo");
    if (!state.errors) {
      verifyEmail();
    }
    {
      state.userFound && toast({ title: "Subscribe Alredy" });
    }
  }, [pending]);

  return (
    <button
      type="submit"
      className="bg-black text-white py-1 rounded-sm px-4 flex font-medium"
    >
      Subscribe
    </button>
  );
}
