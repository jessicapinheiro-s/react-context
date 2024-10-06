import Header from '../components/Header';
import { ContainerBig } from '../components/Container-big';
import { LockKeyhole, BugOff, Check, ChartColumnIncreasing } from 'lucide-react';
import { CardIcon } from '../components/Card-icon';
import { ContainerBigDuplo } from '../components/Container-duplo';
import { ContainerImg } from '../components/Container-img';
import img from '../imgs/11240811.jpg';
import Footer from '../components/Footer';

function Home() {

    return (
        <div className='flex flex-col min-h-screen justify-between  bg-back-light dark:bg-back-dark text-color-light dark:text-color-dark'>
            <Header />
            <ContainerBig Title={"Home"} Description={"This is a home page wich the principal function is.."} />
            <div className="flex justify-between mx-40 mb-2.5 py-[25px]">
                <CardIcon Title={"Segurança"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<LockKeyhole />} />
                <CardIcon Title={"Melhores Práticas"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<BugOff />} />
                <CardIcon Title={"Flexibilidade"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<Check />} />
                <CardIcon Title={"Desempenho"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<ChartColumnIncreasing />} />
            </div>
            <ContainerBigDuplo Title={'Lets make part of the TEAM!'} Description={'jslbfjsfkjsdbfak fajdbfkafça djfa dkfa çdk faj dfjka dfjk adfjk kjaf sa fakjçfa f jka fçja k fa'} TextButton={'Lets Do it'} SubTitle={'What are you waiting for'} />
            <ContainerImg imgCaminho={img} TextButton={'Join us!'} Title={'Are ready to get into a new adventure?'}/>
            <Footer/>
        </div>
    );
}

export default Home;
