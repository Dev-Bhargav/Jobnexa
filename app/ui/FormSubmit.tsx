import { toast } from "@/components/ui/use-toast";
import { State } from "@/lib/serverActions";
import React, { useEffect } from "react";

export default function FormSubmit(props: {
  state: State,
  verifyEmail: () => void
}) {
  const {state, verifyEmail} = props

  useEffect(() => {

    if (!state.errors) {
      verifyEmail();
    }
    {
      state.userFound && toast({ title: 'This email address is already subscribed.', variant: "success"});
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
