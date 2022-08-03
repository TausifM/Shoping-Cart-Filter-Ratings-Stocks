const SingleProduct = ({prod}) => {

  return (
    <div>
      <img src={prod.image} alt=""
      height="100"
      width="100"
      />
        <span>{prod.name}</span>
    </div>
  )
}

export default SingleProduct