import './service.css';

const Service = ({service}) => {
    
    const {title, description, img} = service
  
    return (
        <div>
            <>
      {/*<!-- Component: Card with icon --> */}
      <div className=" overflow-hidden mt-16 mx-8 lg:mx-0 lg:mb-32 text-left rounded-xl border border-gray-200 bg-color shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
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