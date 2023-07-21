//styles
import '../../styles/PlanningToolPg5.css'

// images
import iconThankYou from '../../assets/images/icon-thank-you.svg'

function Thanks() {

    return (
        <div className='thankyou-container'>
            <div className='thankyou-image'>
                <img src={iconThankYou} alt="icon thank you" />
            </div>
            <h1 className='thankyou-title'>Thank you!</h1>
            <p className='thankyou-paragraph'>
                Thanks for confirming your subscription!
                We hope you have fun using our platform. If you ever need support, please feel free to email us at
                <a href="#"> support@loremgaming.com</a>
            </p>
        </div>
    )
}

export default Thanks