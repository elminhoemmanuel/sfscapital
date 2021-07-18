import React, { useState, useEffect } from 'react'
import PrimaryBtn from './PrimaryBtn'
import ProfileResult from './ProfileResult'
import useForm from './useForm'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import axios from 'axios'
import Swal from 'sweetalert2'

const ProfileBody = ({user}) => {

    const [modifyProfile, setModifyProfile] = useState(true);
    const [phone, setPhone] = useState();
    const [nokphone, setNokPhone] = useState();
    const [countries, setCountries] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitting2, setIsSubmitting2] = useState(false);
    const [hasError, setHasError] = useState('');
    const [success, setsuccess] = useState(false);
    const [success2, setsuccess2] = useState(false);
    const [cities, setCities] = useState([{name:'Select city'}])
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedCity, setSelectedCity] = useState()
    const [selectedGender, setSelectedGender] = useState('blank')

    //user body details
    const [userDetails, setUserDetails] = useState({country:'',city:'',phone:'',nokphone:""});

    const obtainDetails = (detail,value) =>{
        setUserDetails({...userDetails,[detail]:value});
    }

    const processCountry = ((country) => {
        setSelectedCountry(country)
        countries.map(item =>{
            if(item.name === country){
                axios.get(`https://api.didalla.com/api/misc/cities/${item.id}`)
                .then((response) => {
                    setCities(response.data.data)
                }, (error) => {
                    console.log(error)
                });
            }
        })
    });

    useEffect(() => {
        if(user.reg_completed === 1){
            setModifyProfile(false)
        }
    }, [])

    useEffect(() => {

        //axios call for creator country details
        axios.get(`https://api.didalla.com/api/misc/countries`)
        .then((response) => {
            // console.log(response);
            response.data.data.map(item =>{
               countries.push(item);
            })
            console.log(countries)
            setisLoading(false)
            
        }, (error) => {
          console.log(error)
        });      
                
    }, [isLoading])

    useEffect(() => {
        obtainDetails('country',selectedCountry);
    }, [selectedCountry])
    useEffect(() => {
        obtainDetails('city',selectedCity);
    }, [selectedCity])
    useEffect(() => {
        obtainDetails('phone',phone);
    }, [phone])
    useEffect(() => {
        obtainDetails('nokphone',nokphone);
    }, [nokphone])

    //Define the state schema used for validation
    const stateSchema = {
        firstname:{value:"" , error:""},
        lastname:{value:"" , error:""},
        othername:{value:"" , error:""},
        sog:{value:"" , error:""},
        address:{value:"" , error:""},
        nok:{value:"" , error:""},
        email:{value:"" , error:""},
        acctname:{value:"" , error:""},
        acctnumber:{value:0 , error:""},
        bankname:{value:"" , error:""},
        foreignacctname:{value:"" , error:""},
        foreignacctnumber:{value:0 , error:""},
        foreignbankname:{value:"" , error:""},
        foreigncurrency:{value:"" , error:""},
        dob:{value:"" , error:""},
    }

    const stateValidatorSchema ={
        firstname:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"First name must be more than one character without space inbetween"
            }
        },
        lastname:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"Last name must be more than one character without space inbetween"
            }
        },
        othername:{
            required:true,
            validator:{
                func: value=> /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:"Other name must be more than one character without space inbetween"
            }
        },
        address:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Address name must be more than one character"
            }
        },
        sog:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Address name must be more than one character"
            }
        },
        nok:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"NOK name must be more than one character "
            }
        },
        email:{
            required:true,
            validator:{
                func: value=> /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error:"invalid email format"
            }
        },
        acctname:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Account name must be more than one character"
            }
        },
        acctnumber:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Account number must be more than one character"
            }
        },
        bankname:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Account number must be more than one character"
            }
        },
        foreignacctname:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Foreign Account must be more than one character"
            }
        },
        foreigncurrency:{
            required:true,
            validator:{
                func: value=> /^(?=.*[a-zA-Z0-9]).{1,}$/.test(value),
                error:"Foreign Currency must be more than one character"
            }
        },
        dob:{
            required:true,
            validator:{
                func: value=> /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value),
                error:"Must be more than one character without space inbetween"
            }
        },
        
    }

    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)
    const {email, 
        firstname, 
        lastname,
        othername,
        address,
        nok,
        acctname,
        acctnumber,
        bankname,
        foreignacctname,
        foreignacctnumber,
        foreignbankname,
        foreigncurrency,
        dob,
        sog,
    } = values;

    const handleSubmit = event => {
        event.preventDefault()
        setIsSubmitting(!isSubmitting);
        setIsSubmitting2(!isSubmitting2);

        const userToken = localStorage.getItem('userToken');

        const formdata ={
            phone : phone,
            address: address,
            dob: dob,
            gender: selectedGender,
            country:selectedCountry,
            city:selectedCity,
            nok:nok,
            nok_phone:nokphone,
            first_name:firstname,
            last_name:lastname,
            other_name:othername,
            state_of_origin:sog
         };

        const formdata2 ={
            country:selectedCountry,
            account_name:acctname,
            account_number:acctnumber,
            bank_name:bankname,
            currency:foreigncurrency,
         };

        axios.post('https://api.cropsharesafrica.com/api/profile/save',formdata,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting(false)
            console.log(response);
            setsuccess(true)

        }, (error) => {
            setIsSubmitting(false)
            console.log(error);
            setHasError('Something went wrong')
            
        });

        axios.post('https://api.cropsharesafrica.com/api/bank_detail/save',formdata2,{
            headers: {
            'Authorization': `Bearer ${userToken}`
            }})
        .then((response) => {
            setIsSubmitting2(false)
            console.log(response);
            setsuccess2(true)

        }, (error) => {
            setIsSubmitting2(false)
            console.log(error);
            setHasError('Something went wrong')
        });

        if( hasError === 'Something went wrong' ){
            Swal.fire({
                title: 'Oops!!',
                text: 'Something went wrong , please try again',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor:"#2D5427",
            })
            
        }

        if( success && success2 ){
            Swal.fire({
                title: 'Success !!',
                text: 'Your Profile has been updated',
                icon: 'success',
                confirmButtonText: 'OK',
                iconColor:"#90cc42",
                confirmButtonColor:"#2D5427",
            })
            
        }

    }

    return (
        <div className='bg-white rounded'>
            <form 
            onSubmit={(e)=>{
                e.preventDefault();     
                setModifyProfile(!modifyProfile);
            }}
            className='border-b border-graybg px-6 py-3 flex items-center justify-between'>
                <div><h1 className='text-lg md:text-xl text-greenpri'>Your Profile</h1></div>
                <div >
                    {
                        modifyProfile ?
                        <PrimaryBtn buttonText='Modify' addStyle='bg-greenpri text-sm pointer-events-none opacity-50' />
                        :
                        <PrimaryBtn buttonText='Modify' addStyle='bg-greenpri text-sm' />
                    }
                </div>
            </form>

            <div>
                {
                    modifyProfile ?
                    <form onSubmit={handleSubmit} >
                        
                        <div className='text-sm px-6 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="firstname" className='text-sm'>First Name</label></div>
                                <input type="text" 
                                    name='firstname'
                                    id='firstname'
                                    value={firstname}
                                    onChange={handleOnChange}
                                    placeholder='John'
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.firstname && dirty.firstname && (
                                    <p className='text-red-500 text-xs'>{errors.firstname}</p>
                                )}
                            </div>      
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="lastname" className='text-sm'>Last Name</label></div>
                                <input type="text" 
                                    name='lastname'
                                    id='lastname'
                                    value={lastname}
                                    onChange={handleOnChange}
                                    placeholder="Doe"
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.lastname && dirty.lastname && (
                                    <p className='text-red-500 text-xs'>{errors.lastname}</p>
                                )}
                            </div>      
                            <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="othername" className='text-sm'>Other Name</label></div>
                                <input type="text" 
                                    name='othername'
                                    id='othername'
                                    value={othername}
                                    onChange={handleOnChange}
                                    placeholder="James"
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.othername && dirty.othername && (
                                    <p className='text-red-500 text-xs'>{errors.othername}</p>
                                )}
                            </div>      
                            
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="phone" className='text-sm'>Phone Number</label></div>
                                <div>
                                    <PhoneInput
                                        placeholder="09048079556"
                                        value={phone}
                                        onChange={setPhone}
                                        defaultCountry='NG'
                                        className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                    />
                                </div>
                            </div>  
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="address" className='text-sm'>Address</label></div>
                                <input type="text" 
                                    name='address'
                                    id='address'
                                    value={address}
                                    onChange={handleOnChange}
                                    placeholder="Nyanya, Abuja"
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.address && dirty.address && (
                                    <p className='text-red-500 text-xs'>{errors.address}</p>
                                )}
                            </div>
                            <div className='mb-4 relative'>
                                <div className='mb-1'><label htmlFor="dob" className='text-sm'>Date of Birth</label></div>
                                <input className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                    type="date"
                                    id='dob'
                                    name="dob"
                                    value={dob}
                                    onChange={handleOnChange}
                                    placeholder='Date of Birth'
                                    required
                                        />
                                {errors.dob && dirty.dob && (
                                    <p className='text-red-500 text-xs'>{errors.dob}</p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="country" className='text-sm'>Country</label></div>
                                <div>
                                    <select name="country" value={selectedCountry} 
                                        onChange={(e) =>{processCountry(e.target.value);}}  id="country" className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                        {countries.map((item ) =>(
                                            <option key={item.id} className='p-1 hover:bg-greenpri' value={item.name} >{item.name}</option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="city" className='text-sm'>City</label></div>
                                <div>
                                    <select name="city" id="city" value={selectedCity} onChange={(e) =>{setSelectedCity(e.target.value)}} className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                        {cities.map((item , x=1) =>{
                                            return <option key={x++} className='p-1 hover:bg-greenpri' value={item.name} >{item.name}</option>
                                        })}
                                    </select>
                                </div>

                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="gender" className='text-sm'>Gender</label></div>
                                <div>
                                    <select name="gender" id="gender" value={selectedGender} onChange={(e) =>{setSelectedGender(e.target.value)}} className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                        <option className='p-1 hover:bg-greenpri' value='blank' >Select</option>
                                        <option className='p-1 hover:bg-greenpri' value='male' >Male</option>
                                        <option className='p-1 hover:bg-greenpri' value='female' >Female</option>
                                        <option className='p-1 hover:bg-greenpri' value='not say' >Rather not say</option>
                                    </select>
                                </div>

                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="address" className='text-sm'>State of Origin</label></div>
                                <input type="text" 
                                    name='sog'
                                    id='sog'
                                    value={sog}
                                    onChange={handleOnChange}
                                    placeholder="Kogi"
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.sog && dirty.sog && (
                                    <p className='text-red-500 text-xs'>{errors.sog}</p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="address" className='text-sm'>Next of Kin</label></div>
                                <input type="text" 
                                    name='nok'
                                    id='nok'
                                    value={nok}
                                    onChange={handleOnChange}
                                    placeholder="Jane Doe"
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.nok && dirty.nok && (
                                    <p className='text-red-500 text-xs'>{errors.nok}</p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="nokphone" className='text-sm'>Next of Kin Phone</label></div>
                                <div>
                                    <PhoneInput
                                        placeholder="09048079556"
                                        value={nokphone}
                                        onChange={setNokPhone}
                                        defaultCountry='NG'
                                        className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                    />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="acctname" className='text-sm'>Account Name</label></div>
                                <input type="text" 
                                    name='acctname'
                                    id='acctname'
                                    value={acctname}
                                    onChange={handleOnChange}
                                    placeholder='John Doe'
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.acctname && dirty.acctname && (
                                    <p className='text-red-500 text-xs'>{errors.acctname}</p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="acctnumber" className='text-sm'>Account Number</label></div>
                                <input type="text" 
                                    name='acctnumber'
                                    id='acctnumber'
                                    value={acctnumber}
                                    onChange={handleOnChange}
                                    placeholder='0034567845'
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.acctnumber && dirty.acctnumber && (
                                    <p className='text-red-500 text-xs'>{errors.acctnumber}</p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="bankname" className='text-sm'>Bank Name</label></div>
                                <input type="text" 
                                    name='bankname'
                                    id='bankname'
                                    value={bankname}
                                    onChange={handleOnChange}
                                    placeholder='E.g Sterling Bank'
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.bankname && dirty.bankname && (
                                    <p className='text-red-500 text-xs'>{errors.bankname}</p>
                                )}
                            </div>
                            {/* <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="foreignacctname" className='text-sm'>Foreign Account Name</label></div>
                                <input type="text" 
                                    name='foreignacctname'
                                    id='foreignacctname'
                                    value={foreignacctname}
                                    onChange={handleOnChange}
                                    placeholder='John Doe'
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.foreignacctname && dirty.foreignacctname && (
                                    <p className='text-red-500 text-xs'>{errors.foreignacctname}</p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="foreignacctnumber" className='text-sm'>Foreign Account Number</label></div>
                                <input type="text" 
                                    name='foreignacctnumber'
                                    id='foreignacctnumber'
                                    value={foreignacctnumber}
                                    onChange={handleOnChange}
                                    placeholder='0034567845'
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.foreignacctnumber && dirty.foreignacctnumber && (
                                    <p className='text-red-500 text-xs'>{errors.foreignacctnumber}</p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="foreignbankname" className='text-sm'>Foreign Bank Name</label></div>
                                <input type="text" 
                                    name='foreignbankname'
                                    id='foreignbankname'
                                    value={foreignbankname}
                                    onChange={handleOnChange}
                                    placeholder='E.g Sterling Bank'
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.foreignbankname && dirty.foreignbankname && (
                                    <p className='text-red-500 text-xs'>{errors.foreignbankname}</p>
                                )}
                            </div> */}
                            <div className='mb-4'>
                                <div className='mb-1'><label htmlFor="foreignbankname" className='text-sm'>Your Currency</label></div>
                                <input type="text" 
                                    name='foreigncurrency'
                                    id='foreigncurrency'
                                    value={foreigncurrency}
                                    onChange={handleOnChange}
                                    placeholder='Naira'
                                    className=' w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                                />
                                {errors.foreigncurrency && dirty.foreigncurrency && (
                                    <p className='text-red-500 text-xs'>{errors.foreigncurrency}</p>
                                )}
                            </div>
                        </div>
                        
                        <div className='px-6 py-3'>
                            {
                               firstname.length === 0 || errors.firstname ||  lastname.length === 0 ||
                               errors.lastname || othername.length=== 0 || errors.othername || address.length===0 ||
                               errors.address || errors.nok || nok.length=== 0 || acctname.length=== 0 ||
                               errors.acctname || acctnumber.length === 0 || errors.acctnumber || 
                               bankname.length=== 0 || errors.bankname || dob.length === 0 || errors.dob ||
                               sog.length ===0 || errors.sog || selectedCountry.length === 0 || selectedCity.length === 0 ||
                               selectedGender.length===0 || phone.length === 0 || nokphone.length===0 || 
                               errors.foreigncurrency ?

                               <PrimaryBtn buttonText='Update Profile' addStyle='bg-greenpri text-sm pointer-events-none opacity-50' /> :

                               <PrimaryBtn buttonText={isSubmitting && isSubmitting2 ? <div className='spinner-white'></div> : 'Update Profile'} addStyle='bg-greenpri text-sm' />
                            }
                        </div>

                        <div className='my-1 px-6'>
                            {
                                hasError ==='Something went wrong' && <p className='text-sm text-red-500'>{hasError}, try again</p>
                            }
                        </div>
                        <div className='py-3 px-6'>
                            {
                                success && success2 && <p className='text-sm text-didalla'>Profile successfully updated</p>
                            }
                        </div>

                    </form>
                    :
                    // profile results
                    <ProfileResult />
                }
            </div>
            
        </div>
    )
}

export default ProfileBody
