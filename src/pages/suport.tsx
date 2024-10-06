import { Apple, BugOff, ChartColumnIncreasing, Check, LockKeyhole } from "lucide-react";
import { CardIcon } from "../components/card-icon";
import { ContainerBig } from "../components/container-big";
import Header from "../components/header";
import { UseMyThemeContext } from "../contexts/theme-context";
import Footer from "../components/footer";



export default function Suport() {
    const text = "At [Company Name], we believe that innovation and excellence are the keys to success. Founded in [Year of Establishment], our mission is to provide high-quality solutions that meet our clients' needs and drive sustainable growth. With a dedicated team of experienced professionals, we are committed to delivering services and products that not only meet but exceed expectations. Our approach is customer-centric, and we work tirelessly to understand and address the specific challenges of each project. We continually invest in technology and training to ensure we remain at the forefront of the industry, offering modern and effective solutions. Whether in the field of [Field of Operation], [Field of Operation], or [Field of Operation], our goal is to be a reliable and innovative partner for our clients. We value integrity, transparency, and teamwork. Every project is an opportunity to build lasting relationships based on trust and mutual success. At [Company Name], we don't just deliver results—we create value for our clients, employees, and community. Join us on this journey of growth and innovation. Together, we can transform ideas into reality and build a better future. You can customize this text by adding specific information about the company, such as its name, year of establishment, fields of operation, and values.";

    return (
        <div className='h-full'>
            <Header />
            <ContainerBig Title={"Support"} Description={text} />
            <div className="flex justify-between mx-40 mb-2.5">
                <CardIcon Title={"Segurança"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<LockKeyhole />}/>
                <CardIcon Title={"Melhores Práticas"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<BugOff />}/>
                <CardIcon Title={"Flexibilidade"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<Check />}/>
                <CardIcon Title={"Desempenho"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<ChartColumnIncreasing />}/>
            </div>
            <Footer/>
        </div>
    )
}