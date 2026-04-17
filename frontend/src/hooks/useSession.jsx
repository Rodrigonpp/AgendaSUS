import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";

export function useSession() {
  const { credentials, setCredentials, isActive } = useContext(SessionContext);

  return { credentials, setCredentials, isActive };
}
