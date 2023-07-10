import { ChangeEvent, KeyboardEvent } from "react";

import { create } from "zustand";

type SearchStore = {
  values: string[];
  onKeyPress(e: KeyboardEvent<HTMLInputElement>): void;
  onInputValue(e: ChangeEvent<HTMLInputElement>): void;
};

const useSearch = create<SearchStore>()((set, get) => ({
  values: [],

  onKeyPress(e) {
    const key = e.key;

    switch (key) {
      case "Backspace": {
        e.preventDefault();

        const { values } = get();

        set({
          values: values.splice(0, values.length - 1),
        });

        break;
      }
    }
  },

  onInputValue(e) {
    const value = e.currentTarget.value;

    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        const { values } = get();
        values.push(value);
        set({ values: values.splice(0, 8) });
        break;
      }
    }
  },
}));

export default useSearch;
