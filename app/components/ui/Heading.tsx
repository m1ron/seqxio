interface headingProps {
  children: string;
  className?: string;
}

const Heading = ({ children, className, ...props }: headingProps) => {
  return (
     <h2 {...props} className={` ${className} font-medium leading-120 text-black text-xl -tracking-[0.64px]`}>
       {children}
      </h2>
  )
}

export default Heading