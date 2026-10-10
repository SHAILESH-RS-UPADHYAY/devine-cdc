"use client";

import { useEffect } from "react";
import { rememberVisitSource } from "@/lib/attribution";

/** Records the visitor's source (UTM / ad click / referrer) once, on the page they land on. */
export function VisitSource() {
  useEffect(rememberVisitSource, []);
  return null;
}
