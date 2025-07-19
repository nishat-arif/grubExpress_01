
const OfferTag = (ResComponent) => {
  return (props) => {
   const {aggregatedDiscountInfoV3} = props.resData.info
    return (
      <div>
        <label>
          { aggregatedDiscountInfoV3.header +" " + aggregatedDiscountInfoV3.subHeader}
        </label>
        <ResComponent {...props} />
      </div>
    );
  };
};


export default OfferTag;
