
import "@/styles/component.card.scss"
export default function News(props) {
    const { className, children, ...rest } = props;
  
    return(
            <div className={className} {...rest}>
                {children}
            </div>
    )
}