import './service.css';

const Service = ({service}) => {
    console.log(service);
    const {title, description, img} = service
  
    return (
        <div>
            <>
      {/*<!-- Component: Card with icon --> */}
      <div className=" overflow-hidden mt-16 mb-32 text-left rounded-xl border border-gray-200 bg-color">
        {/*  <!-- Icon --> */}
        <figure className="p-6 pb-0">
          <img className="icon-size" src={img} alt="" />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <h3 className="mb-4 text-xl font-medium text-black">{title}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
      {/*<!-- End Card with icon --> */}
    </>
        </div>
    );
};

export default Service;