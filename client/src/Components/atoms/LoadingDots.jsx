const LoadingDots = ({ color = 'bg-black' }) => {
  return (
    <span className={'inline-flex items-center'}>
      <span
        className={`${color} w-[5px] h-[5px] rounded-full inline-block my-0 mx-[1px] animate-blink`}
      />
      <span
        className={`${color} w-[5px] h-[5px] rounded-full inline-block my-0 mx-[1px] animate-blink animation-delay-[.2s]`}
      />
      <span
        style={{ backgroundColor: color }}
        className={`${color} w-[5px] h-[5px] rounded-full inline-block my-0 mx-[1px] animate-blink animation-delay-[.4s]`}
      />
    </span>
  );
};

export default LoadingDots;
