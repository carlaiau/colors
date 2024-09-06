import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';

type HexToRGBProps = {
  hexColor: string;
  dispatch: React.Dispatch<AdjustColorActions>;
};

const updateRGB = (
  red: number,
  green: number,
  blue: number,
  dispatch: React.Dispatch<AdjustColorActions>,
): void => {
  dispatch({
    type: 'update-rgb-color',
    payload: {
      rgb: [red, green, blue],
    },
  });
};

const HexToRGB = ({ hexColor, dispatch }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="R"
        type="number"
        value={r}
        onChange={(e) => updateRGB(e.target.valueAsNumber, g, b, dispatch)}
      />
      <LabeledInput
        label="G"
        type="number"
        value={g}
        onChange={(e) => updateRGB(r, e.target.valueAsNumber, b, dispatch)}
      />
      <LabeledInput
        label="B"
        type="number"
        value={b}
        onChange={(e) => updateRGB(r, g, e.target.valueAsNumber, dispatch)}
      />
    </section>
  );
};

export default HexToRGB;
