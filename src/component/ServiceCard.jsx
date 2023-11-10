import Card from "@/component/Card/Card"
import CardBody from "@/component/Card/CardBody"
import Image from "next/image"

export default function ServiceCard(props) {

    const { className, ...rest } = props;
    return(
        <><h1 className="blockHeader">Наші послуги</h1>
        <div className={className} {...rest}>
            <Card className="card-wrapper">
                <CardBody link="/#" className="body-wrapper">
                    <figure>
                        <Image
                            src='/iconPicture.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад документів</p>
                    <p>Переклад супроводжується засвідченням нотаріально та печаткою бюро</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/#" className="body-wrapper">
                    <figure>
                        <Image
                            src='/iconPicture.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад документів</p>
                    <p>Переклад супроводжується засвідченням нотаріально та печаткою бюро</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/#" className="body-wrapper">
                    <figure>
                        <Image
                            src='/iconPicture.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад документів</p>
                    <p>Переклад супроводжується засвідченням нотаріально та печаткою бюро</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/#" className="body-wrapper">
                    <figure>
                        <Image
                            src='/iconPicture.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад документів</p>
                    <p>Переклад супроводжується засвідченням нотаріально та печаткою бюро</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/#" className="body-wrapper">
                    <figure>
                        <Image
                            src='/iconPicture.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад документів</p>
                    <p>Переклад супроводжується засвідченням нотаріально та печаткою бюро</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/#" className="body-wrapper">
                    <figure>
                        <Image
                            src='/iconPicture.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад документів</p>
                    <p>Переклад супроводжується засвідченням нотаріально та печаткою бюро</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/#" className="body-wrapper">
                    <figure>
                        <Image
                            src='/iconPicture.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад документів</p>
                    <p>Переклад супроводжується засвідченням нотаріально та печаткою бюро</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/#" className="body-wrapper">
                    <figure>
                        <Image
                            src='/iconPicture.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад документів</p>
                    <p>Переклад супроводжується засвідченням нотаріально та печаткою бюро</p>
                </CardBody>
            </Card>
        </div></>
    )

}