import { toast } from "@/components/ui/use-toast";
import { State } from "@/lib/serverActions";
import React, { useEffect } from "react";

export default function FormSubmit(props: {
  state: State,
  verifyEmail: () => void
}) {
  console.log(props)
  const {state, verifyEmail} = props

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
      className="mt-2 py-1 rounded-sm px-4 flex font-medium bg-black text-white "
    >
      Subscribe
    </button>
  );
}
