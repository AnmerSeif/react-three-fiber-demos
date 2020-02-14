import React, { useState } from "react";
import styled from "styled-components";

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  step: number;
  startValue?: number;
  label: string;
  onSliderChange: (value: number) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

const RangeLabel = styled.label`
  font-family: "FFDINWebProLight", sans-serif;
  font-size: 2rem;
  color: white;
  margin-right: 1rem;
`;

const Range = styled.input`
  -webkit-appearance: none;

  /*required for proper track sizing in FF*/
  width: 100%;
  background: black;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    background: var(--overskyet);
    border: none;
    border-radius: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 2.5rem;
    width: 1rem;
    border-radius: 0;
    background: var(--overskyet);
    margin-top: -1rem;
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-runnable-track {
    background: var(--skyfritt);
  }

  &::-moz-range-track {
    width: 100%;
    height: 5px;
    background: var(--overskyet);
    border: none;
    border-radius: 3px;
  }

  &::-moz-range-thumb {
    border: none;
    height: 2.5rem;
    width: 1rem;
    border-radius: 0;
    background: var(--overskyet);
  }

  /*hide the outline behind the border*/
  &:-moz-focusring {
    outline-offset: -1px;
  }

  &:focus::-moz-range-track {
    background: var(--skyfritt);
  }
`;

const Value = styled.p`
  display: block;
  position: relative;
  font-family: "FFDINWebProLight", sans-serif;
  font-size: 2rem;
  color: white;
  padding: 1rem;
  width: 4rem;
  text-align: right;
  margin: 0;
`;

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step,
  startValue = 0,
  label,
  onSliderChange
}) => {
  const [value, setValue] = useState(startValue);
  return (
    <Container>
      <RangeLabel>{label}</RangeLabel>
      <Range
        type="range"
        min={min}
        max={max}
        step={step}
        value={startValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(parseInt(e.target.value));
          onSliderChange(parseInt(e.target.value));
        }}
      />
      <Value>{value}</Value>
    </Container>
  );
};

export default Slider;
