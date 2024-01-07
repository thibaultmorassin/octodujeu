import type { ReadonlyURLSearchParams } from "next/navigation";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";

type SearchParamsInput = {
  name: string;
  value: string;
};

type PushSearchParams = {
  searchParams: ReadonlyURLSearchParams;
  pushSearchParams: (name: string, value: string) => void;
};

const usePushSearchParams = (): PushSearchParams => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (!value.length) {
        params.delete(name);
      }
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const pushSearchParams = (name: string, value: string) => {
    router.push(`${pathname}?${createQueryString(name, value)}`);
  };

  return {
    searchParams,
    pushSearchParams,
  };
};

export default usePushSearchParams;
