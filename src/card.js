export default function Card(props){
    
    return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.content.name}</h5>
            <h6 className="card-price text-center">{props.content.currency}{props.content.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
                {
                    props.content.data.map((elem) => {
                        return <li className={elem.isEnabled ? "" : "text-muted"}><span className="fa-li"><i className={`fas ${elem.isEnabled ? 'fa-check' : 'fa-times'}`}></i></span>{elem.name}</li>
                    })
                }
              
              
            </ul>
            <button className="btn btn-block btn-primary text-uppercase">Button</button>
          </div>
        </div>
      </div>

    </>
}