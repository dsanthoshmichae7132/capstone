import PropTypes from "prop-types";

function ProductView(props) {
  function handleForView(e){
    console.log('e', e)
  }
  return (
    <div
      className="product_img_details_container"
      onClick={props.handleProductDetails}
      // onClick={()=>handleForView(props)}
    >
      <div className="product_img_container">
        <img src={props.prodImg} loading="lazy" alt="productImg" />
      </div>
      <div className="product_details_container">
        <p>{props.prodType}</p>
        <p>{props.prodName}</p>
        <p>
          $ {props.prodPrice} <label>$ {props.prodMrpPrice}</label>
        </p>
      </div>
    </div>
  );
}
ProductView.propTypes = {
  prodType: PropTypes.string,
  prodImg: PropTypes.string,
  prodName: PropTypes.string,
  prodPrice: PropTypes.string,
  prodMrpPrice: PropTypes.string,
  handleProductDetails: PropTypes.func,
};
export default ProductView;
