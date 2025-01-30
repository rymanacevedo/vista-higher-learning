type Button = {
  callback: () => void;
  bgColor: string;
  text: string;
  shape: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isBreathing?: boolean;
};
export default function Button({
  callback,
  bgColor,
  shape,
  text,
  isActive = false,
  isDisabled = false,
  isBreathing = false,
}: Button) {
  return (
    <button
      className={`
      inline-flex items-center justify-center rounded-full border border-transparent 
      cursor-pointer bg-${bgColor}-600 text-white p-2 
      hover:ring-[0.75em] hover:ring-${bgColor}-200 
      focus:ring-[0.75em] focus:ring-${bgColor}-200 
      transition-all
      ${isActive ? `ring-[0.75em] ring-${bgColor}-200` : ''}
      ${isDisabled ? 'opacity-50' : 'opacity-100'}
      ${
        isBreathing
          ? `ring-[0.75em] ring-${bgColor}-200 [animation:ring-pulse_1s_ease-in-out_infinite]`
          : ''
      }
    `}
      type="button"
      onClick={callback}
    >
      <span className={shape} />
      <span>{text}</span>
    </button>
  );
}
