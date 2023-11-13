import Card from "@/component/Card/Card"
import CardBody from "@/component/Card/CardBody"
import Image from "next/image"

export default function ServiceCard(props) {

    const { className, ...rest } = props;
    return(
        <><h1 className="blockHeader">Наші послуги</h1>
        <div className={className} {...rest}>
            <Card className="card-wrapper">
                <CardBody link="/documents" className="body-wrapper">
                    <figure>
                        <Image
                            src='/icons/Vector.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад документів</p>
                    <p>Професійний переклад документів. Точність та конфіденційність для міжнародного використання.</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/legalization" className="body-wrapper">
                    <figure>
                        <Image
                            src='/icons/Vector-2.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Легалізація документів</p>
                    <p>Забезпечте юридичну силу своїм документам. Швидка та надійна легалізація для міжнародної визнаності.</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/apostile" className="body-wrapper">
                    <figure>
                        <Image
                            src='/icons/Vector-3.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Апостіль</p>
                    <p>Отримайте апостиль для вашої документації. Швидко, надійно, визнано світовими установами.</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/artistic" className="body-wrapper">
                    <figure>
                        <Image
                            src='/icons/Vector-4.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Художній переклад</p>
                    <p>Втіліть мистецтво слова в художньому перекладі. Виразно та вірно відтворені текстові шедеври.</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/consular" className="body-wrapper">
                    <figure>
                        <Image
                            src='/icons/Vector-1.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Консульська легалізація</p>
                    <p>Забезпечте визнання вашим документам через консульську легалізацію. Надійно та ефективно для глобальної акцептованості.</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/medical" className="body-wrapper">
                    <figure>
                        <Image
                            src='/icons/Vector-5.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Медичний переклад</p>
                    <p>Медичний переклад: точність та дбайливість у відтворенні медичної інформації для світового розуміння.</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/technical" className="body-wrapper">
                    <figure>
                        <Image
                            src='/icons/Vector-7.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Технічний переклад</p>
                    <p>Технічний переклад: професійна передача технічних концепцій та інформації для глобальної розуміння.</p>
                </CardBody>
            </Card>

            <Card className="card-wrapper">
                <CardBody link="/webtranslate" className="body-wrapper">
                    <figure>
                        <Image
                            src='/icons/Vector-6.svg'
                            alt='logo'
                            width={50}
                            height={50} />
                    </figure>
                    <p className="title">Переклад сайту</p>
                    <p>Міжнародизуйте свій сайт: професійний переклад контенту для глобальної аудиторії та успішного розвитку бізнесу.</p>
                </CardBody>
            </Card>
        </div></>
    )

}