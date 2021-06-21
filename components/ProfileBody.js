import React, { useState, useEffect } from 'react'
import PrimaryBtn from './PrimaryBtn'
import ProfileResult from './ProfileResult'
import useForm from './useForm'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import axios from 'axios'


const ProfileBody = () => {

    const [modifyProfile, setModifyProfile] = useState(false);
    const [phone, setPhone] = useState();
    const [countries, setCountries] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [cities, setCities] = useState([{name:'Select city'}])
    const [selectedCountry, setSelectedCountry] = useState()
    const [selectedCity, setSelectedCity] = useState()

    //user body details
    const [userDetails, setUserDetails] = useState({country:'',city:'',phone:''});

    const obtainCountry = (detail,value) =>{
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

        //axios call for creator country details
        axios.get(`https://api.didalla.com/api/misc/countries`)
        .then((response) => {
            // console.log(response);
            response.data.data.map(item =>{
               countries.push(item);
            })
            console.log(countries)
            setisLoading(!isLoading)
            
        }, (error) => {
          console.log(error)
        });      
                
    }, [])

    useEffect(() => {
        obtainCountry('country',selectedCountry);
    }, [selectedCountry])
    useEffect(() => {
        obtainCountry('city',selectedCity);
    }, [selectedCity])
    useEffect(() => {
        obtainCountry('phone',phone);
    }, [phone])

    //Define the state schema used for validation
    const stateSchema = {
        firstname:{value:"" , error:""},
        lastname:{value:"" , error:""},
        othername:{value:"" , error:""},
        address:{value:"" , error:""},
        nok:{value:"" , error:""},
        email:{value:"" , error:""},
        acctname:{value:"" , error:""},
        acctnumber:{value:0 , error:""},
        bankname:{value:"" , error:""},
        foreignacctname:{value:"" , error:""},
        foreignacctnumber:{value:0 , error:""},
        foreignbankname:{value:"" , error:""},
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
        dob,
    } = values;

    return (
        <div className='bg-white rounded'>
            <form 
            onSubmit={(e)=>{
                e.preventDefault();     
                // setModifyProfile(!modifyProfile);
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
                    <form className='text-sm px-6 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="firstname" className='text-sm'>First Name</label></div>
                            <input type="text" 
                                name='firstname'
                                id='firstname'
                                value={firstname}
                                onChange={handleOnChange}
                                placeholder='John Doe'
                                className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
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
                                placeholder="Last Name"
                                className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
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
                                placeholder="Other Name"
                                className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                            />
                            {errors.othername && dirty.othername && (
                                <p className='text-red-500 text-xs'>{errors.othername}</p>
                            )}
                        </div>      
                        <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="email" className='text-sm'>Email Address</label></div>
                            <input type="email" 
                                name='email'
                                id='email'
                                value={email}
                                onChange={handleOnChange}
                                placeholder="johndoe@gmail.com"
                                className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                            />
                            {errors.email && dirty.email && (
                                <p className='text-red-500 text-xs'>{errors.email}</p>
                            )}
                        </div>
                        <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="phone" className='text-sm'>Phone Number</label></div>
                            <div>
                                <PhoneInput
                                    placeholder="09048079556"
                                    value={phone}
                                    onChange={setPhone}
                                    defaultCountry='US'
                                    className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
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
                                className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
                            />
                            {errors.address && dirty.address && (
                                <p className='text-red-500 text-xs'>{errors.address}</p>
                            )}
                        </div>
                        <div className='mb-4 relative'>
                            <div className='mb-1'><label htmlFor="dob" className='text-sm'>Date of Birth</label></div>
                            <input className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'
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
                                    onChange={(e) =>{processCountry(e.target.value);}}  id="country" className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                    {countries.map((item ) =>(
                                        <option key={item.id} className='p-1 hover:bg-greenpri' value={item.name} >{item.name}</option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <div className='mb-4'>
                            <div className='mb-1'><label htmlFor="city" className='text-sm'>City</label></div>
                            <div>
                                <select name="city" id="city" value={selectedCity} onChange={(e) =>{setSelectedCity(e.target.value)}} className='placeholder-black w-full border border-greensec focus:border-greenpri rounded focus:outline-none p-3 text-sm'>
                                    {cities.map((item , x=1) =>{
                                        return <option key={x++} className='p-1 hover:bg-greenpri' value={item.name} >{item.name}</option>
                                    })}
                                </select>
                            </div>

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
