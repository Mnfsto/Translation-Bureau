import Link from "next/link";

export default function CardBody(props) {

    const { className, children, link, ...rest } = props;
    return(

        <div className={className} {...rest}>
        <Link href={link}>
        {children}
        </Link>
        </div>
    )

}