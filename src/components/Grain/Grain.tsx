import classes from './component.module.css';
import bgImg from '@public/noise-256w.png';

export default function Grain() {
  return <div className={classes['grain']} style={{ backgroundImage: `url(${bgImg.src})` }} />;
}
