
const OfferTag = (ResComponent) => {
  return (props) => {
   const {aggregatedDiscountInfoV3} = props.resData.info
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          { aggregatedDiscountInfoV3.header +" " + aggregatedDiscountInfoV3.subHeader}
        </label>
        <ResComponent {...props} />
      </div>
    );
  };
};


export default OfferTag;
