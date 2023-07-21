// hooks
import { texts } from '../../hooks/texts'

// images
import iconArcade from '../../assets/images/icon-arcade.svg'
import iconAdvanced from '../../assets/images/icon-advanced.svg'
import iconPro from '../../assets/images/icon-pro.svg'

// styles
import '../../styles/PlanningToolPg2.css'

function YourPlan({ data, updateFielHandler }) {
    const { plans } = texts();

    // function to change the current plan that the customer has chosen
    // and add it to the form template
    const changeTipePlan = () => {
        const n = data.plan.name === "arcade" ? 0 : data.plan.name === "advanced" ? 1 : 2
        if (data.typePlan === "Monthly") {
            updateFielHandler('typePlan', "Yearly")
        } else {
            updateFielHandler('typePlan', "Monthly")
        }
        updateFielHandler("plan", { ...data.plan, value: data.typePlan === "Yearly" ? plans.monthly[n] : plans.yearly[n] })
    }


    //function to add a style to the container of the plan that the client clicked on
    const IsChecked = (e, n) => {
        const planId = e.target.id
        updateFielHandler("plan", { ...data.plan, name: planId, value: data.typePlan === "Monthly" ? plans.monthly[n] : plans.yearly[n] })
    }

    return (
        // step02
        <div className="form-container">
            <div className='options-plans'>
                <div className={`input relative${data.plan.name === "arcade" ? " clicked-style" : ""}`}>
                    <div className="radio-container">
                        <input
                            type="radio"
                            name="plan"
                            id="arcade"
                            onChange={e => IsChecked(e, 0)}
                            checked={data.plan.name === "arcade"}
                        />
                    </div>
                    <div className="radio-content">
                        <div>
                            <img src={iconArcade} alt="icon arcade" />
                        </div>
                        <div className="plan-informations">
                            <h2>Arcade</h2>
                            <span className="plan-value">
                                {data.typePlan === "Monthly" ? `$${plans.monthly[0]}/mo` : `$${plans.yearly[0]}/yr`}
                            </span>

                            <span className="yearly-discount">
                                {data.typePlan !== "Monthly" ? '2 months free' : null}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={`input relative${data.plan.name === "advanced" ? ' clicked-style' : ''}`}>
                    <div className="radio-container">
                        <input
                            type="radio"
                            name="plan"
                            id="advanced"
                            onChange={e => IsChecked(e, 1)}
                            checked={data.plan.name === "advanced"}
                        />
                    </div>
                    <div className="radio-content">
                        <div>
                            <img src={iconAdvanced} alt="icon advanced" />
                        </div>
                        <div className="plan-informations">
                            <h2>Advanced</h2>
                            <span className="plan-value">
                                {data.typePlan === "Monthly" ? `$${plans.monthly[1]}/mo` : `$${plans.yearly[1]}/yr`}
                            </span>

                            <span className="yearly-discount">
                                {data.typePlan !== "Monthly" ? '2 months free' : null}
                            </span>
                        </div>
                    </div>
                </div>

                <div className={`input relative${data.plan.name === "pro" ? ' clicked-style' : ''}`}>
                    <div className="radio-container">
                        <input
                            type="radio"
                            name="plan"
                            id="pro"
                            onChange={e => IsChecked(e, 2)}
                            checked={data.plan.name === "pro"}
                        />
                    </div>
                    <div className="radio-content">
                        <div>
                            <img src={iconPro} alt="icon pro" />
                        </div>
                        <div className="plan-informations">
                            <h2>Pro</h2>
                            <span className="plan-value">
                                {data.typePlan === "Monthly" ? `$${plans.monthly[2]}/mo` : `$${plans.yearly[2]}/yr`}
                            </span>

                            <span className="yearly-discount">
                                {data.typePlan !== "Monthly" ? '2 months free' : null}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* toggle button, switch between monthly plan and annual plan */}
            <div className="toggle-option">
                <span style={{ color: data.typePlan === "Monthly" ? 'var(--cool-gray)' : 'var(--marine-blue)' }}>Monthly</span>
                <span
                    className={data.typePlan === "Monthly" ? "switch-button" : "switch-button  cliked"}
                    onClick={changeTipePlan}
                ></span>
                <span
                    style={{ color: data.typePlan === "Yearly" ? 'var(--cool-gray)' : 'var(--marine-blue)' }}
                >Yearly</span>
            </div>
        </div>
    )
}

export default YourPlan