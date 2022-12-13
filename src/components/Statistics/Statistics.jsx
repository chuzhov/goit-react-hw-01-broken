//import PropTypes from "prop-types";
import Stat from "./Stat"
import css from "./Statistics.module.css";

const Statistics = ( props ) => {

    const { stats } = props;
    
    return ( <section className="statistics">
    {
        props.title ? (
            <h2 className={css["stat-title"]}>{props.title}</h2>
        ) : ( 
            <></> 
        )
    }
    <ul className={css["stat-list"]}>
    {
        stats.map((el) => (
        <Stat
          key={el.id}
          label={el.label}
          percentage={el.percentage}
        />
        ))
    }
    </ul>
  </section>
  )
}

export default Statistics;
