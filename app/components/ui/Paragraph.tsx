interface paragraphProps {
  children: string;
  className?: string;
}

const Paragraph = ({ children, className, ...props }: paragraphProps) => {
  return (
    <p  {...props} className={`${className} text-base leading-120 -tracking-[0.64px]`}>{children}</p>
  )
}

export default Paragraph