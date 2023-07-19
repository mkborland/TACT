// hooks
import { texts } from "../hooks/texts"

//styles
import '../styles/PlanningToolPg4.css'

function FinishingUp({ data, changeStep }) {
    const { services } = texts()

    const Arcade = data.plan.name == "arcade" ? 'Arcade' : false
    const Advanced = data.plan.name == "advanced" ? 'Advanced' : false
    const Pro = data.plan.name == "pro" ? 'Pro' : false

    const planMonthly = data.typePlan == 'Monthly'
    const title = Arcade || Advanced || Pro

    // function to calculate and display the final value of the plan and services
    const valueService = () => {
        const service01 = data.services.service01.isChecked
        const service02 = data.services.service02.isChecked
        const service03 = data.services.service03.isChecked

        const valueServiceMonthly01 = planMonthly ? services.monthly[0] : services.yearly[0]
        const valueServiceMonthly02 = planMonthly ? services.monthly[1] : services.yearly[1]
        const valueServiceMonthly03 = planMonthly ? services.monthly[2] : services.yearly[2]

        const planValue = data.plan.value
        const service01IsChecked01 = service01 ? valueServiceMonthly01 : 0
        const service01IsChecked02 = service02 ? valueServiceMonthly02 : 0
        const service01IsChecked03 = service03 ? valueServiceMonthly03 : 0

        const total = planValue + service01IsChecked01 + service01IsChecked02 + service01IsChecked03

        return `$${total}/${planMonthly ? 'mo' : 'yr'}`
    }

    return (
        <div className="form-container">
            <div className="final-informations">
                <div className="final-plan-informations">
                    <div className="title-step04">
                        <h2 >
                            {`${title} (${data.typePlan})`}
                        </h2>

                        <a href="#" onClick={() => changeStep(1)}>Change</a>
                    </div>
                    <div className="final-value">
                        <span>
                            {`$${data.plan.value}/${planMonthly ? 'mo' : 'yr'}`}
                        </span>
                    </div>
                </div>

                <hr />

                <div className="final-services-informations-container">
                    <div
                        style={{ display: data.services.service01.isChecked == true ? 'flex' : 'none' }}
                        className="final-services-informations"
                    >
                        <span>{data.services.service01.name}</span>
                        <span>{planMonthly ? `+$${services.monthly[0]}/mo` : `+$${services.yearly[0]}/yr`}</span>
                    </div>
                    <div
                        style={{ display: data.services.service02.isChecked == true ? 'flex' : 'none' }}
                        className="final-services-informations"
                    >
                        <span>{data.services.service02.name}</span>
                        <span>{planMonthly ? `+$${services.monthly[1]}/mo` : `+$${services.yearly[1]}/yr`}</span>
                    </div>
                    <div
                        style={{ display: data.services.service03.isChecked == true ? 'flex' : 'none' }}
                        className="final-services-informations"
                    >
                        <span>{data.services.service03.name}</span>
                        <span>{planMonthly ? `+$${services.monthly[2]}/mo` : `+$${services.yearly[2]}/yr`}</span>
                    </div>
                </div>


            </div>

            <div className="total-informations">
                <span>{`Total (per ${planMonthly ? 'month' : 'year'})`}</span>
                <span>{valueService()}</span>
            </div>
        </div>
    )
}

export default FinishingUp