import React, { useState } from 'react'
import PrimaryBtn from './PrimaryBtn'
import ProfileResult from './ProfileResult'
import useForm from './useForm'


const ProfileBody = () => {

    const [modifyProfile, setModifyProfile] = useState(false);

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
                    <form className='px-6 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        
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
