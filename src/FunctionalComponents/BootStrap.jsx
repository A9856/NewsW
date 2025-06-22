import React from 'react'
// import pic from "../Assests/images/React1.jpg"
// import pic1 from "../Assests/images/React3.webp"

export default function BootStrap() {
  let data = [
    { id: 1, name: "Product1", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b.jpg" },
    { id: 2, name: "Product2", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b1.jpg" },
    { id: 3, name: "Product3", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b2.webp" },
    { id: 4, name: "Product4", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b3.jpg" },
    { id: 5, name: "Product5", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b4.jpg" },
    { id: 6, name: "Product6", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b5.webp" },
    { id: 7, name: "Product7", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b6.webp" },
    { id: 8, name: "Product8", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b7.webp" },
    { id: 9, name: "Product9", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b8.webp" },
    { id: 10, name: "Product10", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b9.webp" },
    { id: 11, name: "Product11", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b10.jpg" },
    { id: 12, name: "Product12", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b11.png" },
    { id: 13, name: "Product13", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b12.webp" },
    { id: 14, name: "Product14", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/b13.avif" },
    { id: 15, name: "Product15", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i.webp" },
    { id: 16, name: "Product16", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i2.webp" },
    { id: 17, name: "Product17", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i3.webp" },
    { id: 18, name: "Product18", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i4.jpg" },
    { id: 19, name: "Product19", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i5.webp" },
    { id: 20, name: "Product20", basePrice: 2400, discount: 50, finalPrice: 1200, pic: "/Images/i6.jpeg" }


  ]
  return (
    <>
      {/* <h1 classNameName="bg-primary text-center text-light p-10">Hello World Bootstrap</h1> */}
      {/* <img src={pic}width={600}height={400}alt="" classNameName="img1"/>
    <img src={pic1}width={600}height={400}alt=""/> */}
      {/* <div className="main">
        <div className="center"> */}
      <nav className="navbar navbar-expand-lg back sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Dcart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=" #navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="material-symbols-outlined text-light">
              menu
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  text-light" aria-current="page" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  text-light" aria-current="page" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Contact-us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-light" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Adil Khan
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Home</a></li>
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <button type="button" className="nav-link  text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Login
                </button>
              </li>

            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Images/b.jpg" className="d-block w-100 h-auto" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/b1.png" className="d-block w-100 h-25" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/b2.avif" className="d-block w-100 h-25" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/b3.jpg" className="d-block w-100 h-25" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Fourth slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/b4.jpg" className="d-block w-100 h-25" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Five slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/b5.webp" className="d-block w-100 h-25" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Six slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/b6.webp" className="d-block w-100 h-25" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Seven slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/b7.webp" className="d-block w-100 h-25" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Eight slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/b8.webp" className="d-block w-100 h-25" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Nine slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Images/b9.webp" className="d-block w-100 h-25" alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ten slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-fluid my-3">
        <h5 className="back text-center text-light p-2">Latest Products</h5>
        <div className="row">
          {
            data.map((item) => {
              return <div key={item.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="card">
                  <img src={item.pic} height={200} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><del className="text-danger">&#8377;{item.basePrice}</del> &#8377;{item.finalPrice} <sup>{item.discount}%Off</sup></p>
                    <a href="#" className="btn btn-primary w-100 back">Add to cart</a>
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <img src="/Images/shop1.jpg" height={500} className="img-fluid" alt="" />
          </div>
          <div className="col-md-6">
            <h5 className="text-light back text-center p-2">Do you have any Query?contact us</h5>
            <form action="">
              <div className="mb-3">
                <input type='text' name="name" placeholder='Full Name' className='form-control border-3 border-secondry' />
              </div>
              <div className="mb-3">
                <input type='email' name="email" placeholder='E-mail Address' className='form-control border-3 border-secondry' />
              </div>
              <div className="mb-3">
                <input type='text' name="phone" placeholder='Phone Number' className='form-control border-3 border-secondry' />
              </div>
              <div className="mb-3">
                <input type='text' name="subject" placeholder='Subject' className='form-control border-3 border-secondry' />
              </div>
              <div className="mb-3">
                <textarea name="massage" placeholder='Massage' rows={4} className='form-control border-3 border-secondry' />
              </div>
              <div className='mb-3'>
                <button type='submit' className='back text-light p-2 w-100'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">login to your Account</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div clasName="modal-body">
              <form action="">
                <div className="mb-3">
                  <input type='text' name="Username or Email Address" placeholder='Full Name' className='form-control border-3 border-secondry' />
                </div>
                <div className="mb-3">
                  <input type='password' name="password" placeholder='Password' className='form-control border-3 border-secondry' />
                </div>
                <div className="modal-footer btn-group">
                  <button type="submit" className="btn btn-primary">Login</button>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 
