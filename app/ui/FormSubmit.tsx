import { toast } from "@/components/ui/use-toast";
import { State } from "@/lib/serverActions";
import React, { useEffect } from "react";

export default function FormSubmit({
  state,
  verifyEmail,
}: {
  state: State;
  verifyEmail: () => void;
}) {
  useEffect(() => {

    if (!state.errors) {
      verifyEmail();
    }
    {
      state.userFound && toast({ title: "Subscribe Alredy" });
    }
  }, [state]);

  return (
    <button
      type="submit"
      className="bg-black text-white py-1 rounded-sm px-4 flex font-medium"
    >
      Subscribe
    </button>
  );
}
