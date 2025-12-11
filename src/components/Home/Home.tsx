import Hero from '../FinanceSolution/FinanceSolution';
import ChartSection from './../ChartSection/ChartSection';
import styles from './Home.module.scss';
import SmallRouting from '../SmallRouting/SmallRouting';
import BoostingBusiness from './../BoostingBusiness/BoostingBusiness';
import Payment from '../Payment/Payment';
import VadioDemo from '../Vadio-demo/Vadio-demo';

export default function Home() {
    return (
        <div className={styles.homeWrapper}>
            <Hero />
            <div className={styles.chartWrapper}>
                <ChartSection />
            </div>
            <SmallRouting />
            <BoostingBusiness />
            <Payment />
            <VadioDemo />
        </div>
    );
}