import { useState,useEffect } from "react";
import "./AddProduct.css"
import axios from "axios";
import Swal from 'sweetalert2'
import { FarmerNavbar } from "../../Navbar/navbar";
import Aos from "aos"; // Import CSS file for styling
import 'aos/dist/aos.css';


export default function AddProducts() {
    useEffect(()=>{
        Aos.init({duration:2000})
      }, [])

    const email = 'satre@gmail.com'
    const [productName, setproductName] = useState();
    const [quantity, setquantity] = useState();
    const [price, setprice] = useState();
    const [description, setdescription] = useState();
    const [image, setimage] = useState();

    //function for toast message
  const Toast = Swal.mixin({
    toast: true,
    position: 'middle',
    showConfirmButton: false,
    timerProgressBar: true,
    timer: 2000,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

    var err_count = 0;

    function addProduct(e){
        e.preventDefault();

        if(productName === undefined)
        {
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter Productname !'
              })
        }

        if(quantity === undefined)
        {
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter quantity !'
              })
        }

        if(price === undefined)
        {
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter price !'
              })
        }

        if(description === undefined)
        {
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Enter description !'
              })
        }

        if(image === undefined)
        {
            err_count += 1;
            Toast.fire({
                icon: 'error',
                title: 'Select image !'
              })
        }

        if(err_count === 0)
        {
            save_data();
        }

    }

    async function save_data(){
        try{
            const productData = {
                email,
                productName,
                price,
                quantity,
                description,
                image
            };

            axios.post(`http://localhost:5000/addProducts`, productData);

            Swal.fire({
                icon: 'success',
                title: 'Done !',
                text: 'Product added successfully!',
                })
            

        }catch(err){
            Toast.fire({
                icon: 'error',
                title: {err}
            })

            console.log(err);
        }
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file)
        setimage(base64)
        console.log(base64)
    }
  
    return (
    <div>
    <div className="position-fixed w-100" style={{zIndex:"100000"}}>
            <FarmerNavbar/>
    </div>
    <br/>
    <div className="ad-main">
        <section className="mb-5" data-aos="fade-up">
            <div className="container-fluid mt-0 adprod">
                <div className="row justify-content-center align-items-center mt-5" >
                    <div className="col-lg-6 col-md-8 mt-5 mb-5">
                        <div className="card justify-content-center align-items-center">
                            <div className="card-title text-center mt-3">
                                <h3>Add Product</h3>
                            </div>
                            <hr className="w-100"/>
                            <div className="card-body">
                                <form onSubmit={addProduct}>
                                    <div className="form-group">
                                        <label htmlFor="productname">Product Name:</label>
                                        <input type="text" className="form-control" id="productname" placeholder="Enter Product Name" onChange={(e) => setproductName(e.target.value)} value={productName} />
                                        <div className="invalid-feedback">Product Name Can't Be Empty</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productprice">Product Price:</label>
                                        <input type="number" className="form-control" id="productprice" placeholder="Enter Product Price" onChange={(e) => setprice(e.target.value)} value={price} />
                                        <div className="invalid-feedback">Product Price Can't Be Empty</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productqnt">Product Quantity:</label>
                                        <input type="number" className="form-control" id="productqnt" placeholder="Enter Product Id" onChange={(e) => setquantity(e.target.value)} value={quantity} />
                                        <div className="invalid-feedback">Product Quantity Can't Be Empty</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="productprice">Product Description:</label>
                                        <input type="text" className="form-control" id="productprice" placeholder="Enter Product Price" onChange={(e) => setdescription(e.target.value)} value={description} />
                                        <div className="invalid-feedback">Product description Can't Be Empty</div>
                                    </div>
                                    <label htmlFor="productimage">Product Image:</label>
                                    <div className="form-group">
                                        <input type="file" className="form-control" id="productimage" onChange={(e) => handleFileUpload(e)}/>
                                    </div>
                                    <button className="btn btn-dark mt-3 mx-auto d-block" style={{ backgroundColor:"#61876E"}} type="submit">Add Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
        </div>
    );
}

function convertToBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}
