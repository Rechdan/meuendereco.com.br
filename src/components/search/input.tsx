import React, { useCallback, useEffect, useMemo, useRef } from "react";

import { styled } from "styled-components";

import useSearch from "_/stores/search";

const StyledContainer = styled.div`
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  display: flex;
  gap: 1rem;
`;

const StyledInput = styled.input`
  flex: 0 0 auto;
  transition: 0.15 ease-in-out;
  transition-property: border-color;
  background-color: hsl(0, 0%, 100%);
  border: 2px solid hsl(0, 0%, 60%);
  border-radius: 0.5rem;
  text-align: center;
  outline: none;
  height: 3rem;
  width: 2rem;
  &:focus {
    border-color: hsl(220, 50%, 50%);
  }
`;

const Input = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { values, onKeyPress, onInputValue } = useSearch();

  const selectedIndex = values.length;

  const updateFocus = useCallback(() => {
    const inputs = containerRef.current?.querySelectorAll("input");

    if (inputs) {
      inputs[Math.min(inputs?.length, selectedIndex)]?.focus();
    }
  }, [selectedIndex]);

  const onFocus = useCallback(() => {
    updateFocus();
  }, [updateFocus]);

  const inputs = useMemo(() => {
    const arr: React.JSX.Element[] = [];

    for (let i = 0; i < 8; i++) {
      if (i === 5) {
        arr.push(<div key="divider">-</div>);
      }

      arr.push(
        <StyledInput key={`input-${i}`} placeholder="•" value={values[i] ?? ""} onFocus={onFocus} onKeyDown={onKeyPress} onChange={onInputValue} />
      );
    }

    return arr;
  }, [onFocus, onInputValue, onKeyPress, values]);

  useEffect(() => {
    updateFocus();
  }, [updateFocus, values]);

  return <StyledContainer ref={containerRef}>{inputs}</StyledContainer>;
};

export default Input;
