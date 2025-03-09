// eslint-disable-next-line no-unused-vars
import React from 'react'
import EducationHeadSecttion from './EducationHeadSecttion'
import EducationContent from './EducationContent'

const Education = () => {
    return (
        <>
            <div className='bg-black py-1'>
                {/* Head section  */}

                <EducationHeadSecttion></EducationHeadSecttion>
                
                <EducationContent></EducationContent>
            </div>
        </>
    )
}

export default Education    
