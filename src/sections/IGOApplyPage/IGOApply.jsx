import IGOApplyStyleWrapper from "./IGOApply.style.js"  
import ApplyForm from "./ApplyForm/ApplyForm"
const IGOApply = () => {

    return (
        <IGOApplyStyleWrapper>
            <div className="container">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6 offset-md-1 col-md-10 col-sm-12">
                        <ApplyForm />
                    </div>
                </div>
            </div> 
        </IGOApplyStyleWrapper>
    )
}

export default IGOApply;