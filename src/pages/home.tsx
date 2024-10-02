import React from 'react';
import { UseMyThemeContext } from '../contexts/theme-context';
import Header from '../components/header';
import { ContainerBig } from '../components/container-big';
import { LockKeyhole, BugOff, Check, ChartColumnIncreasing } from 'lucide-react';
import { CardIcon } from '../components/card-icon';
import { ContainerBigDuplo } from '../components/container-duplo';
import { ContainerImg } from '../components/container-img';
import img from '../imgs/11240811.jpg';

function Home() {

    return (
        <div  className='h-full'>
            <Header />
            <ContainerBig Title={"Home"} Description={"This is a home page wich the principal function is.."} />
            <div className="flex justify-between mx-40 mb-2.5">
                <CardIcon Title={"Segurança"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<LockKeyhole />} />
                <CardIcon Title={"Melhores Práticas"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<BugOff />} />
                <CardIcon Title={"Flexibilidade"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<Check />} />
                <CardIcon Title={"Desempenho"} Description={"This is just a testa, please ignore that. This is just a test, just ignore that, it is irrelevant"} Icon={<ChartColumnIncreasing />} />
            </div>
            <ContainerBigDuplo Title={'Lets make part of the TEAM!'} Description={'jslbfjsfkjsdbfak fajdbfkafça djfa dkfa çdk faj dfjka dfjk adfjk kjaf sa fakjçfa f jka fçja k fa'} TextButton={'Lets Do it'} SubTitle={'What are you waiting for'} />
            <ContainerImg imgCaminho={img} TextButton={'Join us!'} Title={'Are ready to get into a new adventure?'}/>
        </div>
    );
}

export default Home;
