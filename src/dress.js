const Dress = (props) => {
    const { img, price, type,offer} = props;
  
    return (
      <article className="dress">
        <img src={img} alt={type} />
        <h2>{type}</h2>
  
        <h2><strike>{price} </strike></h2>
        <h2>{offer}</h2>
      </article>
    );
  };
  
  export default Dress;
  