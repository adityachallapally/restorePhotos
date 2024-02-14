import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export const CompareSlider = ({
  original,
  transformed,
}: {
  original: string;
  transformed: string;
}) => {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={original} alt="original photo" />}
      itemTwo={<ReactCompareSliderImage src={transformed} alt="transformed photo" />}
      portrait
      className="flex w-[475px] mt-5"
    />
  );
};
