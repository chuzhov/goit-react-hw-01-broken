const Stat = ( props ) => {
    
    return ( <li className="stat-item">
        <p className="stat-label">{props.label}</p>
        <p className="stat-percentage">{props.percentage}%</p>
      </li>
      
  )
}

export default Stat;
