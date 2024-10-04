import { ContainerBig } from "../components/container-big";
import Footer from "../components/footer";
import Header from "../components/header";
import { UseMyThemeContext } from "../contexts/theme-context";



const themeStyles = {
    Light: { background: '#fff', color: '#000', padding: 0, margin: 0 },
    Dark: { background: '#262626', color: '#fff', padding: 0, margin: 0 },
  };
export default function Sobre () {
    const { valueTheme } = UseMyThemeContext();
    const text = "At [Company Name], we believe that innovation and excellence are the keys to success. Founded in [Year of Establishment], our mission is to provide high-quality solutions that meet our clients' needs and drive sustainable growth. With a dedicated team of experienced professionals, we are committed to delivering services and products that not only meet but exceed expectations. Our approach is customer-centric, and we work tirelessly to understand and address the specific challenges of each project. We continually invest in technology and training to ensure we remain at the forefront of the industry, offering modern and effective solutions. Whether in the field of [Field of Operation], [Field of Operation], or [Field of Operation], our goal is to be a reliable and innovative partner for our clients. We value integrity, transparency, and teamwork. Every project is an opportunity to build lasting relationships based on trust and mutual success. At [Company Name], we don't just deliver results—we create value for our clients, employees, and community. Join us on this journey of growth and innovation. Together, we can transform ideas into reality and build a better future. You can customize this text by adding specific information about the company, such as its name, year of establishment, fields of operation, and values.";
    return(
        <div style={themeStyles[valueTheme]} className='h-full'>
            <Header/>
            <ContainerBig Title={"About us"} Description={text}/>
            <Footer/>
        </div>
    )
}