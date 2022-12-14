const Card=(props)=>{
    return(
        props.render ? (
            <div className="col p-0" onClick={props.onSelect}>
                <div className={`card card-body rounded-0 h-100 ${props.cellColor} custom-card`} style={ props.clickable ? { cursor:"pointer" } : {}}>
                    <span className={"custom-card-num"}>{props.id}</span>
                    <span className="card-text">{props.data}</span>
                </div>
            </div>
        ) : null
    )
}

export default Card;