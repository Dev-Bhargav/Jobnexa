"use client";

import { Jobs } from "@prisma/client";
import React, { createContext, useContext, useRef, useState } from "react";

interface JobContextType {
  jobs: Array<Jobs>;
  setJobs: React.Dispatch<React.SetStateAction<Array<Jobs>>>;
  addJobs: (newJobs: Array<Jobs>) => void;
  skip: React.RefObject<Number>;
  limit: Number;
}

export const JobContext = createContext<JobContextType | undefined>(undefined);

export default function JobContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jobs, setJobs] = useState<Array<Jobs>>([]);
  const skip = useRef(0);
  const limit = 4;

  const addJobs = (newJobs: Array<Jobs>) => {
    skip.current = skip.current + limit;
    setJobs((prevJobs) => [...prevJobs, ...newJobs]);
  };

  return (
    <JobContext.Provider value={{ jobs, setJobs, addJobs, skip, limit }}>
      {children}
    </JobContext.Provider>
  );
}

export const useJobs = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
