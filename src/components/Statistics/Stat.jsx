const Stat = ( props ) => {
    
    return ( <li className="item">
        <p className="label">{props.label}</p>
        <p className="percentage">{props.percentage}%</p>
      </li>
      
  )
}

export default Stat;
