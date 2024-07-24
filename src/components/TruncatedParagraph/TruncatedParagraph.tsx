import { TruncatedPar } from "./TruncatedParagraph.types";

const TruncatedParagraph = ({ text, maxLength, symbol }: TruncatedPar) => {
  const cuttingText = (str: string, length: number, symbol?: string) => {
    return str.length > length
      ? str
          .split(`${symbol}` || " ")
          .slice(0, 3)
          .join(`${symbol}` || " ")
      : str;
  };

  return <p>{cuttingText(text, maxLength, symbol)}</p>;
};

export default TruncatedParagraph;
